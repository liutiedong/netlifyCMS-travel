import { defineCollection, z } from 'astro:content';

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    destination: z.string(),
    bestTimeToVisit: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'guides': guidesCollection,
};