#import "@preview/rendercv:0.3.0": *

#show: rendercv.with(
  name: "Hu Bowen",
  title: "Hu Bowen - CV",
  footer: context { [#emph[Hu Bowen -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Mar 2026] ],
  locale-catalog-language: "en",
  text-direction: ltr,
  page-size: "us-letter",
  page-top-margin: 0.5in,
  page-bottom-margin: 0.5in,
  page-left-margin: 0.5in,
  page-right-margin: 0.5in,
  page-show-footer: true,
  page-show-top-note: false,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(0, 0, 0),
  colors-connections: rgb(0, 0, 0),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 0, 0),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "XCharter",
  typography-font-family-name: "XCharter",
  typography-font-family-headline: "XCharter",
  typography-font-family-connections: "XCharter",
  typography-font-family-section-titles: "XCharter",
  typography-font-size-body: 10pt,
  typography-font-size-name: 25pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 9pt,
  typography-font-size-section-titles: 1.3em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: true,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: false,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.5cm,
  header-space-below-headline: 0.5cm,
  header-space-below-connections: 0.5cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: false,
  header-connections-display-urls-instead-of-usernames: false,
  header-connections-separator: "•",
  header-connections-space-between-connections: 0.4cm,
  section-titles-type: "with_full_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.2cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.3em,
  sections-space-between-regular-entries: 1em,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0.2cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-degree-width: 1cm,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0cm,
  entries-highlights-bullet:  "•" ,
  entries-highlights-nested-bullet:  "•" ,
  entries-highlights-space-left: 0.15cm,
  entries-highlights-space-above: 0cm,
  entries-highlights-space-between-items: 0cm,
  entries-highlights-space-between-bullet-and-text: 0.5em,
  date: datetime(
    year: 2026,
    month: 3,
    day: 20,
  ),
)


= Hu Bowen

#connections(
  [Singapore],
  [#link("mailto:contact@hubowen.dev", icon: false, if-underline: false, if-color: false)[contact\@hubowen.dev]],
  [#link("https://linkedin.com/in/hubowen", icon: false, if-underline: false, if-color: false)[in/hubowen]],
  [#link("https://github.com/notbowen", icon: false, if-underline: false, if-color: false)[github.com/notbowen]],
)


== About Me

A self-driven lifelong learner with a passion for all things computing-related, with a wide range of interests from artificial intelligence to cybersecurity while maintaining a solid foundation. Excellent academic performance along with a number of supercurricular accolades. Looking to deepen my understanding across the field of computing, including programming language theory, formal verification, hardware circuits, artificial intelligence, and software exploitation.

== Education

#education-entry(
  [
    #strong[Ngee Ann Polytechnic], Cybersecurity \& Digital Forensics -- Singapore, SG

  ],
  [
    Apr 2023 – Apr 2026
  ],
  degree-column: [
    #strong[Dip.]
  ],
  main-column-second-row: [
    - GPA: 3.98/4.00

    - 11 Module Distinctions

    - DSTA Polytechnic Digital Scholar

    - Vice-President, NullSec (Cybersecurity Interest Group)
  ],
)

== Experience

#regular-entry(
  [
    #strong[Defence Science \& Technology Agency], Cybersecurity Intern -- Singapore, SG

  ],
  [
    Mar 2025 - Mar 2026
  ],
  main-column-second-row: [
    - Maintained an internal safety evaluation tool

    - Researched and benchmarked attacks on Retrieval-Augmented Generation (RAG) systems
  ],
)

== Projects

#regular-entry(
  [
    #strong[#link("https://github.com/notbowen/advent-of-fpga-2025")[Advent of FPGA 2025]]

  ],
  [
    Jan 2026
  ],
  main-column-second-row: [
    #summary[Implemented Advent of Code solutions on an FPGA with Jane Street's DSL]

    - Wrote logic similar to the Game of Life by using shift registers and line buffers to represent a convolution window

    - Achieved a 100x speedup relative to my naive solution in OCaml

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/notbowen/ponger")[Ponger]]

  ],
  [
    Oct 2024 - Dec 2024
  ],
  main-column-second-row: [
    #summary[Discord bot for a cybersecurity community of 80+ members]

    - Wrote a community management Discord bot in Rust using its Serenity library

    - Implemented a custom message reaction API to assign roles to members

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/notbowen/SimpleOS")[SimpleOS]]

  ],
  [
    May 2022 - Jun 2022
  ],
  main-column-second-row: [
    #summary[Bare metal operating system from scratch]

    - Created my own bootloader in x86 assembly to load a C kernel in 32 bit mode

    - Coded a rudimentary command parser and hardcoded a text based snake game into the kernel

  ],
)

== Awards

- National Olympiad in Artificial Intelligence 2026 (Gold)

- The InfoSecurity Challenge 2025 (Top 1%)

- Singapore AI CTF 2025 -- Pre-University (Silver)

- WorldSkills Singapore 2025 -- Cyber Security (Bronze)

== Skills

#strong[Languages:] Python, C++, Rust, OCaml

#strong[Interests:] Machine Learning, Programming Language Theory, Software Exploitation
