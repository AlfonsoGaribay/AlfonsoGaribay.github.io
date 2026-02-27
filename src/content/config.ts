import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([])
    })
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      year: z.string(),
      pubDate: z.date().optional(),
      heroImage: image().optional()
    })
});

export const collections = { blog, projects };
