import { defineCollection, z } from "astro:content";

const irapayAmazon = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      heroImage: image(),
      contentImage: image(),
      title: z.string(),
      description: z.string(),
      text: z.string(),
      recommendedTours: z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          duration: z.number(),
          imgPath: z.string(),
          route: z.string(),
        })
      ),
      pubDate: z.coerce.date(),
    }),
});

const heliconiaLodge = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      heroImage: image(),
      contentImage: image(),
      title: z.string(),
      description: z.string(),
      text: z.string(),
      recommendedTours: z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          duration: z.number(),
          imgPath: z.string(),
          route: z.string(),
        })
      ),
      pubDate: z.coerce.date(),
    }),
});

const cumacebaLodge = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      heroImage: image(),
      contentImage: image(),
      title: z.string(),
      description: z.string(),
      text: z.string(),
      recommendedTours: z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          duration: z.number(),
          imgPath: z.string(),
          route: z.string(),
        })
      ),
      pubDate: z.coerce.date(),
    }),
});

const pacayaSamiria = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      heroImage: image(),
      contentImage: image(),
      title: z.string(),
      description: z.string(),
      text: z.string(),
      recommendedTours: z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          duration: z.number(),
          imgPath: z.string(),
          route: z.string(),
        })
      ),
      pubDate: z.coerce.date(),
    }),
});

const dailyTours = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      heroImage: image(),
      contentImage: image(),
      title: z.string(),
      description: z.string(),
      text: z.string(),
      recommendedTours: z.array(
        z.object({
          id: z.number(),
          name: z.string(),
          duration: z.number(),
          imgPath: z.string(),
          route: z.string(),
        })
      ),
      pubDate: z.coerce.date(),
    }),
});

export const collections = {
  irapayAmazon,
  heliconiaLodge,
  cumacebaLodge,
  pacayaSamiria,
  dailyTours,
};

export type CollectionName = keyof typeof collections;
