import { defineCollection, z } from "astro:content";

const dailyTours = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      heroImage: image(),
      title: z.string(),
    }),
});

const pacayaSamiria = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      heroImage: image(),
      title: z.string(),
    }),
});

export const collections = { dailyTours, pacayaSamiria };
