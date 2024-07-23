import Link from "next/dist/client/link";

const chevronRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-4 inline group-hover:translate-x-0.5 translate transform"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export const Introduction = (props: { intro: string }) => {
  const { intro } = props;
  return (
    <>
      <div className="h-auto w-auto mt-4 bg-light p-5 text-sm tracking-widest rounded-sm">
        {intro}
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="group bg-green  rounded-md p-2 mt-10 text-light text-lg  hover:bg-green-700">
          <Link href="/work">
            <a>Work Experience{chevronRight}</a>
          </Link>
        </button>
      </div>
    </>
  );
};
