import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional(),
        tag: z.string(),
    }),
});

const education = defineCollection({
    type: "content",
    schema: z.object({
        school: z.string(),
        degree: z.string(),
        dateStart: z.coerce.date(),
        dateEnd: z.union([z.coerce.date(), z.string()]),
    }),
});

const projects = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        dateEnd: z.union([z.coerce.date(), z.string()]).optional(),
        draft: z.boolean().optional(),
        demoURL: z.string().optional(),
        repoURL: z.string(),
        image: image().or(z.string()).optional(),
    }),
});

const achievements = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        organisation: z.string(),
        date: z.coerce.date(),
        link: z.string().optional(),
    })
});

const photos = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    location: z.string(),
    date: z.coerce.date(),
    src: image(),
    showOnHome: z.boolean().optional(),
  }),
});

export const collections = { blog, education, projects, achievements, photos };
