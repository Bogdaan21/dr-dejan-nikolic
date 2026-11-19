// Sekcija "Najčešća pitanja". Prvo pitanje je otvoreno pri učitavanju.

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Da li tretman boli?",
    answer: "Većina pacijenata opisuje blagu nelagodnost. Po potrebi koristimo anestetičku kremu, a tretman radimo polako i pažljivo.",
  },
  {
    question: "Koliko traje tretman?",
    answer: "Najčešće od pola sata do sat vremena, zavisno od tretmana i regije koju radimo.",
  },
  {
    question: "Kada mogu nazad na posao?",
    answer: "Uglavnom odmah. Moguć je blag otok ili crvenilo, koji prolaze za nekoliko dana.",
  },
  {
    question: "Da li će se primijetiti?",
    answer: "Cilj je da izgledate odmorno i svježe, a ne „urađeno“. Dobar tretman se ne vidi, vidi se rezultat.",
  },
];
