export type Locale = "me" | "en";

export const localizedContent = {
  me: {
    navigation: [
      { href: "#home", label: "Početna" },
      { href: "#about", label: "O doktoru" },
      { href: "#consultation", label: "Konsultacija" },
      { href: "#portfolio", label: "Portfolio", hidden: true },
      { href: "#treatments", label: "Tretmani" },
      { href: "#resume", label: "My Resume", hidden: true },
      { href: "#instagram", label: "Instagram", hidden: true },
      { href: "#contact", label: "Kontakt" },
    ],
    hero: {
      profession: "Doktor estetske medicine",
      name: "dr Dejan Nikolić",
      lead: "Vaše lice,",
      slogans: ["samo odmornije", "svježe i prirodno"],
      cta: "Zakažite konsultaciju",
      aboutLabel: "O doktoru",
    },
    about: {
      eyebrow: "Dobro došli",
      title: "Dr Dejan",
      titleAccent: "Nikolić",
      subtitle: "Estetska medicina · Nikšić",
      paragraphs: [
        "Ja sam dr Dejan Nikolić i bavim se estetskom medicinom. Vjerujem u tretmane koji ne mijenjaju lice, već naglašavaju ono najbolje u njemu.",
        "Cilj nije da promijenimo vaše lice, već da podstaknemo njegov prirodni potencijal. Dobar rezultat ne izgleda kao tretman, već kao odmoran i svjež izgled.",
      ],
      instagram: "Pratite na Instagramu",
      imageAlt: "Dr Dejan Nikolić tokom estetskog tretmana",
    },
    consultation: {
      kicker: "Prvi korak",
      title: "Svaki tretman počinje konsultacijom",
      text: "Procjena stanja kože, razgovor o vašim očekivanjima i plan koji ima smisla upravo za vas.",
      steps: ["Razgovor o vašim željama", "Procjena stanja kože", "Individualni plan tretmana"],
    },
    treatments: {
      intro: {
        kicker: "Čime se bavimo",
        title: "Tretmani",
        text: "Hijaluronski fileri, botoks, stimulatori kolagena, mezoterapija i lipoliza. Koji je pravi za vas, odlučujemo zajedno na konsultaciji.",
      },
      items: [
        { name: "Hijaluronski fileri", tagline: "Volumen i kontura", summary: "Nadoknađuju izgubljeni volumen i naglašavaju konture lica.", imageAlt: "Konsultacija za hijaluronske filere", linkLabel: "Saznajte više o hijaluronskim filerima", details: ["Nadoknađuju izgubljeni volumen i naglašavaju konture lica, poput usana, obraza i linije vilice.", "Količina se prilagođava proporcijama vašeg lica. Manje je često više.", "Plan i očekivani rezultat definišemo na konsultaciji."] },
        { name: "Botoks", tagline: "Bore mimike", summary: "Opušta mišiće koji stvaraju bore, uz očuvanu prirodnu mimiku.", imageAlt: "Konsultacija za botoks", linkLabel: "Saznajte više o botoksu", details: ["Tretman opušta mišiće koji stvaraju bore na čelu, između obrva i oko očiju.", "Cilj je odmoran izgled, uz očuvanu prirodnu mimiku.", "Efekat se razvija tokom nekoliko dana."] },
        { name: "Stimulatori kolagena", tagline: "Obnova kože", summary: "Podstiču kožu da sama stvara novi kolagen, postepeno i prirodno.", imageAlt: "Konsultacija za stimulatore kolagena", linkLabel: "Saznajte više o stimulatorima kolagena", details: ["Stimulatori podstiču kožu da sama stvara novi kolagen.", "Rezultat se razvija postepeno, tokom narednih nedjelja i mjeseci, a koža postaje čvršća i elastičnija.", "Koristimo AESPLLA, PLLA biostimulator."] },
        { name: "Mezoterapija", tagline: "Hidratacija i sjaj", summary: "Mikroinjekcije za hidriraniju, svježiju i ujednačeniju kožu.", imageAlt: "Tretman mezoterapije", linkLabel: "Saznajte više o mezoterapiji", details: ["Mikroinjekcije hijaluronske kiseline, vitamina i aminokiselina u površinski sloj kože.", "Koža postaje hidriranija, svježija i ujednačenijeg tena.", "Najčešće se radi kao serija tretmana."] },
        { name: "Lipoliza", tagline: "Oblikovanje", summary: "Injekcioni tretman manjih, lokalizovanih masnih naslaga.", imageAlt: "Konsultacija za lipolizu", linkLabel: "Saznajte više o lipolizi", details: ["Injekcioni tretman manjih, lokalizovanih masnih naslaga, na primjer ispod brade.", "Namijenjen je oblikovanju, a ne gubitku kilograma.", "Procjenom na konsultaciji utvrđujemo da li je tretman prikladan za vas."] },
      ],
    },
    skin: {
      kicker: "Anti-age vodič", title: "Koža kroz decenije", text: "Šta se mijenja u 20-im, 30-im, 40-im i 50-im — i šta tada zaista pomaže.", happens: "Šta se dešava", helps: "Šta pomaže",
      decades: [
        { age: "20+", title: "Vrhunac kolagena", happens: "Koža je čvrsta i elastična, ali oko 25. godine proizvodnja kolagena počinje polako da opada.", helps: "SPF svaki dan, hidratacija i mezoterapija za sjaj i kvalitet kože." },
        { age: "30+", title: "Prvi tragovi", happens: "Pojavljuju se bore mimike, a koža gubi dio sjaja i elastičnosti.", helps: "Botoks za bore mimike, mezoterapija i prvi stimulatori kolagena." },
        { age: "40+", title: "Volumen i čvrstina", happens: "Gubitak volumena i čvrstine postaje vidljiviji, a kontura lica se mijenja.", helps: "Stimulatori kolagena i hijaluronski fileri za volumen i konturu." },
        { age: "50+", title: "Tanja koža", happens: "Koža je tanja i suvlja, sa manje potpore u dubljim slojevima.", helps: "Kombinovani plan: stimulatori kolagena, fileri i njega kvaliteta kože." },
      ],
      outro: { title: "Godine nisu problem.", emphasis: "Plan jeste rješenje.", text: "Svaka koža je drugačija. Na konsultaciji procjenjujemo stanje kože i pravimo plan koji ima smisla upravo za vas." },
    },
    collagen: {
      kicker: "Stimulatori kolagena", title: "Šta da očekujete", text: "Od dana tretmana do dvije godine kasnije — korak po korak.", step: "Korak", of: "od",
      steps: [
        { title: "Dan tretmana", text: "Kratak tretman, a većina pacijenata se odmah vraća svakodnevnim obavezama. Moguć je blag otok, crvenilo ili modrica, koji prolaze za nekoliko dana." },
        { title: "Prve nedjelje", text: "Početni otok se povlači, pa se može činiti da efekta nema. To je normalno: novi kolagen tek počinje da se stvara." },
        { title: "2 do 3 mjeseca", text: "Koža postaje čvršća i elastičnija. Promjene su postepene, pa izgledate odmornije, a ne „urađeno“." },
        { title: "Do 2 godine", text: "Kod određenih pacijenata efekat može trajati i do dvije godine. Po potrebi se plan dopunjuje na kontroli." },
      ],
      outro: { title: "Rezultat koji se gradi,", emphasis: "a ne dodaje.", text: "Da li je stimulator kolagena pravi izbor za vas, procjenjujemo na konsultaciji. Važno je pratiti uputstva doktora nakon tretmana." },
    },
    mimic: {
      kicker: "Edukativni vodič", title: "Bore mimike", text: "Zašto nastaju i kako ih ublažiti, a da lice ostane izražajno.", prevention: "Prevencija", panelTitle: "Tretman na vrijeme", panelEmphasis: "čuva kožu", panelText: "Kad se dinamičke bore tretiraju na vrijeme, manje je šanse da se urežu duboko. Koliko i gdje, procjenjujemo na konsultaciji.",
      rows: [
        { title: "Mimika", text: "Svaki osmijeh i mrštenje pokreću mišiće lica. Koža iznad njih se pri tome nabira." },
        { title: "Dinamičke bore", text: "Vide se samo kad pokrenete lice. Čim se opustite, nestaju." },
        { title: "Statičke bore", text: "Godinama se nabiranje ponavlja, pa se bore urežu i ostaju vidljive i kad je lice opušteno." },
        { title: "Tretman", text: "Botoks opušta mišiće koji stvaraju bore. Koža se manje nabira, a lice ostaje prirodno pokretno." },
      ],
    },
    myths: {
      kicker: "Mit ili istina", title: "Četiri stvari koje čujemo najčešće", text: "O botoksu, filerima i stimulatorima kolagena kruži mnogo pretpostavki. Evo šta je zaista tačno.", heard: "Čujemo često", true: "Ovo je tačno", reality: "U stvarnosti", why: "Zašto",
      items: [
        { statement: "Botoks zamrzava lice.", topic: "Botoks", reply: "Pravilno doziran botoks opušta samo ciljane mišiće. Lice ostaje izražajno, samo bez dubokih bora mimike." },
        { statement: "Fileri su samo za usne.", topic: "Fileri", reply: "Hijaluronski fileri se koriste i za obraze, bradu, liniju vilice i podočnjake. Cilj je sklad proporcija, ne volumen radi volumena." },
        { statement: "Rezultat se vidi odmah.", topic: "Stimulatori kolagena", reply: "Stimulatori kolagena podstiču kožu da sama stvara novi kolagen. Promjena se razvija postepeno, tokom nedjelja i mjeseci." },
        { statement: "Bez konsultacije nema dobrog tretmana.", topic: "Prvi korak", truth: true, reply: "Procjena kože, razgovor o očekivanjima i plan prilagođen vama. Tek tada znamo koji tretman ima smisla, i da li ima." },
      ],
    },
    faq: {
      eyebrow: "Pitanja i odgovori", title: "Najčešća pitanja", text: "Odgovori na ono što me pacijenti pitaju prije prvog tretmana.", question: "Pitanje", other: "Imate drugo pitanje?", ask: "Pitajte slobodno", ctaText: "Pošaljite pitanje u poruci ili ga ostavite u komentaru. Odgovaram na sva, a najčešća pretvaramo u nove objave.", send: "Pošaljite pitanje",
      items: [
        { question: "Da li tretman boli?", answer: "Većina pacijenata opisuje blagu nelagodnost. Po potrebi koristimo anestetičku kremu, a tretman radimo polako i pažljivo." },
        { question: "Koliko traje tretman?", answer: "Najčešće od pola sata do sat vremena, zavisno od tretmana i regije koju radimo." },
        { question: "Kada mogu nazad na posao?", answer: "Uglavnom odmah. Moguć je blag otok ili crvenilo, koji prolaze za nekoliko dana." },
        { question: "Da li će se primijetiti?", answer: "Cilj je da izgledate odmorno i svježe, a ne „urađeno“. Dobar tretman se ne vidi, vidi se rezultat." },
      ],
    },
    contact: { kicker: "Zakazivanje", title: "Pošaljite poruku", text: "Konsultacije i tretmani u Nikšiću. Zakazivanje putem poruke ili telefonskog poziva.", intro: "Za termin ili dodatne informacije javite se putem WhatsAppa, Vibera, Instagrama ili kontakt forme.", phone: "Telefon", sendMessage: "Pošaljite poruku", openViber: "Otvorite Viber", name: "Ime i prezime *", phonePlaceholder: "Broj telefona *", email: "Email (opciono)", message: "Koji tretman vas interesuje? *", submit: "Pošaljite upit", required: "Molimo popunite ime, broj telefona i poruku.", sending: "Šaljemo poruku…", success: "Poruka je poslata. Javićemo vam se uskoro.", fallback: "Email forma još nije aktivirana. Otvaramo WhatsApp sa pripremljenom porukom.", error: "Poruku trenutno nije moguće poslati. Pokušajte putem WhatsAppa.", note: "Informacije na sajtu su edukativnog karaktera. Prikladnost tretmana i očekivani rezultat procjenjuju se individualno na konsultaciji.", whatsappIntro: "Zdravo, želim da se raspitam o tretmanu.", inquiry: "Upit" },
    footer: { follow: "Pratite", rights: "Sva prava zadržana. Izrada:", call: "Pozovite", top: "Na vrh" },
    common: { book: "Zakažite konsultaciju", antiAge: "Anti-age medicina" },
  },
  en: {
    navigation: [
      { href: "#home", label: "Home" }, { href: "#about", label: "About" }, { href: "#consultation", label: "Consultation" }, { href: "#portfolio", label: "Portfolio", hidden: true }, { href: "#treatments", label: "Treatments" }, { href: "#resume", label: "Resume", hidden: true }, { href: "#instagram", label: "Instagram", hidden: true }, { href: "#contact", label: "Contact" },
    ],
    hero: { profession: "Aesthetic medicine doctor", name: "Dr Dejan Nikolić", lead: "Your face,", slogans: ["only more rested", "fresh and natural"], cta: "Book a consultation", aboutLabel: "About the doctor" },
    about: { eyebrow: "Welcome", title: "Dr Dejan", titleAccent: "Nikolić", subtitle: "Aesthetic medicine · Nikšić", paragraphs: ["I am Dr Dejan Nikolić, an aesthetic medicine doctor. I believe in treatments that do not change your face, but bring out the best in it.", "The goal is not to change your face, but to support its natural potential. A good result should not look like a treatment — it should look rested and fresh."], instagram: "Follow on Instagram", imageAlt: "Dr Dejan Nikolić performing an aesthetic treatment" },
    consultation: { kicker: "The first step", title: "Every treatment starts with a consultation", text: "We assess your skin, discuss your expectations and create a plan that makes sense for you.", steps: ["A conversation about your goals", "Skin assessment", "A personalised treatment plan"] },
    treatments: {
      intro: { kicker: "What we do", title: "Treatments", text: "Hyaluronic fillers, botulinum toxin, collagen stimulators, mesotherapy and lipolysis. We decide which option is right for you together, during the consultation." },
      items: [
        { name: "Hyaluronic fillers", tagline: "Volume and contour", summary: "Restore lost volume and enhance facial contours.", imageAlt: "Hyaluronic filler consultation", linkLabel: "Learn more about hyaluronic fillers", details: ["They restore lost volume and enhance facial contours such as the lips, cheeks and jawline.", "The amount is tailored to the proportions of your face. Less is often more.", "We define the plan and expected result during your consultation."] },
        { name: "Botulinum toxin", tagline: "Expression lines", summary: "Relaxes the muscles that create lines while preserving natural expression.", imageAlt: "Botulinum toxin consultation", linkLabel: "Learn more about botulinum toxin", details: ["The treatment relaxes the muscles that create lines on the forehead, between the eyebrows and around the eyes.", "The goal is a rested appearance with natural facial expression.", "The effect develops over several days."] },
        { name: "Collagen stimulators", tagline: "Skin renewal", summary: "Encourage the skin to produce new collagen gradually and naturally.", imageAlt: "Collagen stimulator consultation", linkLabel: "Learn more about collagen stimulators", details: ["Collagen stimulators encourage the skin to produce new collagen.", "Results develop gradually over the following weeks and months, making the skin firmer and more elastic.", "We use AESPLLA, a PLLA biostimulator."] },
        { name: "Mesotherapy", tagline: "Hydration and glow", summary: "Microinjections for more hydrated, fresh and even-looking skin.", imageAlt: "Mesotherapy treatment", linkLabel: "Learn more about mesotherapy", details: ["Microinjections of hyaluronic acid, vitamins and amino acids into the superficial layer of the skin.", "The skin becomes more hydrated, fresher and more even in tone.", "It is most often performed as a series of treatments."] },
        { name: "Lipolysis", tagline: "Contouring", summary: "An injectable treatment for small, localised fat deposits.", imageAlt: "Lipolysis consultation", linkLabel: "Learn more about lipolysis", details: ["An injectable treatment for small, localised fat deposits, for example under the chin.", "It is intended for contouring, not weight loss.", "During the consultation we assess whether the treatment is appropriate for you."] },
      ],
    },
    skin: { kicker: "Anti-age guide", title: "Skin through the decades", text: "What changes in your 20s, 30s, 40s and 50s — and what can genuinely help.", happens: "What happens", helps: "What helps", decades: [
      { age: "20+", title: "Peak collagen", happens: "Skin is firm and elastic, but collagen production slowly begins to decline around the age of 25.", helps: "Daily SPF, hydration and mesotherapy for radiance and skin quality." },
      { age: "30+", title: "First signs", happens: "Expression lines appear and the skin loses some of its radiance and elasticity.", helps: "Botulinum toxin for expression lines, mesotherapy and the first collagen stimulators." },
      { age: "40+", title: "Volume and firmness", happens: "Loss of volume and firmness becomes more visible, and facial contours begin to change.", helps: "Collagen stimulators and hyaluronic fillers for volume and contour." },
      { age: "50+", title: "Thinner skin", happens: "Skin becomes thinner and drier, with less support in the deeper layers.", helps: "A combined plan: collagen stimulators, fillers and treatments focused on skin quality." },
    ], outro: { title: "Age is not the problem.", emphasis: "The plan is the solution.", text: "Every skin is different. During the consultation we assess its condition and create a plan that makes sense for you." } },
    collagen: { kicker: "Collagen stimulators", title: "What to expect", text: "From treatment day to two years later — step by step.", step: "Step", of: "of", steps: [
      { title: "Treatment day", text: "The treatment is brief and most patients return to their daily activities immediately. Mild swelling, redness or bruising may occur and usually resolves within a few days." },
      { title: "The first weeks", text: "Initial swelling subsides, so it may seem as though there is no effect. This is normal: new collagen is only beginning to form." },
      { title: "Two to three months", text: "The skin becomes firmer and more elastic. Changes are gradual, so you look more rested rather than ‘done’." },
      { title: "Up to two years", text: "For some patients, the effect can last up to two years. The plan may be supplemented during follow-up when needed." },
    ], outro: { title: "A result that is built,", emphasis: "not added.", text: "We assess during the consultation whether a collagen stimulator is right for you. It is important to follow your doctor's aftercare instructions." } },
    mimic: { kicker: "Educational guide", title: "Expression lines", text: "Why they form and how to soften them while keeping the face expressive.", prevention: "Prevention", panelTitle: "Timely treatment", panelEmphasis: "protects the skin", panelText: "When dynamic lines are treated in time, they are less likely to become deeply etched. We assess how much and where during the consultation.", rows: [
      { title: "Facial expression", text: "Every smile and frown moves the facial muscles, causing the skin above them to fold." },
      { title: "Dynamic lines", text: "They are visible only when you move your face and disappear when it relaxes." },
      { title: "Static lines", text: "Over the years the folding repeats, so lines become etched and remain visible even when the face is relaxed." },
      { title: "Treatment", text: "Botulinum toxin relaxes the muscles that create lines. The skin folds less while the face remains naturally expressive." },
    ] },
    myths: { kicker: "Myth or fact", title: "Four things we hear most often", text: "There are many assumptions about botulinum toxin, fillers and collagen stimulators. Here is what is actually true.", heard: "Often heard", true: "This is true", reality: "In reality", why: "Why", items: [
      { statement: "Botulinum toxin freezes the face.", topic: "Botulinum toxin", reply: "When properly dosed, it relaxes only the targeted muscles. The face remains expressive, with fewer deep expression lines." },
      { statement: "Fillers are only for lips.", topic: "Fillers", reply: "Hyaluronic fillers are also used for the cheeks, chin, jawline and under-eye area. The goal is balanced proportions, not volume for its own sake." },
      { statement: "The result is immediate.", topic: "Collagen stimulators", reply: "Collagen stimulators encourage the skin to produce new collagen. The change develops gradually over weeks and months." },
      { statement: "There is no good treatment without a consultation.", topic: "The first step", truth: true, reply: "A skin assessment, a conversation about expectations and a plan tailored to you. Only then do we know which treatment makes sense — or whether one is needed at all." },
    ] },
    faq: { eyebrow: "Questions and answers", title: "Frequently asked questions", text: "Answers to what patients ask before their first treatment.", question: "Question", other: "Have another question?", ask: "Feel free to ask", ctaText: "Send your question in a message or leave it in a comment. I answer all of them, and the most common ones become new posts.", send: "Send a question", items: [
      { question: "Does the treatment hurt?", answer: "Most patients describe mild discomfort. We can use a numbing cream when needed, and the treatment is performed slowly and carefully." },
      { question: "How long does a treatment take?", answer: "Usually between 30 and 60 minutes, depending on the treatment and the area being treated." },
      { question: "When can I return to work?", answer: "Usually immediately. Mild swelling or redness may occur and typically resolves within a few days." },
      { question: "Will it be noticeable?", answer: "The goal is to look rested and fresh, not ‘done’. A good treatment is not obvious — its result is." },
    ] },
    contact: { kicker: "Appointments", title: "Send a message", text: "Consultations and treatments in Nikšić. Book by message or phone call.", intro: "For an appointment or more information, contact us via WhatsApp, Viber, Instagram or the contact form.", phone: "Phone", sendMessage: "Send a message", openViber: "Open Viber", name: "Full name *", phonePlaceholder: "Phone number *", email: "Email (optional)", message: "Which treatment are you interested in? *", submit: "Send enquiry", required: "Please enter your name, phone number and message.", sending: "Sending…", success: "Your message has been sent. We will contact you soon.", fallback: "Email delivery is not active yet. Opening WhatsApp with your prepared message.", error: "The message could not be sent. Please try WhatsApp.", note: "The information on this website is educational. Treatment suitability and expected results are assessed individually during a consultation.", whatsappIntro: "Hello, I would like to ask about a treatment.", inquiry: "Enquiry" },
    footer: { follow: "Follow", rights: "All rights reserved. Created by:", call: "Call", top: "Back to top" },
    common: { book: "Book a consultation", antiAge: "Anti-age medicine" },
  },
} as const;

export function getContent(locale: Locale) {
  return localizedContent[locale];
}
