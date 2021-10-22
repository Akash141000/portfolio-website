export interface IProject {
  key: string;
  title: string;
  image: string;
  description: string;
  attachedImages?: string[];
  stack: string;
  website?: string;
  platform?: string;
  source?: string;
  excerpt: string;
}

export interface IAbout {
  description: string;
  hobbies: string;
  skills: ISkills;
}

export interface ISkills {
  [key: string]: {
    title: string;
    content: string;
  };
}
