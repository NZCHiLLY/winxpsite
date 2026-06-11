import { StaticImageData } from "next/image";

export type Tab = {
  id: number;
  title: string;
  message: string;
  Icon: StaticImageData;
  isMinimized: boolean;
  zIndex: number;
  program: App;
  prompt: boolean;
  backBtnActive: boolean;
};

export type RootState = {
  tab: {
    tray: Tab[];
    id: number;
    currentFocusedTab: number;
    currentZIndex: number;
  };
  system: {
    backactive: boolean;
  };
};

export enum App {
  MYWORK,
  OUTLOOK,
  MYDOCUMENT,
  ERROR,
  INFO,
  HELP,
  WARNING,
  WELCOME,
  SKILLS,
  PINBALL,
}

export enum WorkType {
  PERSONAL = "Personal Projects",
  SCHOOL = "School Projects",
  HACKATHON = "Hackathons",
}

export type WorkFile = {
  id: number;
  type: WorkType;
  icon: StaticImageData;
  title: string;
  content: WorkContent;
};

export type WorkContent = {
  id: number;
  title: string;
  date: string;
  gitURL: string;
  techstack: string[];
  overview: string;
};
