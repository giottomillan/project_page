# project_page

Migracion de portfolio estatico a Next.js 14 + Tailwind CSS + JavaScript.

## Stack

- Next.js (App Router)
- Tailwind CSS
- JavaScript
- next/image + next/font

## Rutas

- Espanol: `/`, `/about`, `/projects`, `/contact`
- Ingles: `/en`, `/en/about`, `/en/projects`, `/en/contact`

## Desarrollo local

```bash
npm install
npm run dev
```

## Build estatico para GitHub Pages

```bash
npm run build
```

El build exportado queda en `out/`.

## Datos editables

- Perfil: `data/profile.json`
- Proyectos: `data/projects.json`
