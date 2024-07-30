import { defineCollection, z } from "astro:content";

const dailyTours = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      heroImage: image(),
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
    }),
});

const pacayaSamiria = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      heroImage: image(),
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
    }),
});

export const collections = { dailyTours, pacayaSamiria };
