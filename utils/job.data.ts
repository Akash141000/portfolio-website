import { IJobData } from "../types/types";

export const JOB_DATA: IJobData[] = [
  {
    companyName: "CodeB",
    designation: "Software Engineer",
    duration: {
      from: "Dec 2021",
      to: "Nov 2022",
    },
    projects: [
      {
        title: "Algo",
        description: `Online application that makes hiring easy for HRs and selecting candidates based on the  online coding test.`,
        stack: [
          "ReactJS",
          "MongoDB",
          "AWS",
          "NestJs",
          "Scss",
          "Bootstrap",
          "Redux",
        ],
        contribution: [
          "Create UI Dashboard, create compilation templates for reusability. Support adding new questions for various languages.  ",
          "Code Optimisation and restructuring",
          " Integrate camera module to take picture while taking the test and save the data on Aws S3",
        ],
      },
      {
        title: "CrowdNautics",
        description: `Mobile application with 3 Lakhs+ downloads and daily active user base of 20k+ users.`,
        stack: [
          "React Native",
          "Android",
          "iOS",
          "AWS",
          "Firebase",
          "MongoDB",
          "NestJs",
          "ReactJS",
          "Ampitude",
          "NewRelic",
          "Scss",
        ],
        contribution: [
          "Using Figma Designs create  apps from  scratch  and deploy on Play store and App Store.",
          "Understanding the tools and services provided by Aws and create infrastructure using terraform on Aws",
          "Setup CI CD for the backend deployment on AWS ECS, AWS Lambda and make infrastructure deployment for using terraform.",
          "Integrate the apps with Firebase.",
          "Create and deploy new schedulers on AWS Lambda service for push Notification, Payments, etc",
          "Improvise the payment methods for data verification using data aggregation from the database and generate csv to verify the fraudulent user.",
          "Optimise database indexing for better querying and faster results and stop data duplication and corruption.",
          "Participate in Daily Scrum meeting with the client and understand the requirements and add new features to the application based on the requirements and verify backward compatibility.",
          "Integrate NewRelic and Amplitude for application insights ",
          "Create Admin Panel for better management",
        ],
      },
      {
        title: "Hbits",
        description: "Online Platform for investing in real estate.",
        stack: ["NextJS", "ReactJS", "AWS", "Hapijs", "NewRelic", "MongoDB"],
        contribution: [
          "Deploy the NextJs website on Vercel Cloud and connect it to Cloud fare for better availability and protection.",
          "Optimise the SEO and reduce the loading time and improve the availability.",
          "Create infrastructure on AWS using terraform and setup CICD pipelines.",
          "Migrate the faulty Infrastructure to AWS.",
          "Fix critical issues with the payment gateways.",
          "Integrate Lead Squared CRM with the backend. ",
        ],
      },
      {
        title: "Eplanner",
        description:
          "Web Application used for management and organising big meetings and get user feedbacks.",
        stack: ["ReactJS", "Azure", "Scss", "NestJs"],
        contribution: [
          "Create React Js application from the scratch replicating the Figma design and lead the frontend development.",
          "Understanding the tools and services provided by Azure and create infrastructure on Azure using terraform and deploy the backend on Azure Container Apps and App Service.",
          "Participate in Daily Scrum meeting with the client and understand the requirements.",
          "Review the code, PR and integrate new features.",
        ],
      },
      {
        title: "Web Scrapper",
        description: "",
        stack: ["Nodejs", "Puppeteer"],
        contribution: [
          "Perform web scraping using Puppeteer and gather the data from specific web sites.",
        ],
      },
    ],
  },
  {
    companyName: "Doyen Infosolutions",
    designation: "Software Engineer",
    duration: {
      from: "Nov 2022",
      to: "Present",
    },
    projects: [
      {
        title: "AtlasCopco",
        description:
          "Work on a cluster of application that are interconnected and help in HR processes and used by the clients.",
        stack: ["Angular", "NodeJs", "MongoDb", "Azure", "PostgreSQL"],
        contribution: [
          "Work on Idempotent event based application connectivity across cluster of applications.",
          "Create scrips for data migration and correction.",
          "Create new pages and components in Angular and deploy it on Pm2 ",
          "Design new Api and add new features as asked by the client.",
          "Fix critical bugs related to the code, database and querying without effecting the existing working of the application.",
          "Improvise the existing features like mailing and help analyse the same from the frontend.",
          "Optimise API for better segregation of data for better querying and low latency that fetches the data from SAP",
          "Deploy applications on Azure App Service.",
          "Verifying and Debugging the application Logs using Azure Log Stream.",
        ],
      },
      {
        title: "Montova",
        description:
          "Web Application used by big companies for logistics management on a very large scale.",
        stack: ["ReactJs", "IIS", "JFrog"],
        contribution: [
          "Work on MicroFrontend and create separate modules.",
          "Analysis for JFrog artifactory management and create new UI Library that can be reused access various application and deploy it on JFrog",
          "Migrate application from AntD to MUI",
          "Create generic and reusable components that can be used as a UI Library.",
          "Integrate new libraries like react flow to better visualise the infrastructure, etc",
        ],
      },
      {
        title: "Auditry",
        description:
          "Web Application for helping companies simplify the auditing process.",
        stack: ["ReactJs", "Cypress", "FusionAuth"],
        contribution: [
          "Dockerize the application.",
          "Analyse the authentication management using FusionAuth and Containerizing the same.",
          "Create new modules and  improvise the styling for the application.",
          "Analysis for cypress and write code for automation end-to-end tests.",
          "Working with backend developer and adding new features to the application providing better application insights.",
          "Create components from scratch on top of AntD  components that don’t exists.",
          "Deploy application on IIS server.",
        ],
      },
    ],
  },
];
