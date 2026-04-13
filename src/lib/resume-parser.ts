import { readFileSync } from "node:fs";

export interface Connection {
  text: string;
  href?: string;
}

export interface Entry {
  title: string;
  link?: string;
  position?: string;
  location?: string;
  date: string;
  degree?: string;
  summary?: string;
  highlights: string[];
}

export interface SkillItem {
  category: string;
  value: string;
}

export type Section =
  | { title: string; type: "text"; content: string }
  | { title: string; type: "entries"; entries: Entry[] }
  | { title: string; type: "list"; items: string[] }
  | { title: string; type: "skills"; skills: SkillItem[] };

export interface ResumeData {
  name: string;
  lastUpdated: string;
  connections: Connection[];
  sections: Section[];
}

function findClosingBracket(
  text: string,
  start: number,
  open: string,
  close: string,
): number {
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    if (text[i] === open) depth++;
    else if (text[i] === close) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function cleanText(text: string): string {
  return text
    .replace(/\\&/g, "&")
    .replace(/\\@/g, "@")
    .replace(/\\/g, "")
    .replace(/\s*--\s*/g, " \u2014 ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractStrongContent(
  text: string,
): { inner: string; end: number } | null {
  const idx = text.indexOf("#strong[");
  if (idx === -1) return null;
  const bracketStart = idx + "#strong".length;
  const bracketEnd = findClosingBracket(text, bracketStart, "[", "]");
  if (bracketEnd === -1) return null;
  return {
    inner: text.slice(bracketStart + 1, bracketEnd),
    end: bracketEnd + 1,
  };
}

function parseEntry(block: string): Entry {
  const positional: string[] = [];
  const named: Record<string, string> = {};
  let i = 0;

  while (i < block.length) {
    if (/[\s,]/.test(block[i])) {
      i++;
      continue;
    }

    const namedMatch = block.slice(i).match(/^([\w-]+)\s*:\s*\[/);
    if (namedMatch) {
      const key = namedMatch[1];
      const bracketStart = i + namedMatch[0].length - 1;
      const bracketEnd = findClosingBracket(block, bracketStart, "[", "]");
      if (bracketEnd !== -1) {
        named[key] = block.slice(bracketStart + 1, bracketEnd);
        i = bracketEnd + 1;
        continue;
      }
    }

    if (block[i] === "[") {
      const end = findClosingBracket(block, i, "[", "]");
      if (end !== -1) {
        positional.push(block.slice(i + 1, end));
        i = end + 1;
        continue;
      }
    }

    i++;
  }

  const titleRow = positional[0] || "";
  const date = cleanText(positional[1] || "");

  let title = "";
  let link: string | undefined;
  let position: string | undefined;
  let location: string | undefined;

  const strong = extractStrongContent(titleRow);
  if (strong) {
    const linkMatch = strong.inner.match(
      /#link\("([^"]+)"[^)]*\)\[([^\]]+)\]/,
    );
    if (linkMatch) {
      link = linkMatch[1];
      title = cleanText(linkMatch[2]);
    } else {
      title = cleanText(strong.inner);
    }

    const after = titleRow
      .slice(strong.end)
      .replace(/^\s*,?\s*/, "")
      .trim();
    if (after) {
      const parts = after.split("--").map((s) => cleanText(s));
      if (parts.length >= 2) {
        position = parts[0] || undefined;
        location = parts.slice(1).join(", ") || undefined;
      } else if (parts[0]) {
        position = parts[0];
      }
    }
  }

  let degree: string | undefined;
  if (named["degree-column"]) {
    const deg = extractStrongContent(named["degree-column"]);
    degree = deg ? cleanText(deg.inner) : cleanText(named["degree-column"]);
  }

  const mainCol = named["main-column-second-row"] || "";
  let summary: string | undefined;
  const highlights: string[] = [];

  const summaryMatch = mainCol.match(/#summary\[([^\]]+)\]/);
  if (summaryMatch) {
    summary = cleanText(summaryMatch[1]);
  }

  const bulletRegex = /^\s*-\s+(.+)$/gm;
  let bm;
  while ((bm = bulletRegex.exec(mainCol)) !== null) {
    highlights.push(cleanText(bm[1]));
  }

  return { title, link, position, location, date, degree, summary, highlights };
}

export function parseResume(filePath: string): ResumeData {
  const content = readFileSync(filePath, "utf-8");

  const updatedMatch = content.match(/Last updated in (.+?)\]/);
  const lastUpdated = updatedMatch ? updatedMatch[1].trim() : "";

  const nameMatch = content.match(/\n= (.+)\n/);
  if (!nameMatch || nameMatch.index === undefined)
    throw new Error("No name heading found in resume");
  const name = cleanText(nameMatch[1]);
  const body = content.slice(nameMatch.index + 1);

  // Parse connections
  const connections: Connection[] = [];
  const connIdx = body.indexOf("#connections(");
  if (connIdx !== -1) {
    const openParen = connIdx + "#connections".length;
    const closeParen = findClosingBracket(body, openParen, "(", ")");
    if (closeParen !== -1) {
      const connBlock = body.slice(openParen + 1, closeParen);
      let ci = 0;
      while (ci < connBlock.length) {
        if (connBlock[ci] === "[") {
          const end = findClosingBracket(connBlock, ci, "[", "]");
          if (end !== -1) {
            const inner = connBlock.slice(ci + 1, end);
            const linkMatch = inner.match(
              /#link\("([^"]+)"[^)]*\)\[([^\]]+)\]/,
            );
            if (linkMatch) {
              connections.push({
                text: cleanText(linkMatch[2]),
                href: linkMatch[1],
              });
            } else {
              connections.push({ text: cleanText(inner) });
            }
            ci = end + 1;
            continue;
          }
        }
        ci++;
      }
    }
  }

  // Split by == headings
  const sectionRegex = /^== (.+)$/gm;
  const starts: { title: string; headStart: number; contentStart: number }[] =
    [];
  let sm;
  while ((sm = sectionRegex.exec(body)) !== null) {
    starts.push({
      title: sm[1].trim(),
      headStart: sm.index,
      contentStart: sm.index + sm[0].length,
    });
  }

  const sections: Section[] = [];
  for (let si = 0; si < starts.length; si++) {
    const contentStart = starts[si].contentStart;
    const contentEnd =
      si + 1 < starts.length ? starts[si + 1].headStart : body.length;
    const sectionContent = body.slice(contentStart, contentEnd);
    const title = starts[si].title;

    if (
      sectionContent.includes("#education-entry(") ||
      sectionContent.includes("#regular-entry(")
    ) {
      const entries: Entry[] = [];
      const entryRegex = /#(?:education-entry|regular-entry)\(/g;
      let em;
      while ((em = entryRegex.exec(sectionContent)) !== null) {
        const openIdx = em.index + em[0].length - 1;
        const closeIdx = findClosingBracket(sectionContent, openIdx, "(", ")");
        if (closeIdx !== -1) {
          entries.push(
            parseEntry(sectionContent.slice(openIdx + 1, closeIdx)),
          );
        }
      }
      sections.push({ title, type: "entries", entries });
    } else if (sectionContent.match(/#strong\[.+?:\]/)) {
      const skills: SkillItem[] = [];
      const skillRegex = /#strong\[([^\]]+):\]\s*(.+)/g;
      let skm;
      while ((skm = skillRegex.exec(sectionContent)) !== null) {
        skills.push({
          category: cleanText(skm[1]),
          value: cleanText(skm[2]),
        });
      }
      sections.push({ title, type: "skills", skills });
    } else if (sectionContent.match(/^\s*-\s+/m)) {
      const items: string[] = [];
      const bulletRegex = /^\s*-\s+(.+)$/gm;
      let bm;
      while ((bm = bulletRegex.exec(sectionContent)) !== null) {
        items.push(cleanText(bm[1]));
      }
      sections.push({ title, type: "list", items });
    } else {
      sections.push({
        title,
        type: "text",
        content: cleanText(sectionContent),
      });
    }
  }

  return { name, lastUpdated, connections, sections };
}
