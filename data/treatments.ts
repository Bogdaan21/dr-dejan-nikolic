// Tretmani: kartice u sekciji "Tretmani" i tekst u popup prozoru.
// Novi tretman se dodaje novim unosom u ovaj niz.

export type Treatment = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  icon: string;
  image: string;
  imageAlt: string;
  linkLabel: string;
  details: string[];
};

export const treatmentsIntro = {
  kicker: "Čime se bavimo",
  title: "Tretmani",
  text: "Hijaluronski fileri, botoks, stimulatori kolagena, mezoterapija i lipoliza. Koji je pravi za vas, odlučujemo zajedno na konsultaciji.",
};

export const treatments: Treatment[] = [
  {
    slug: "hijaluronski-fileri",
    name: "Hijaluronski fileri",
    tagline: "Volumen i kontura",
    summary: "Nadoknađuju izgubljeni volumen i naglašavaju konture lica.",
    icon: "/img/svg/user.svg",
    image: "/img/treatments/hyaluronic-fillers.jpg",
    imageAlt: "Konsultacija za hijaluronske filere",
    linkLabel: "Saznajte više o hijaluronskim filerima",
    details: [
      "Nadoknađuju izgubljeni volumen i naglašavaju konture lica, poput usana, obraza i linije vilice.",
      "Količina se prilagođava proporcijama vašeg lica. Manje je često više.",
      "Plan i očekivani rezultat definišemo na konsultaciji.",
    ],
  },
  {
    slug: "botoks",
    name: "Botoks",
    tagline: "Bore mimike",
    summary: "Opušta mišiće koji stvaraju bore, uz očuvanu prirodnu mimiku.",
    icon: "/img/svg/edit.svg",
    image: "/img/treatments/botox.jpg",
    imageAlt: "Konsultacija za botoks",
    linkLabel: "Saznajte više o botoksu",
    details: [
      "Tretman opušta mišiće koji stvaraju bore na čelu, između obrva i oko očiju.",
      "Cilj je odmoran izgled, uz očuvanu prirodnu mimiku.",
      "Efekat se razvija tokom nekoliko dana.",
    ],
  },
  {
    slug: "stimulatori-kolagena",
    name: "Stimulatori kolagena",
    tagline: "Obnova kože",
    summary: "Podstiču kožu da sama stvara novi kolagen, postepeno i prirodno.",
    icon: "/img/svg/setting.svg",
    image: "/img/treatments/collagen-stimulators.jpg",
    imageAlt: "Konsultacija za stimulatore kolagena",
    linkLabel: "Saznajte više o stimulatorima kolagena",
    details: [
      "Stimulatori podstiču kožu da sama stvara novi kolagen.",
      "Rezultat se razvija postepeno, tokom narednih nedjelja i mjeseci, a koža postaje čvršća i elastičnija.",
      "Koristimo AESPLLA, PLLA biostimulator.",
    ],
  },
  {
    slug: "mezoterapija",
    name: "Mezoterapija",
    tagline: "Hidratacija i sjaj",
    summary: "Mikroinjekcije za hidriraniju, svježiju i ujednačeniju kožu.",
    icon: "/img/svg/design.svg",
    image: "/img/treatments/mesotherapy.jpg",
    imageAlt: "Tretman mezoterapije",
    linkLabel: "Saznajte više o mezoterapiji",
    details: [
      "Mikroinjekcije hijaluronske kiseline, vitamina i aminokiselina u površinski sloj kože.",
      "Koža postaje hidriranija, svježija i ujednačenijeg tena.",
      "Najčešće se radi kao serija tretmana.",
    ],
  },
  {
    slug: "lipoliza",
    name: "Lipoliza",
    tagline: "Oblikovanje",
    summary: "Injekcioni tretman manjih, lokalizovanih masnih naslaga.",
    icon: "/img/svg/maximize.svg",
    image: "/img/treatments/lipolysis.jpg",
    imageAlt: "Konsultacija za lipolizu",
    linkLabel: "Saznajte više o lipolizi",
    details: [
      "Injekcioni tretman manjih, lokalizovanih masnih naslaga, na primjer ispod brade.",
      "Namijenjen je oblikovanju, a ne gubitku kilograma.",
      "Procjenom na konsultaciji utvrđujemo da li je tretman prikladan za vas.",
    ],
  },
];
