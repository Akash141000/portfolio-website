export const abouthandler = async (): Promise<{ [key: string]: string }> => {
  const response = await fetch(
    process.env.ABOUT_API
  );
  const result = await response.json();
  return result;
};
