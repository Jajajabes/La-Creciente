import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Colección "prensa": comunicados, artículos de opinión y materiales de
 * formación. Para publicar algo nuevo, creá un archivo .md dentro de
 * src/content/prensa/ con el frontmatter de abajo.
 */
const prensa = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/prensa" }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    resumen: z.string(),
    // Tipo de pieza: define la etiqueta de color en la web.
    tipo: z.enum(["comunicado", "opinion", "formacion"]).default("opinion"),
    autor: z.string().default("La Creciente"),
    frente: z.string().optional(),
    destacado: z.boolean().default(false),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { prensa };
