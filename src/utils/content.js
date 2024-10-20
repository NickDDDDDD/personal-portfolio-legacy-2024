// Navbar
import logo from "../assets/images/logo.svg";

// Hero Section
import shootingStarImage from "../assets/images/hero-section/main-bg-0-0.png";
import mainBG from "../assets/images/hero-section/main-bg-0_1.webp";
import treesImage from "../assets/images/hero-section/main-bg-1_1.webp";
import cliffImage from "../assets/images/hero-section/main-bg-2_1.webp";
import horseImage from "../assets/images/hero-section/main-bg-3.png";

// Footer
import BookIcon from "@mui/icons-material/Book";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import ChatIcon from "@mui/icons-material/Chat";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

export const HeroSectionContent = {
  mainBG,
  treesImage,
  cliffImage,
  horseImage,
  shootingStarImage,
  title: `Hi, I’m Nick`,
  subtitle: "a software engineer",
  mainCTA: "Contact Me",
  secondaryCTA: "My Work",
};

export const footerContent = {
  protocols: {
    title: "Protocols",
    links: [
      { title: "Liquidity Protocol" },
      { title: "Aggregation Protocol" },
      { title: "Limit Order Protocol" },
    ],
  },
  governance: {
    title: "Governance",
    links: [
      { title: "1inch DAO" },
      { title: "1INCH token" },
      { title: "Forum" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { title: "Help center" },
      { title: "Press room" },
      { title: "Bug report", subtitle: "by Hacker one" },
      { title: "Contacts" },
    ],
  },
  developers: {
    title: "Governance",
    links: [
      { title: "Documentation" },
      { title: "GitHub" },
      { title: "Audit" },
      { title: "Bug bounty" },
    ],
  },
  subscribe: {
    title: "Subscribe to 1inch newsletter",
    subtitle: "Get the latest news and updates",
  },
  socials: [
    { icon: BookIcon },
    { icon: RedditIcon },
    { icon: TwitterIcon },
    { icon: ChatIcon },
    { icon: TelegramIcon },
    { icon: GitHubIcon },
  ],
  copyright: {
    left: "© 2023 1inch, All Rights Reserved.",
    center: "ENS: 1inch.eth",
    right: "BUIDL @ETHNewYork 2019",
  },
};

export const navbarContent = {
  logo,
};
