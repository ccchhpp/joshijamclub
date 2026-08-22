import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.string(),
    authors: z.array(z.string()).optional(),
    featuredImage: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.string().optional(),
  }),
});

export const collections = {
  events: eventsCollection,
};
