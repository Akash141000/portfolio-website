import { title } from "process";

const description = `Hello, I'm Akash , a passionate MEAN/MERN Stack Developer and React Native enthusiast with a knack for AWS and Azure cloud technologies and DevOps.
With hands-on experience in crafting robust applications using MongoDB, Express.js, Angular/React, and Node.js, I thrive on building dynamic and scalable solutions that drive innovation
I'm well-versed in leveraging the power of AWS and Azure cloud platforms to architect and deploy cloud-native applications efficiently.
I'm deeply passionate about mobile development, and React Native has been my go-to framework for building cross-platform mobile apps with native-like performance.
In addition to my technical skills, I'm proficient in DevOps practices, automating CI/CD pipelines, and ensuring seamless delivery and deployment of software.`;

const hobbies = `Playing Guitar, Gym, Gaming`;

const SKILL_LEVEL = {
  expert: "Expert",
  intermediate: "Intermediate",
  beginner: "Begineer",
};

const skills = [
  {
    title: "Nodejs",
    content: SKILL_LEVEL.expert,
  },
  {
    title: "Golang",
    content: SKILL_LEVEL.intermediate,
  },
  {
    title: "React Native",
    content: SKILL_LEVEL.expert,
  },

  {
    title: "MongoDB",
    content: SKILL_LEVEL.expert,
  },
  {
    title: "SQL",
    content: SKILL_LEVEL.intermediate,
  },

  {
    title: "Docker",
    content: SKILL_LEVEL.expert,
  },
  {
    title: "AWS",
    content: SKILL_LEVEL.intermediate,
  },
  {
    title: "Azure",
    content: SKILL_LEVEL.intermediate,
  },

  {
    title: "NextJs/ReactJs/Angular",
    content: SKILL_LEVEL.expert,
  },
];

export const About_data = {
  description: description,
  hobbies: hobbies,
  skills: skills,
};
