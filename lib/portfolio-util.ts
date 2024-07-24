// import { async } from "@firebase/util";
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { IProject } from "../components";
import { PROJECT_DATA } from "../utils/project.data";

const config: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};
const firebaseApp = initializeApp(config);
const storage = getStorage(firebaseApp);
const storageRef = ref(storage, "projectImages/");

export const createProjectsArray = async (allProjects): Promise<IProject[]> => {
  const projects: IProject[] = [];
  for (const key in allProjects) {
    let imgRef = ref(storageRef, allProjects[key].image);
    const url = await getDownloadURL(imgRef);
    projects.push({
      ...allProjects[key],
      key: key,
      image: url,
    });
  }
  return projects;
};

export const getProjects = async (): Promise<IProject[]> => {
  // const response = await fetch(process.env.PROJECTS_API);
  // const allProjects = await response.json();
  // const projects = await createProjectsArray(allProjects);
  // return projects;

  return PROJECT_DATA;
};
