import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION, SITE_TITLE } from "src/constans";

export async function GET(context) {
  const dailyTours = await getCollection("dailyTours");
  const pacayaSamiria = await getCollection("pacayaSamiria");
  return rss({
    // `<title>` field in output xml
    title: SITE_TITLE,
    // `<description>` field in output xml
    description: SITE_DESCRIPTION,
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: [
      dailyTours.map((tour) => ({
        title: tour.title,
        description: tour.description,
        link: `/tours-diarios/${tour.slug}/`,
      })),
      pacayaSamiria.map((tour) => ({
        title: tour.title,
        description: tour.description,
        link: `/tours-pacaya-samiria/${tour.slug}/`,
      })),
    ],
    // (optional) inject custom xml
    customData: `<language>es-pe</language>`,
  });
}
