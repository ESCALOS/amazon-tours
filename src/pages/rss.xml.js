import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "src/constans";

export async function GET(context) {
  const dailyTours = await getCollection("dailyTours");
  const pacayaSamiria = await getCollection("pacayaSamiria");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [
      ...dailyTours.map(({ data: { title, description, pubDate }, slug }) => ({
        title: title,
        description: description,
        pubDate: pubDate,
        link: `/tours-diarios/${slug}/`,
      })),
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
