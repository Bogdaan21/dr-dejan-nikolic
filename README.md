# Dr Dejan Nikolić — Next.js sajt

Personalizovani sajt estetske medicine za dr Dejana Nikolića, napravljen u Next.js-u. Originalni HTML template je sačuvan u korijenu projekta, dok se aktivni sadržaj nalazi u `content/`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dark variant is available at [http://localhost:3000/dark](http://localhost:3000/dark).

## Kontakt forma

Kopirajte `.env.example` u `.env.local` i podesite Resend API ključ i email na koji stižu upiti. Bez ovih vrijednosti forma prikazuje poruku da još nije podešena.

## Project structure

- `app/` — Next.js pages, runtime bridge, and contact API
- `public/` — original images, styles, and browser scripts
- `content/` — personalizovani sadržaj koji Next.js prikazuje
- `index.html` and `index-dark.html` — originalni, netaknuti HTML template
- `img/`, `css/`, and `js/` — untouched original source assets
