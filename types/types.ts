import { IProject } from "../components";

export interface IAbout {
  introduction: string;
  hobbies: string;
  skills: ISkills;
}

export interface IHome extends IAbout {}

export interface ISkills {
  [key: string]: {
    title: string;
    content: string;
  };
}

export interface IJobData {
  companyName: string;
  designation: string;
  duration: {
    from: string;
    to: string;
  };
  projects: Pick<
    IProject,
    "title" & "contribution" & "description" & "stack"
  >[];
}
