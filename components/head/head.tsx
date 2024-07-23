import NextHead from "next/head";

interface IHead {
  content: string;
  title: string;
}

export const Head: React.FC<IHead> = ({ content, title }) => {
  return (
    <NextHead>
      <meta name={content} content={content} />
      <title>{title}</title>
    </NextHead>
  );
};
