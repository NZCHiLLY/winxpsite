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
  VMWARE:
    "https://img.shields.io/badge/VMware-607078?style=for-the-badge&logo=vmware&logoColor=white",
  LINUX:
    "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
  OPENAI:
    "https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white",
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
  WorkType.INFRASTRUCTURE,
  WorkType.AUTOMATION,
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
    title: "Multi-Agent AI Platform",
    date: "Mar 2026 - May 2026",
    gitURL: "",
    techstack: [
      TechIcon.TYPESCRIPT,
      TechIcon.NODEJS,
      TechIcon.DOCKER,
      TechIcon.OPENAI,
    ],
    overview: `Designed and built a multi-agent AI platform that provides natural-language access to
    business systems. Features a hardened OAuth 2.0 security layer, a custom intent-inspection
    middleware that gates destructive operations, and a single-entry-point architecture routing to
    specialised sub-agents. Built with TypeScript, containerised with Docker, and deployed behind
    TLS with automated test coverage. Reduces complex multi-step operations to plain-language
    requests while maintaining least-privilege access controls.`,
  },
  {
    id: 3,
    title: "Private Cloud & Infrastructure Platform",
    date: "2019 - 2024",
    gitURL: "",
    techstack: [
      TechIcon.VMWARE,
      TechIcon.LINUX,
      TechIcon.DOCKER,
    ],
    overview: `Architected and built a private cloud platform from bare metal up, serving organisations
    from a handful of users to 500+ on a single subscription model. Hyper-V failover cluster with
    SAN storage, site-to-site VPN per tenant, and a multi-site backup architecture with 28-day
    retention replicated to an offshore disaster recovery site. Includes automated monitoring,
    endpoint security, and a recovery SLA measured in hours for full data centre failover.`,
  },
  {
    id: 4,
    title: "Vector Memory & Semantic Search System",
    date: "Apr 2026 - May 2026",
    gitURL: "",
    techstack: [
      TechIcon.PYTHON,
      TechIcon.DOCKER,
      TechIcon.OPENAI,
    ],
    overview: `Built a retrieval-augmented generation system with semantic memory, chunking pipeline,
    and vector search. Ingests thousands of documents, extracts entities and concepts, and surfaces
    relevant context on demand — reducing context requirements by roughly 90% for complex sessions.
    Features a 3D vector-space visualiser, relationship deduplication, and multi-model orchestration
    across embedding and chunking models.`,
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
    type: WorkType.AUTOMATION,
    icon: folder,
    title: "Multi-Agent AI Platform",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.INFRASTRUCTURE,
    icon: folder,
    title: "Private Cloud & Infrastructure Platform",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.AUTOMATION,
    icon: folder,
    title: "Vector Memory & Semantic Search System",
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
    title: "Software Development",
    skills: [
      { name: "TypeScript", level: 80 },
      { name: "React / Next.js", level: 75 },
      { name: "Python", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "HTML / CSS", level: 85 },
    ],
  },
  {
    id: 2,
    title: "Cloud & Infrastructure",
    skills: [
      { name: "Virtualisation (Hyper-V / VMware)", level: 90 },
      { name: "Linux", level: 85 },
      { name: "Network & Security (FortiGate)", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Storage (SAN / NAS)", level: 85 },
    ],
  },
  {
    id: 3,
    title: "Voice & Communications",
    skills: [
      { name: "VoIP (3CX / SIP)", level: 95 },
      { name: "PBXWare / ServerWARE", level: 90 },
      { name: "QoS Monitoring", level: 85 },
      { name: "IVR & Call Queue Design", level: 85 },
    ],
  },
  {
    id: 4,
    title: "AI & Automation",
    skills: [
      { name: "LLM / RAG Systems", level: 85 },
      { name: "MCP Servers & Tooling", level: 85 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Vector Search (Qdrant)", level: 80 },
      { name: "Power Automate", level: 80 },
    ],
  },
  {
    id: 5,
    title: "Microsoft 365",
    skills: [
      { name: "Exchange Online", level: 90 },
      { name: "Entra ID / Identity", level: 90 },
      { name: "SharePoint", level: 85 },
      { name: "Intune / MDM", level: 80 },
      { name: "Migrations", level: 90 },
    ],
  },
];
