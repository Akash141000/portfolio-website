import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Github } from "@styled-icons/boxicons-logos";

interface INavItem {
  href: string;
  title: string | React.ReactNode;
  passHref?: boolean;
}

const NavItem: React.FC<INavItem> = ({ href, title, passHref }) => {
  return (
    <div className="inline-block">
      <Link passHref href={href}>
        {title}
      </Link>
    </div>
  );
};

const NavItems = () => {
  return (
    <>
      <NavItem href="/" title="About" />
      <NavItem href="/work" title="Work" />
      <NavItem href="/projects" title="Projects" />
      <NavItem href="/contact" title="Contact Me" />
      <NavItem
        passHref
        href="https://github.com/Akash141000"
        title={
          <span>
            <span className="flex flex-row hidden md:inline-block hover:underline ">
              <Github />
            </span>
            <span>View Source</span>
          </span>
        }
      />
    </>
  );
};

const Navbar: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col bg-transparent">
      <nav
        className={
          "flex flex-row justify-center bg-transparent align-center w-full max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl self-center "
        }
      >
        <div id="title" className="text-2xl font-semibold">
          <Link href="/"> Portfolio </Link>
        </div>
        <div className="flex flex-row md:flex-col justify-center align-center w-100 h-100 md:inline-block">
          <NavItems />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 p-1 active:bg-dark active:ring-electric-blue rounded-sm  ring hover:-translate-y-0.5 translate transform md:hidden ring-opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            setIsOpen((open) => !open);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </nav>
      <div className={isOpen ? styles["menu-icon-list"] : "hidden"}>
        <NavItems />
      </div>
    </div>
  );
};

export default Navbar;
