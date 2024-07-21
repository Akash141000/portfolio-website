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

const Intro = (props: { intro: string }) => {
  const { intro } = props;
  return (
    <>
      <div className="h-auto w-auto mt-4 bg-white p-5 text-sm tracking-widest rounded-sm">
        {intro}
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="group bg-green-600  rounded-md p-2 mt-10 text-white text-lg  hover:bg-green-700">
          <Link href="/portfolio">
            <a>My Portfolio{chevronRight}</a>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Intro;
