# Instagram sekcija — podešavanje

Sekcija "Instagram" na sajtu sama prikazuje posljednje objave sa profila
**@dr_dejan_nikolic**. Klik na objavu otvara tu sliku ili video na Instagramu.
Nove objave se na sajtu pojave najkasnije **15 minuta** nakon objavljivanja.

Da bi radilo, sajtu treba **pristupni token** (Instagram API with Instagram Login).
Dok token nije unesen, sekcija prikazuje poruku i link na profil.

## 1. Profil mora biti profesionalni

U Instagram aplikaciji: Podešavanja → Tip naloga i alatke → **Prebaci na profesionalni nalog**
(Creator ili Business). Lični nalozi ne mogu da koriste API.

## 2. Napravi Meta aplikaciju

1. Otvori https://developers.facebook.com/apps i klikni **Create app**.
2. Za namjenu izaberi opciju za Instagram (*"Manage messaging & content on Instagram"*).
3. U aplikaciji otvori **Instagram → API setup with Instagram login**.

## 3. Generiši token

1. U koraku **Generate access tokens** klikni **Add account** i prijavi se na @dr_dejan_nikolic.
2. Klikni **Generate token** pored naloga i kopiraj token
   (dugotrajni token, važi **60 dana**).
3. Aplikacija može ostati u *Development* režimu, jer prikazuje samo tvoje objave.

## 4. Unesi token u sajt

U glavnom folderu projekta (pored `package.json`) napravi fajl `.env.local`:

```
INSTAGRAM_ACCESS_TOKEN=ovdje_zalijepi_token
```

Zatim restartuj `npm run dev`. Na produkciji (npr. Vercel) dodaj istu
promjenljivu u Environment Variables i ponovo deployuj.

Provjera: otvori http://localhost:3000/api/instagram. Trebalo bi da vidiš
listu objava (`"posts": [...]`).

## 5. Obnavljanje tokena (svakih ~60 dana)

Token ističe nakon 60 dana. Prije isteka ga obnovi otvaranjem ovog linka u pregledaču
(zamijeni `TOKEN` trenutnim tokenom):

```
https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=TOKEN
```

Odgovor sadrži novi `access_token`. Upiši ga u `.env.local` (i na produkciji).
Ako token istekne, sekcija ne pada: prikazuje poruku i link na profil dok ne uneseš novi.

## Podešavanja

- **Broj objava**: atribut `data-limit="8"` na sekciji `id="instagram"` u `content/index.html`
  i `content/index-dark.html` (najviše 24).
- **Učestalost osvježavanja**: `REVALIDATE_SECONDS` u `app/api/instagram/route.ts` (sada 900 s = 15 min).
