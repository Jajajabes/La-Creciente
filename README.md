# La Creciente — Sitio web

Sitio web oficial de **La Creciente**, organización política de izquierda.
Hecho con [Astro](https://astro.build) (sitio estático: rápido, seguro y de
hosting gratuito).

- 🎨 Identidad: violeta `#340052` + negro, acentos multicolor por frente.
- ✍️ Fuentes: *Art Nouveau* (ultra rough + letterpress) para títulos y
  *Anybody* para texto.
- 🌊 Concepto: "la marea que crece" — estética de cartel/serigrafía militante.

---

## 🚀 Puesta en marcha (desarrollo)

Necesitás [Node.js](https://nodejs.org) 18 o superior. Luego, en esta carpeta:

```bash
npm install      # solo la primera vez
npm run dev      # arranca el sitio en http://localhost:4321
```

| Comando           | Qué hace                                          |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Servidor local con recarga automática.            |
| `npm run build`   | Genera el sitio final en la carpeta `dist/`.      |
| `npm run preview` | Previsualiza el sitio ya compilado (`dist/`).     |

---

## ✍️ Cómo publicar un comunicado o artículo

1. Entrá a la carpeta `src/content/prensa/`.
2. Copiá un archivo `.md` existente y renombralo (sin tildes ni espacios:
   usá guiones, p. ej. `paro-nacional-2026.md`). **El nombre del archivo es la
   URL.**
3. Editá el bloque superior (entre `---`):

```markdown
---
titulo: "Título de la pieza"
fecha: 2026-06-11
resumen: "Una o dos frases que aparecen en el listado y redes."
tipo: comunicado        # comunicado | opinion | formacion
autor: "La Creciente"
destacado: false        # true para resaltarla
borrador: false         # true para ocultarla mientras se redacta
---

Acá va el contenido en **Markdown**: títulos con ##, listas con -, etc.
```

4. Guardá. Si tenés `npm run dev` corriendo, aparece al instante. Para
   publicarlo en internet, hacé `commit`/`push` (ver Despliegue).

> Las etiquetas de **tipo** definen el color: `comunicado` = rojo,
> `opinion` = violeta, `formacion` = cian.

---

## 🧩 Cómo editar el resto del contenido

- **Datos generales** (nombre, lema, correo, redes, navegación, frentes):
  `src/data/sitio.ts`. Está todo comentado.
- **Página Quiénes Somos** (historia, principios, hitos): `src/pages/quienes-somos.astro`.
- **Frentes**: editá el arreglo `frentes` en `src/data/sitio.ts`.
- **Textos del Inicio**: `src/pages/index.astro`.

---

## 🔤 Cargar las fuentes Art Nouveau

Las fuentes de marca no vienen incluidas (son de licencia). Mientras no estén,
el sitio usa *Anybody* como reemplazo y se ve bien igual. Para activarlas:

1. Conseguí los archivos de fuente y convertilos a `.woff2` en
   [transfonter.org](https://transfonter.org) si hace falta.
2. Copialos a `public/fonts/` con estos nombres:
   - `art-nouveau-ultra-rough.woff2`
   - `art-nouveau-letterpress.woff2`
3. Listo. (Las rutas se configuran en `src/styles/fuentes.css`.)

---

## 📨 Formulario "Súmate" (recibir los datos)

El formulario de `/contacto/` está listo para **Netlify Forms**: cuando
despleguen en Netlify, los envíos llegan solos al panel de Netlify
(*Forms*), sin servidor ni base de datos. Lleva un *honeypot* anti-spam.

- **En Netlify:** funciona automáticamente. Configurá notificaciones por
  correo en *Site settings → Forms → Notifications*.
- **En Cloudflare Pages u otro host:** Netlify Forms no aplica. Cambiá el
  formulario para usar [Formspree](https://formspree.io) (gratis): reemplazá
  `action="/gracias/"` por tu endpoint de Formspree y quitá `data-netlify`.
  El archivo es `src/pages/contacto.astro`.

---

## 🌐 Desplegar en internet (gratis)

### Opción A — Netlify (recomendada, los formularios funcionan solos)

1. Subí este proyecto a un repositorio en GitHub/GitLab.
2. En [netlify.com](https://www.netlify.com): *Add new site → Import project*.
3. Netlify detecta la config (`netlify.toml`): build `npm run build`,
   publish `dist`. Dale *Deploy*.
4. Conectá su dominio en *Domain settings* (HTTPS gratis automático).

### Opción B — Cloudflare Pages

1. Subí el proyecto a GitHub.
2. En Cloudflare Pages: *Create application → Connect to Git*.
3. Build command: `npm run build` · Output directory: `dist`.

> Tras desplegar, cambiá la línea `site:` de `astro.config.mjs` por el
> dominio real (afecta sitemap, RSS y enlaces para compartir).

---

## ⚖️ Notas legales (importante)

- **Donaciones:** están como *"próximamente"* a propósito. La financiación
  política en Colombia está regulada por el **CNE** (topes, prohibición de
  aportes anónimos y de fuentes prohibidas, reportes). Resuelvan eso antes de
  habilitar el botón de donar.
- **Datos personales:** hay una política base en `/contacto/#datos` (Ley 1581
  de 2012, habeas data). **Revísenla con asesoría jurídica** antes de publicar.

---

## 📁 Estructura del proyecto

```
src/
├─ components/     Header, Footer, tarjetas, marquesina, ola divisoria…
├─ content/prensa/ Los artículos y comunicados (.md) ← editás acá
├─ data/sitio.ts   Datos generales, navegación y frentes ← editás acá
├─ layouts/        Plantilla base (cabecera <head>, SEO)
├─ pages/          Una página por archivo (rutas del sitio)
└─ styles/         Sistema de diseño (global.css) y fuentes
public/            favicon, imagen para redes, _headers, fuentes
```

---

Hecho con trabajo militante. 🌊
