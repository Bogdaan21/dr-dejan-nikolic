# Dr Dejan Nikolić — Next.js sajt

Personalizovani sajt estetske medicine za dr Dejana Nikolića, napravljen u Next.js-u. Stranica je sastavljena od React (JSX) komponenti, a tekstovi koji se ponavljaju nalaze se u `data/`. Originalni HTML template je sačuvan u korijenu projekta samo kao referenca.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dark variant is available at [http://localhost:3000/dark](http://localhost:3000/dark).

## Kontakt forma

Kopirajte `.env.example` u `.env.local` i podesite Resend API ključ i email na koji stižu upiti. Bez ovih vrijednosti forma prikazuje poruku da još nije podešena.

## Struktura projekta

- `app/page.tsx`, `app/dark/page.tsx` — početna stranica i tamna varijanta; obje prikazuju `SitePage`
- `app/components/SitePage.tsx` — redoslijed sekcija na stranici
- `app/components/sections/` — po jedna komponenta za svaku sekciju (Hero, Tretmani, FAQ…)
- `app/components/layout/` — zaglavlje, mobilni meni i footer
- `app/components/ui/` — dijelovi koji se ponavljaju (naslov sekcije, okvir vodiča, traka za zakazivanje)
- `app/components/ThemeRuntime.tsx` — učitava skripte šablona (jQuery, animacije, popup prozori)
- `data/` — sadržaj: kontakt i navigacija (`site.ts`), tretmani, vodiči, mitovi, pitanja; `template.ts` je probni sadržaj iz šablona
- `app/api/` — kontakt forma i Instagram objave
- `app/globals.css` i `public/css/` — stilovi; `public/js/` — skripte šablona
- `index.html`, `index-dark.html`, `img/`, `css/`, `js/` u korijenu — originalni, netaknuti šablon

## Važno za izmjene

Animacije, popup prozori i ostali efekti dolaze iz skripti šablona koje rade direktno nad HTML-om. Zato:

- klase i `data-*` atribute u komponentama ne mijenjajte bez provjere u `public/js/init.js` i CSS-u;
- komponente stranice nemaju state i ne smiju se ponovo iscrtavati na klijentu;
- dok `npm run dev` radi, poslije izmjene koda osvježite stranicu (Fast Refresh zamijeni HTML, pa skripte izgube vezu sa njim).
