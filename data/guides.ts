// Edukativni vodiči: "Koža kroz decenije", "Šta da očekujete" i "Bore mimike".

export type Decade = {
  age: string;
  title: string;
  happens: string;
  helps: string;
};

export const decades: Decade[] = [
  {
    age: "20+",
    title: "Vrhunac kolagena",
    happens: "Koža je čvrsta i elastična, ali oko 25. godine proizvodnja kolagena počinje polako da opada.",
    helps: "SPF svaki dan, hidratacija i mezoterapija za sjaj i kvalitet kože.",
  },
  {
    age: "30+",
    title: "Prvi tragovi",
    happens: "Pojavljuju se bore mimike, a koža gubi dio sjaja i elastičnosti.",
    helps: "Botoks za bore mimike, mezoterapija i prvi stimulatori kolagena.",
  },
  {
    age: "40+",
    title: "Volumen i čvrstina",
    happens: "Gubitak volumena i čvrstine postaje vidljiviji, a kontura lica se mijenja.",
    helps: "Stimulatori kolagena i hijaluronski fileri za volumen i konturu.",
  },
  {
    age: "50+",
    title: "Tanja koža",
    happens: "Koža je tanja i suvlja, sa manje potpore u dubljim slojevima.",
    helps: "Kombinovani plan: stimulatori kolagena, fileri i njega kvaliteta kože.",
  },
];

export type TimelineStep = { title: string; text: string };

export const collagenSteps: TimelineStep[] = [
  {
    title: "Dan tretmana",
    text: "Kratak tretman, a većina pacijenata se odmah vraća svakodnevnim obavezama. Moguć je blag otok, crvenilo ili modrica, koji prolaze za nekoliko dana.",
  },
  {
    title: "Prve nedjelje",
    text: "Početni otok se povlači, pa se može činiti da efekta nema. To je normalno: novi kolagen tek počinje da se stvara.",
  },
  {
    title: "2 do 3 mjeseca",
    text: "Koža postaje čvršća i elastičnija. Promjene su postepene, pa izgledate odmornije, a ne „urađeno“.",
  },
  {
    title: "Do 2 godine",
    text: "Kod određenih pacijenata efekat može trajati i do dvije godine. Po potrebi se plan dopunjuje na kontroli.",
  },
];

export const mimicRows: TimelineStep[] = [
  {
    title: "Mimika",
    text: "Svaki osmijeh i mrštenje pokreću mišiće lica. Koža iznad njih se pri tome nabira.",
  },
  {
    title: "Dinamičke bore",
    text: "Vide se samo kad pokrenete lice. Čim se opustite, nestaju.",
  },
  {
    title: "Statičke bore",
    text: "Godinama se nabiranje ponavlja, pa se bore urežu i ostaju vidljive i kad je lice opušteno.",
  },
  {
    title: "Tretman",
    text: "Botoks opušta mišiće koji stvaraju bore. Koža se manje nabira, a lice ostaje prirodno pokretno.",
  },
];
