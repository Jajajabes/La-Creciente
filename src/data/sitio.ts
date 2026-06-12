/**
 * Datos compartidos del sitio.
 * Editá acá la navegación, los frentes y las redes; se reflejan
 * en todo el sitio (header, footer, páginas).
 * Los "icono" usan la librería Phosphor (ph:) o Simple Icons (simple-icons:).
 */

export const sitio = {
  nombre: "La Creciente",
  lema: "Crece el poder de la gente",
  descripcion:
    "Organización política de izquierda. Construimos poder popular desde la juventud, el trabajo, los feminismos y el territorio.",
  // Cambiá esto cuando definan correos/redes reales:
  email: "contacto@lacreciente.org",
  ciudad: "Bogotá · Colombia",
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/", etiqueta: "@lacreciente", icono: "simple-icons:instagram" },
    { nombre: "Twitter / X", url: "https://x.com/", etiqueta: "@lacreciente", icono: "simple-icons:x" },
    { nombre: "TikTok", url: "https://tiktok.com/", etiqueta: "@lacreciente", icono: "simple-icons:tiktok" },
    { nombre: "YouTube", url: "https://youtube.com/", etiqueta: "La Creciente", icono: "simple-icons:youtube" },
  ],
};

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
  color: string; // variable CSS
  icono: string; // nombre de icono Phosphor (ph:...)
  consignas: string[];
};

export const frentes: Frente[] = [
  {
    slug: "trabajo-sindicalismo",
    nombre: "Trabajo y Sindicalismo",
    resumen: "Análisis del trabajo y fortalecimiento sindical.",
    descripcion:
      "Realizamos análisis de coyuntura y estudios sobre la situación del trabajo en el país, y aportamos al fortalecimiento de los procesos de sindicalización existentes y a la reducción de la fragmentación sindical.",
    color: "var(--rojo)",
    icono: "ph:hammer",
    consignas: ["Trabajo digno", "Fortalecer los sindicatos", "Contra la fragmentación sindical"],
  },
  {
    slug: "feminismos",
    nombre: "Feminismos",
    resumen: "Género, diversidades y cuidado.",
    descripcion:
      "Desarrollamos conversaciones y discusiones alrededor del género, las diversidades sexo-genéricas y los feminismos, hacia adentro y hacia afuera de la colectividad. Con ello fortalecemos nuestros principios, nuestras relaciones y el trabajo colectivo.",
    color: "var(--magenta)",
    icono: "ph:gender-female",
    consignas: ["El cuidado desde un feminismo para el 99%", "Vida libre de violencias", "Diversidades sexo-genéricas"],
  },
  {
    slug: "estudiantil-unal",
    nombre: "Estudiantil · UNAL",
    resumen: "Organización en la Universidad Nacional.",
    descripcion:
      "Promovemos la construcción política colectiva y organizada en la Universidad Nacional de Colombia, incentivando espacios de discusión y formación donde la comunidad universitaria analice e incida sobre las problemáticas que aquejan a la Universidad y al movimiento estudiantil.",
    color: "var(--cian)",
    icono: "ph:graduation-cap",
    consignas: ["Universidad pública", "Constituyente universitaria", "Movimiento estudiantil"],
  },
  {
    slug: "agrario-ambiental",
    nombre: "Agrario y Ambiental",
    resumen: "Tierra, alimentos y defensa de la vida.",
    descripcion:
      "Abordamos críticamente las estructuras de dominación colonial, patriarcal y capitalista desde las discusiones sobre la producción y el consumo de alimentos, trabajando en conjunto con el movimiento social, campesino y rural.",
    color: "var(--verde)",
    icono: "ph:plant",
    consignas: ["Soberanía alimentaria", "Defensa de la vida y el territorio", "Junto al campesinado"],
  },
];

export type Principio = { titulo: string; texto: string; color: string };

/** Los 9 principios de La Creciente (Declaración Política, 2024). */
export const principios: Principio[] = [
  { titulo: "Solidaridad socialista", texto: "De cada cual según sus capacidades, a cada cual según sus necesidades.", color: "var(--rojo)" },
  { titulo: "Mandar obedeciendo", texto: "Priorizamos la construcción y la toma de decisiones de forma colectiva.", color: "var(--violeta)" },
  { titulo: "Autonomía y autogestión", texto: "Nos organizamos y sostenemos por nuestros propios medios y decisiones.", color: "var(--verde)" },
  { titulo: "Abolicionismo", texto: "Contra todas las formas de opresión, dominación y explotación.", color: "var(--magenta)" },
  { titulo: "Antipunitivismo y antimilitarismo", texto: "Desde un enfoque restaurativo y reparador.", color: "var(--cian)" },
  { titulo: "Antipatriarcalismo", texto: "En nuestro quehacer y en nuestras relaciones interpersonales.", color: "var(--magenta)" },
  { titulo: "Cuidado relacional militante", texto: "El cuidado como práctica política, no solo como discurso.", color: "var(--amarillo)" },
  { titulo: "Reconocimiento de saberes", texto: "Valoramos los saberes, haceres y experiencias de todxs.", color: "var(--verde)" },
  { titulo: "Compromiso y confianza", texto: "Compromiso, corresponsabilidad y confianza compartida.", color: "var(--amarillo)" },
];
