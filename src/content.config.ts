import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const eventsCollection = defineCollection({
	loader: glob({ pattern: '*.mdx', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
		venueName: z.string().optional(),
		venueAddress: z.string().optional(),
		eventDate: z.string().optional(),
		eventTime: z.string().optional(),
		sortDate: z.coerce.date(),
		status: z.enum(['upcoming', 'past']),
		featuredImage: z.string(),
		excerpt: z.string(),
  }),
});

export const collections = {
  events: eventsCollection,
};
