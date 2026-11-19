// Sekcija "Četiri stvari koje čujemo najčešće".

export type Myth = {
  statement: string;
  topic: string;
  /** true za tvrdnju koja je tačna (tamna kartica). */
  truth?: boolean;
  reply: string;
};

export const myths: Myth[] = [
  {
    statement: "Botoks zamrzava lice.",
    topic: "Botoks",
    reply: "Pravilno doziran botoks opušta samo ciljane mišiće. Lice ostaje izražajno, samo bez dubokih bora mimike.",
  },
  {
    statement: "Fileri su samo za usne.",
    topic: "Fileri",
    reply: "Hijaluronski fileri se koriste i za obraze, bradu, liniju vilice i podočnjake. Cilj je sklad proporcija, ne volumen radi volumena.",
  },
  {
    statement: "Rezultat se vidi odmah.",
    topic: "Stimulatori kolagena",
    reply: "Stimulatori kolagena podstiču kožu da sama stvara novi kolagen. Promjena se razvija postepeno, tokom nedjelja i mjeseci.",
  },
  {
    statement: "Bez konsultacije nema dobrog tretmana.",
    topic: "Prvi korak",
    truth: true,
    reply: "Procjena kože, razgovor o očekivanjima i plan prilagođen vama. Tek tada znamo koji tretman ima smisla, i da li ima.",
  },
];
