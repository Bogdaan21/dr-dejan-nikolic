// Sadržaj iz originalnog šablona (engleski) za sekcije "Portfolio" i "My Resume".
// Još nije prilagođen ordinaciji; zamijeniti pravim sadržajem ili ukloniti sekcije.

export type PortfolioDetail = {
  paragraphs: string[];
  client: string;
  category: string;
  date: string;
  images: string[];
};

export type PortfolioItem = {
  category: "vimeo" | "youtube" | "soundcloud" | "detail" | "image";
  label: string;
  title: string;
  image: string;
  icon: string;
  linkClassName: string;
  href: string;
  detail?: PortfolioDetail;
};

export const portfolioFilters = [
  { filter: "*", label: "All" },
  { filter: ".vimeo", label: "Vimeo" },
  { filter: ".youtube", label: "Youtube" },
  { filter: ".soundcloud", label: "Soundcloud" },
  { filter: ".image", label: "Image" },
  { filter: ".detail", label: "Detail" },
];

const sampleDetail: PortfolioDetail = {
  paragraphs: [
    "We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance ease of modification.",
    "Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product.",
  ],
  client: "Alvaro Morata",
  category: "Detail",
  date: "March 07, 2021",
  images: ["/img/portfolio/1.jpg", "/img/portfolio/2.jpg", "/img/portfolio/3.jpg"],
};

export const portfolioItems: PortfolioItem[] = [
  {
    category: "vimeo",
    label: "Vimeo",
    title: "New Laptop",
    image: "/img/portfolio/1.jpg",
    icon: "/img/svg/social/vimeo.svg",
    linkClassName: "popup-vimeo",
    href: "/video/dr-dejan-popup.mp4",
  },
  {
    category: "youtube",
    label: "Youtube",
    title: "Best Phone",
    image: "/img/portfolio/2.jpg",
    icon: "/img/svg/social/youtube-2.svg",
    linkClassName: "popup-youtube",
    href: "https://www.youtube.com/watch?v=7e90gBu4pas",
  },
  {
    category: "soundcloud",
    label: "Soundcloud",
    title: "Smart Headphone",
    image: "/img/portfolio/3.jpg",
    icon: "/img/svg/social/soundcloud.svg",
    linkClassName: "soundcloude_link mfp-iframe audio",
    href: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  },
  {
    category: "detail",
    label: "Detail",
    title: "Hippie Sabotage",
    image: "/img/portfolio/4.jpg",
    icon: "/img/svg/text.svg",
    linkClassName: "portfolio_popup",
    href: "#",
    detail: sampleDetail,
  },
  {
    category: "image",
    label: "Image",
    title: "Mockup Camera",
    image: "/img/portfolio/5.jpg",
    icon: "/img/svg/maximize.svg",
    linkClassName: "zoom",
    href: "/img/portfolio/5.jpg",
  },
  {
    category: "detail",
    label: "Detail",
    title: "Good Present",
    image: "/img/portfolio/6.jpg",
    icon: "/img/svg/text.svg",
    linkClassName: "portfolio_popup",
    href: "#",
    detail: sampleDetail,
  },
];

export type ResumeEntry = { title: string; place: string; period: string; text: string };

const sampleText = "Aali is a leading web design agency with an award-winning design";

export const resumeColumns: { heading: string; icon: string; animation: string; entries: ResumeEntry[] }[] = [
  {
    heading: "Education",
    icon: "/img/svg/degree.svg",
    animation: "fadeInLeft",
    entries: [
      { title: "Cognitive Sciences", place: "University of Maine", period: "2018 - 2020", text: sampleText },
      { title: "Civil Engineering", place: "University of Texas", period: "2014 - 2018", text: sampleText },
      { title: "Bachelor of Science", place: "Univercity of Oxford", period: "2012 - 2014", text: sampleText },
    ],
  },
  {
    heading: "Experience",
    icon: "/img/svg/case.svg",
    animation: "fadeInRight",
    entries: [
      { title: "Product Designer", place: "Easy Computers", period: "2018 - running", text: sampleText },
      { title: "UI/UX Expert", place: "eTheme Group", period: "2015 - 2018", text: sampleText },
      { title: "Senior Developer", place: "Envato Studio", period: "2012 - 2018", text: sampleText },
    ],
  },
];
