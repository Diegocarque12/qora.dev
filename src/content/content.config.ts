import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({ url: z.string().url(), alt: z.string() }).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
