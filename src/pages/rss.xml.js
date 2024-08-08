import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "src/constans";

export async function GET(context) {
  const cumacebaLodge = await getCollection("cumacebaLodge");
  const dailyTours = await getCollection("dailyTours");
  const heliconiaLodge = await getCollection("heliconiaLodge");
  const irapayAmazon = await getCollection("irapayAmazon");
  const pacayaSamiria = await getCollection("pacayaSamiria");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [
      ...cumacebaLodge.map(
        ({ data: { title, description, pubDate }, slug }) => ({
          title: title,
          description: description,
          pubDate: pubDate,
          link: `/tours-diarios/${slug}/`,
        })
      ),
      ...dailyTours.map(({ data: { title, description, pubDate }, slug }) => ({
        title: title,
        description: description,
        pubDate: pubDate,
        link: `/tours-pacaya-samiria/${slug}/`,
      })),
      ...heliconiaLodge.map(
        ({ data: { title, description, pubDate }, slug }) => ({
          title: title,
          description: description,
          pubDate: pubDate,
          link: `/tours-pacaya-samiria/${slug}/`,
        })
      ),
      ...irapayAmazon.map(
        ({ data: { title, description, pubDate }, slug }) => ({
          title: title,
          description: description,
          pubDate: pubDate,
          link: `/tours-pacaya-samiria/${slug}/`,
        })
      ),
      ...pacayaSamiria.map(
        ({ data: { title, description, pubDate }, slug }) => ({
          title: title,
          description: description,
          pubDate: pubDate,
          link: `/tours-pacaya-samiria/${slug}/`,
        })
      ),
    ],
  });
}
