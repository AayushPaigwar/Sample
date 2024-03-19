import {
  GDGClogo,
  GHRCE,
  RGi,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chaticon,
  chromecast,
  cislogo,
  coelogo,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  framer,
  gameicon,
  instagram,
  jarvislogo,
  micicon,
  networkicon,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  protopie,
  raindrop,
  recording01,
  recording03,
  slack,
  sliders04,
  speaker,
  telegram,
  twitter
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "EVENTS",
    url: "#features",
  },
  {
    id: "1",
    title: "SPEAKERS",
    url: "#pricing",
  },
  {
    id: "2",
    title: "GLIMPSES",
    url: "#how-to-use",
  },
  // {
  // 	id: "3",
  // 	title: "ROADMAP",
  // 	url: "#roadmap",
  // },
  {
    id: "4",
    title: "Register",
    url: "#register",
    onlyMobile: true,
  },
];

export const heroIcons = [gameicon, chaticon, micicon, networkicon];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  cislogo,
  coelogo,
  GHRCE,
  RGi,
  GDGClogo,
  jarvislogo,
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// export const roadmap = [
// 	{
// 		id: "0",
// 		title: "Voice recognition",
// 		text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
// 		date: "May 2023",
// 		status: "done",
// 		imageUrl: roadmap1,
// 		colorful: true,
// 	},
// 	{
// 		id: "1",
// 		title: "Gamification",
// 		text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
// 		date: "May 2023",
// 		status: "progress",
// 		imageUrl: roadmap2,
// 	},
// 	{
// 		id: "2",
// 		title: "Chatbot customization",
// 		text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
// 		date: "May 2023",
// 		status: "done",
// 		imageUrl: roadmap3,
// 	},
// 	{
// 		id: "3",
// 		title: "Integration with APIs",
// 		text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
// 		date: "May 2023",
// 		status: "progress",
// 		imageUrl: roadmap4,
// 	},
// ];

export let collabText =
  "G. H. Raisoni College of Engineering has successfully organised Four exhilarating editions of AI Summit. Now, we are elated to announce the 5th Edition as AI Odyssey'24 , a blend of AI and games. AI plays a vital role in our lives and when fused with games there is no better way to learn it.";

export let collabContent = [
  {
    id: "0",
    title: "AI Odyssey is going to be held on April 5 and April 6, 2023",
  },
  {
    id: "1",
    title: "It is central India biggest AI-Summit Tech Event",
  },
  {
    id: "2",
    title:
      "The event is open to students, professionals, and enthusiasts from various fields such as engineering, computer science, game development, and others.",
  },
];

export let collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Revealing soon",
    imageUrl: speaker,
    contact: "https://linkedin.com/in/xyz",

    features: [
      "WOrked on @XYZ company, ex@zyx company , tedY speaker",
      "Eperiences",
      "Location or something",
    ],
  },
  {
    id: "1",
    title: "Revealing soon",
    imageUrl: speaker,
    contact: "https://linkedin.com/in/xyz",
    features: [
      "WOrked on @XYZ company, ex@zyx company , tedY speaker",
      "Eperiences",
      "Location or something like linkedin top voice ",
    ],
  },
  {
    id: "2",
    title: "Revealing Soon",
    imageUrl: speaker,
    contact: "https://linkedin.com/in/xyz",

    features: [
      "WOrked on @XYZ company, ex@zyx company , tedY speaker",
      "Eperiences",
      "Location or something",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Scan and Hunt",
    text: "Teams equipped with toolkits and clues navigate through college premises, deciphering hints to unveil the next clue's location. The first team to unravel the final clue and reach the destination wins. Utilize provided tools to outwit competitors.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: "../src/assets/games/scan-and-hunt.jpg",
    // light: true,
  },
  {
    id: "1",
    title: "Techno Tales",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: "https://github.com/AayushPaigwar/Sample/blob/master/src/assets/games/dataverse.jpg",
    // light: true,
  },
  {
    id: "2",
    title: "Find the Glitch",
    text: "Construct a winning portfolio from a selection of 50-60 stocks within a specified time frame (e.g., 2017-2018) with a budget of 1 lakh. Compete against other teams to build the most profitable portfolio by the end of the year and claim victory.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: "../src/assets/games/find-the-glitch.jpg",
  },
  {
    id: "3",
    title: "Imaginate AI",
    text: "Participants are assigned a product or tasked with designing their own service/product. They craft a compelling presentation spanning 2-3 slides and pitch their ideas to the sharks. Navigate the pressure of the tank and impress the sharks.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: "../src/assets/games/imaginate-ai.jpg",
    // light: true,
  },
  {
    id: "4",
    title: "DataVerse",
    text: "Teams join a Google Meet where one participant draws while the other guesses the word. With a twist, the artist shakes their head for wrong guesses suggested by the audience. Each team takes turns drawing within a time limit, earning points.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: "../src/assets/games/dataverse.jpg",
  },
  {
    id: "5",
    title: "Scan and Hunt",
    text: "Teams equipped with toolkits and clues navigate through college premises, deciphering hints to unveil the next clue's location. The first team to unravel the final clue and reach the destination wins. Utilize provided tools to outwit competitors.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "6",
    title: "Website Hunt",
    text: "Participants explore a simulated cyber world, solving clues across websites, local systems, Wi-Fi networks, and custom apps. Strategize, navigate, and unlock the next level of challenges in this tech-savvy scavenger hunt.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "AI Art Combination",
    text: "Candidate 1 examines an image and describes it to Candidate 2, who then guides an AI tool to recreate the image. Judges assess the resemblance between the generated artwork and the original, choosing winner based on the closest match.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "8",
    title: "Data Visualization",
    text: "In round one, participants utilize PowerBI or Tableau to craft innovative dashboards using provided datasets. Round two involves extracting insights and pitching their models, showcasing dataset essence and key findings.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "9",
    title: "Code Correction",
    text: "We challenge teams to debug or modify a given code snippet within specified time constraints to produce the desired output. As rounds progress, difficulty levels increase, demanding more advanced coding skills.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
