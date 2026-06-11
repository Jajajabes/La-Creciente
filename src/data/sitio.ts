/**
 * Datos compartidos del sitio.
 * Editá acá la navegación, los frentes y las redes; se reflejan
 * en todo el sitio (header, footer, páginas).
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
    { nombre: "Instagram", url: "https://instagram.com/", etiqueta: "@lacreciente" },
    { nombre: "Twitter / X", url: "https://x.com/", etiqueta: "@lacreciente" },
    { nombre: "TikTok", url: "https://tiktok.com/", etiqueta: "@lacreciente" },
    { nombre: "YouTube", url: "https://youtube.com/", etiqueta: "La Creciente" },
  ],
};

export const navegacion = [
  { texto: "Inicio", url: "/" },
  { texto: "Quiénes Somos", url: "/quienes-somos/" },
  { texto: "Frentes", url: "/frentes/" },
  { texto: "Prensa / Formación", url: "/prensa/" },
  { texto: "Contacto", url: "/contacto/" },
];

export type Frente = {
  slug: string;
  nombre: string;
  resumen: string;
  descripcion: string;
  color: string; // variable CSS
  consignas: string[];
};

export const frentes: Frente[] = [
  {
    slug: "juventud",
    nombre: "Juventud",
    resumen: "Estudiantes y juventudes organizadas.",
    descripcion:
      "Articulamos a estudiantes, jóvenes trabajadores y desempleados alrededor de la educación pública, el derecho al futuro y la rebeldía organizada. La universidad y el barrio como escuelas de lucha.",
    color: "var(--amarillo)",
    consignas: ["Educación pública y gratuita", "Cupo y vida digna", "Futuro para la juventud"],
  },
  {
    slug: "trabajadores",
    nombre: "Trabajadores",
    resumen: "Sindicatos y economía popular.",
    descripcion:
      "Acompañamos a quienes sostienen el país con su trabajo: sindicatos, informales, economía popular. Salario digno, estabilidad y un modelo productivo que no se construya sobre la espalda de la clase trabajadora.",
    color: "var(--rojo)",
    consignas: ["Salario y trabajo digno", "Reforma laboral", "Organización sindical"],
  },
  {
    slug: "feminismos",
    nombre: "Feminismos",
    resumen: "Vida libre de violencias.",
    descripcion:
      "Construimos un feminismo popular y antipatriarcal: contra las violencias, por los cuidados como asunto colectivo y por la autonomía de los cuerpos. No hay revolución sin nosotras.",
    color: "var(--magenta)",
    consignas: ["Vida libre de violencias", "Cuidados colectivos", "Autonomía de los cuerpos"],
  },
  {
    slug: "territorial",
    nombre: "Territorial",
    resumen: "Barrios, campo y medio ambiente.",
    descripcion:
      "Tejemos organización en barrios, veredas y territorios. Defensa del agua y la vida, soberanía alimentaria y poder local frente al despojo. El territorio se defiende habitándolo y organizándolo.",
    color: "var(--verde)",
    consignas: ["Defensa del agua y la vida", "Soberanía alimentaria", "Poder local"],
  },
  {
    slug: "estudiantil-unal",
    nombre: "Estudiantil · UNAL",
    resumen: "Constituyente universitaria.",
    descripcion:
      "Impulsamos el proceso constituyente universitario y la defensa de la universidad pública. Cogobierno, autonomía y una Universidad Nacional al servicio del pueblo, no del mercado.",
    color: "var(--cian)",
    consignas: ["Constituyente universitaria", "Autonomía y cogobierno", "Universidad para el pueblo"],
  },
];
