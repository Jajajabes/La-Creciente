/**
 * Datos del sitio. El CONTENIDO editable vive en src/data/contenido/*.json
 * (lo edita el panel /admin con Sveltia CMS). Acá solo se importa y se
 * tipa para usarlo en componentes y páginas.
 */
import ajustes from "./contenido/ajustes.json";
import frentesData from "./contenido/frentes.json";
import principiosData from "./contenido/principios.json";

export const sitio = ajustes;

// La navegación es estructural (define las rutas), no se edita desde el CMS.
export const navegacion = [
  { texto: "Inicio", url: "/" },
  { texto: "Quiénes Somos", url: "/quienes-somos/" },
  { texto: "Frentes", url: "/frentes/" },
  { texto: "Prensa", url: "/prensa/" },
  { texto: "Formación", url: "/formacion/" },
  { texto: "Contacto", url: "/contacto/" },
];

export type Frente = {
  slug: string;
  nombre: string;
  resumen: string;
  descripcion: string;
  color: string;
  icono: string;
  consignas: string[];
};
export const frentes: Frente[] = frentesData.items as Frente[];

export type Principio = { titulo: string; texto: string; color: string };
export const principios: Principio[] = principiosData.items as Principio[];
