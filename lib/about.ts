import { ABOUT_DATA } from "./about.data";

export const abouthandler = async (): Promise<{ [key: string]: any }> => {
  // const response = await fetch(
  //   process.env.ABOUT_API
  // );
  // const result = await response.json();
  // return result;

  return ABOUT_DATA;
};
