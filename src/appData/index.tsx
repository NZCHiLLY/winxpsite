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
import pinball from "../../assets/pinball.png";
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
      cascade: 0,
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
      cascade: 0,
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
      cascade: 0,
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
      cascade: 0,
    },
  ],
  [
    9,
    {
      id: 0,
      title: "Space Cadet Pinball",
      message: "",
      Icon: pinball,
      isMinimized: false,
      zIndex: 0,
      program: App.PINBALL,
      prompt: false,
      backBtnActive: false,
      cascade: 0,
      defaultWidth: "800px",
      defaultHeight: "700px",
    },
  ],
  [
    10,
    {
      id: 0,
      title: "Experience",
      message: "",
      Icon: folder,
      isMinimized: false,
      zIndex: 0,
      program: App.EXPERIENCE,
      prompt: false,
      backBtnActive: false,
      cascade: 0,
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
      cascade: 0,
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
      cascade: 0,
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
      cascade: 0,
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
      cascade: 0,
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
    gitURL: "",
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
    from a handful of users to hundreds. Hyper-V failover cluster with
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
      { name: "C#", level: 70 },
      { name: "SQL / Databases", level: 70 },
      { name: "PowerShell", level: 75 },
    ],
  },
  {
    id: 2,
    title: "Cloud & Infrastructure",
    skills: [
      { name: "Virtualisation (Hyper-V / VMware / Proxmox)", level: 90 },
      { name: "Linux", level: 80 },
      { name: "Docker", level: 80 },
      { name: "Storage (SAN / NAS)", level: 85 },
      { name: "Disaster Recovery", level: 85 },
    ],
  },
  {
    id: 3,
    title: "Networking & Security",
    skills: [
      { name: "Fortinet / Firewalling", level: 90 },
      { name: "Network Design", level: 85 },
      { name: "Cybersecurity / EDR", level: 80 },
      { name: "DNS / SSL", level: 80 },
      { name: "Compliance (NZISM / HISO)", level: 75 },
    ],
  },
  {
    id: 4,
    title: "Voice & Communications",
    skills: [
      { name: "VoIP (3CX / SIP)", level: 95 },
      { name: "PBX Platforms", level: 90 },
      { name: "QoS Monitoring", level: 85 },
      { name: "IVR & Call Queue Design", level: 85 },
    ],
  },
  {
    id: 5,
    title: "AI & Automation",
    skills: [
      { name: "LLM / RAG Systems", level: 85 },
      { name: "MCP Servers & Tooling", level: 85 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Vector Search", level: 80 },
      { name: "Power Automate", level: 80 },
      { name: "Copilot Studio", level: 70 },
    ],
  },
  {
    id: 6,
    title: "Microsoft 365",
    skills: [
      { name: "Exchange Online", level: 90 },
      { name: "Entra ID / Identity", level: 90 },
      { name: "SharePoint", level: 85 },
      { name: "Intune / MDM", level: 80 },
      { name: "Migrations", level: 90 },
    ],
  },
  {
    id: 7,
    title: "Commercial & Leadership",
    skills: [
      { name: "IT Strategy", level: 80 },
      { name: "Proposals & Pricing", level: 75 },
      { name: "Team Leadership", level: 80 },
      { name: "Vendor Management", level: 75 },
      { name: "Project Management", level: 75 },
    ],
  },
  {
    id: 8,
    title: "Design & Creative",
    skills: [
      { name: "Brand / Design Systems", level: 70 },
      { name: "Figma", level: 60 },
      { name: "Game Design", level: 65 },
      { name: "Music Production", level: 60 },
    ],
  },
];

// Experience data for the Experience programme
export type CareerRole = {
  id: number;
  title: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type Achievement = {
  id: number;
  title: string;
  description: string;
};

export type PersonalProject = {
  id: number;
  title: string;
  description: string;
};

export const CareerTimeline: CareerRole[] = [
  {
    id: 1,
    title: "Head of IT",
    period: "~5 years",
    summary:
      "IT strategy, architecture, and commercial ownership. Reporting to senior leadership and the board. Led a team of engineers across service delivery, infrastructure, and R&D. Owned every key account and commercial relationship.",
    bullets: [
      "Built and shipped AI and automation into production — automation pipelines, custom agentic AI skills and plugins, and a multi-agent MCP server with intent-gating security, all in live daily use",
      "Architected and completed a dual-private-cloud migration, replacing every layer of the infrastructure stack and delivering 4× to 100× performance uplift",
      "Launched a managed security product line; authored cybersecurity governance and AI data-residency frameworks for health-sector data",
      "Designed commercial SLA tiers, built the master configurator pricing engine, and led a base-wide client re-sign with sustained revenue growth",
    ],
  },
  {
    id: 2,
    title: "Division Manager",
    period: "~2 years",
    summary:
      "Promoted into leadership as 2IC to the Head of Operations, absorbing the bulk of the outgoing CTO's technical responsibilities. Ran the service desk, completed a voice platform rebuild, and began planning the private cloud overhaul.",
    bullets: [
      "Transitioned the organisation to 100% work-from-home ahead of the curve, reducing operating costs while increasing output",
      "Completed the voice platform rebuild, consolidating legacy platforms into a unified product stack serving dozens of organisations and hundreds of users",
      "Took sole responsibility for service desk management, training new hires and upskilling the team",
    ],
  },
  {
    id: 3,
    title: "Infrastructure & Telecoms Engineer",
    period: "~2 years",
    summary:
      "Arrived through an acquisition and was recognised as the CTO's protégé. Worked across networking, infrastructure, and voice while helping consolidate IT services from three concurrent acquisitions.",
    bullets: [
      "Rebuilt and migrated core voice platforms to new hardware; consolidated IT services from multiple acquisitions into unified operations",
      "Operated Cisco routing and switching, Fortinet firewalling, Brocade fibre switching, and IBM SANs in the data centre",
    ],
  },
  {
    id: 4,
    title: "Unified Communications Engineer",
    period: "~1 year",
    summary:
      "Started at service desk Level 2 straight out of study, with primary oversight of all unified communications technology for internal systems and managed-services clients. Voice stack spanned 3CX, Avaya, NEC, LG-IPECS, and PBXWARE virtualised on a compute cluster.",
    bullets: [],
  },
  {
    id: 5,
    title: "Freelance IT Support",
    period: "2011 – 2017",
    summary:
      "Independent IT support for residential and SMB clients from school age. Hardware builds and repairs, malware removal, data recovery, small network design. Built an online following, 20+ recurring clients, and over 100 one-off jobs while completing certifications and diplomas.",
    bullets: [],
  },
];

export const Achievements: Achievement[] = [
  {
    id: 1,
    title: "Scaled a key client through a decade of growth and consolidation",
    description:
      "Carried a long-term client through multiple mergers and acquisitions with zero disruption to clinical operations. Each expansion meant absorbing identity governance, practice management software integration, a nationwide WAN, an inbound call centre, and compliance across every site. The relationship spanned roughly ten years of continuous service improvement.",
  },
  {
    id: 2,
    title: "Architected and executed a dual-private-cloud migration",
    description:
      "Built a second private cloud alongside the first, then transitioned hundreds of workloads across dozens of organisations within SLA-notified hazard windows. Replaced every layer: storage moved from spinning disk to flash arrays, the core network upgraded roughly 25-fold, firewall and routing platforms modernised, and a mixed server fleet consolidated. Delivered capacity improvements ranging from 4× to over 100× across the stack.",
  },
  {
    id: 3,
    title: "Built a production multi-agent MCP server with custom security layer",
    description:
      "Took an open-source TypeScript MCP server from proof-of-concept to a v2.0 multi-agent production architecture: forked, security-reviewed, hardened with OAuth 2 via Entra, Docker secrets, and TLS. Designed a custom Sentinel layer that inspects the intent behind every destructive command before execution. Nineteen agents behind a single entry point, preserving context across all interactions.",
  },
  {
    id: 4,
    title: "Designed and single-handedly operate a multi-tenant voice platform",
    description:
      "Architected the hosted, multi-tenant voice stack serving dozens of organisations and hundreds of end users. Built an auto-provisioning model that cut user provisioning time by up to 300%. Designs number porting, softphones, caller-ID masking, call queues, and IVR — including mission-sensitive deployments for support services.",
  },
  {
    id: 5,
    title: "50+ custom AI skills, plugins, and automation flows in production",
    description:
      "Built an automation framework on top of agentic AI, covering a broad range of business operations. A governance layer enforces canonical instructions, drift control, and recursive self-improvement. A voice model trained on years of written output means automated content reads like the organisation, not a template.",
  },
  {
    id: 6,
    title: "Engineered a model-routing proxy cutting AI costs ~30-fold",
    description:
      "Built a proxy over a weekend so the Claude Code harness routes through a different model provider, dropping session costs roughly 30-fold while preserving a ~99% cache-hit rate. Diagnosed and patched an upstream sub-agent break, then documented the fix upstream.",
  },
  {
    id: 7,
    title: "Built a vector-memory system reducing context by ~90%",
    description:
      "Hand-built a retrieval-augmented generation system: chunk-and-vectorise pipeline with relationship deduplication, multi-model orchestration across embedding and chunking models, and a live 3D vector-space visualiser. Ingests thousands of documents, extracts entities and concepts, and returns to an exact working state on a fraction of the context.",
  },
  {
    id: 8,
    title: "Designed commercial SLA tiers and a master configurator pricing engine",
    description:
      "Created multiple support-agreement structures, each with a defined four-priority Respond/Plan/Resolve SLA matrix. Built the master configurator single-handedly and evolved it across four major versions into a term-based pricing engine. Used both to re-sign the bulk of the client base.",
  },
  {
    id: 9,
    title: "Led a multi-year cybersecurity uplift across the full client base",
    description:
      "Migrated endpoint protection through three generations of AV and EDR tooling. Packaged EDR, MDR, security-awareness training, MFA, and application control into a formal managed-security product line. Lead firewall resource: owns the core stack and designs how its virtual domains are structured.",
  },
  {
    id: 10,
    title: "Authored compliance frameworks for health-sector data",
    description:
      "Wrote and maintains NZISM, HISO, and Privacy-Act-aligned risk assessment and compliance frameworks. Serves as virtual CISO resource for organisations handling health data. Authored an evidence-based AI data-residency report addressing offshore processing of NZ health information.",
  },
];

export const PersonalProjects: PersonalProject[] = [
  {
    id: 1,
    title: "Mobile health guide app",
    description:
      "Ported a production iOS app to Android natively — Kotlin, Jetpack Compose, bundled content, no backend required.",
  },
  {
    id: 2,
    title: "Pixel art generation pipeline",
    description:
      "Dockerised ComfyUI + SDXL pipeline with GPU passthrough for local pixel art generation, accessible from any LAN device.",
  },
  {
    id: 3,
    title: "AI-powered photo correction tool",
    description:
      "Python + FastAPI app backed by local models that converts book photos to corrected front-on perspectives, with an SQLite job queue.",
  },
  {
    id: 4,
    title: "Mobile endless runner game",
    description:
      "Tap-to-hop browser game built with Phaser 3 and Vite, served over LAN via Docker.",
  },
  {
    id: 5,
    title: "Idle watchmaking game",
    description:
      "Premium idle/incremental game — pure vanilla JS, Canvas 2D rendering, Web Audio, and localStorage saves. Zero runtime dependencies.",
  },
  {
    id: 6,
    title: "Grocery indexer and cart builder",
    description:
      "Personal automation tool that scrapes product data, stores it locally, and provides a web UI for building shopping carts.",
  },
  {
    id: 7,
    title: "Live 3D vector-space visualiser",
    description:
      "Real-time 3D map of vector embeddings — each memory is a node positioned by dimensionality reduction with nearest-neighbour edges.",
  },
];
