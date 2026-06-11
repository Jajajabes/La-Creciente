import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { sitio } from "../data/sitio";

export async function GET(context) {
  const piezas = (await getCollection("prensa", ({ data }) => !data.borrador)).sort(
    (a, b) => b.data.fecha.getTime() - a.data.fecha.getTime()
  );

  return rss({
    title: `${sitio.nombre} — Prensa & formación`,
    description: sitio.descripcion,
    site: context.site,
    items: piezas.map((p) => ({
      title: p.data.titulo,
      pubDate: p.data.fecha,
      description: p.data.resumen,
      author: p.data.autor,
      link: `/prensa/${p.id}/`,
    })),
    customData: `<language>es-co</language>`,
  });
}
