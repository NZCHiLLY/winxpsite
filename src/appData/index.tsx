import {
  App,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import outlook from "../../assets/outlook.png";
import folder from "../../assets/folder.png";
import solitaire from "../../assets/solitaire.png";
import paint from "../../assets/paint.png";

export const TechIcon = {
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  DOCKER:
    "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
  POSTGRES:
    "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
  MONGODB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  GIT: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
  FIGMA:
    "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  TAILWIND:
    "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  VUEJS:
    "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
  GRAPHQL:
    "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
  AWS: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "Projects",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    3,
    {
      id: 0,
      title: "Skills & Technologies",
      message: "",
      Icon: mycomputer,
      isMinimized: false,
      zIndex: 0,
      program: App.SKILLS,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    9,
    {
      id: 0,
      title: "Space Cadet Pinball",
      message: "",
      Icon: solitaire,
      isMinimized: false,
      zIndex: 0,
      program: App.PINBALL,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.PERSONAL,
  WorkType.HACKATHON,
  WorkType.SCHOOL,
];

export const WorkData = [
  {
    id: 1,
    title: "Windows XP Portfolio Website",
    date: "Jun 2026",
    gitURL: "https://github.com/NZCHiLLY/winxpsite",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NEXTJS,
      TechIcon.REDUX,
      TechIcon.CSS,
      TechIcon.HTML,
      TechIcon.JAVASCRIPT,
    ],
    overview: `A personal portfolio website that faithfully recreates the Windows XP desktop experience.
    Built with Next.js and Redux Toolkit, featuring draggable windows, a working Start menu, taskbar
    with real-time clock, and classic XP visual styling. Each section of the portfolio is presented
    as an application window within the XP environment, complete with minimise, maximise, and close
    controls. The project pays homage to the classic operating system that inspired a generation of
    developers.`,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    date: "Jan 2026 - Apr 2026",
    gitURL: "https://github.com/NZCHiLLY/placeholder-project",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NEXTJS,
      TechIcon.POSTGRES,
      TechIcon.TAILWIND,
      TechIcon.DOCKER,
    ],
    overview: `A full-stack e-commerce platform with product catalogue, shopping cart, Stripe payment
    integration, and an admin dashboard for inventory management. Built with a focus on performance
    and accessibility. Features server-side rendering for SEO, real-time inventory tracking, and a
    responsive design that works across all devices.`,
  },
  {
    id: 3,
    title: "Real-Time Collaboration Tool",
    date: "Sep 2025 - Dec 2025",
    gitURL: "https://github.com/NZCHiLLY/placeholder-project",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NODEJS,
      TechIcon.MONGODB,
      TechIcon.GRAPHQL,
    ],
    overview: `A collaborative document editing tool with real-time synchronisation, presence awareness,
    and version history. Uses WebSocket connections for live updates and operational transform for
    conflict resolution. Supports markdown formatting, inline comments, and export to multiple formats.`,
  },
  {
    id: 4,
    title: "API Gateway & Microservices",
    date: "May 2025 - Aug 2025",
    gitURL: "https://github.com/NZCHiLLY/placeholder-project",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NODEJS,
      TechIcon.AWS,
      TechIcon.DOCKER,
    ],
    overview: `Designed and implemented a scalable API gateway with rate limiting, authentication, and
    request routing across a fleet of microservices. Deployed on AWS ECS with auto-scaling, CloudFront
    CDN, and comprehensive monitoring via CloudWatch. Handles 10k+ requests per minute with sub-50ms
    p95 latency.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: folder,
    title: "Windows XP Portfolio Website",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.PERSONAL,
    icon: folder,
    title: "E-Commerce Platform",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.HACKATHON,
    icon: folder,
    title: "Real-Time Collaboration Tool",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.SCHOOL,
    icon: folder,
    title: "API Gateway & Microservices",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
] as WorkFile[];

// Skills data for the Skills program
export type SkillCategory = {
  id: number;
  title: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: number; // 0-100
};

export const SkillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML / CSS", level: 95 },
      { name: "Vue.js", level: 60 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    id: 2,
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 70 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    id: 3,
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Git", level: 90 },
      { name: "AWS", level: 60 },
      { name: "CI/CD", level: 70 },
      { name: "Linux", level: 75 },
    ],
  },
  {
    id: 4,
    title: "Design",
    skills: [
      { name: "Figma", level: 65 },
      { name: "UI/UX Design", level: 70 },
      { name: "Responsive Design", level: 85 },
    ],
  },
];
