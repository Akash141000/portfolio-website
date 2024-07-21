import React, { useState } from "react";
import Link from "next/link";

import styles from "./header.module.css";

//icon
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos";

const GithubIcon = styled(Github)`
  display: inline-block;
  height: 1.5rem;
  color: white;
`;

const Navbar: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems = (
    <ul className={styles["ul-list"]}>
      <li className="md:hidden">
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/projects"> Projects</Link>
      </li>
      <li>
        <Link href="/contact"> Contact Me</Link>
      </li>
      <li>
        <Link passHref href="https://github.com/Akash141000">
          <span>
            <span className="hidden md:inline-block hover:underline">
              <GithubIcon />
              Source
            </span>
            <span className="md:hidden">View Source</span>
          </span>
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <header className="text-2xl font-bold">
          <Link href="/"> Portfolio </Link>
        </header>
        <div className="hidden md:inline-block">{navItems}</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 p-1 active:bg-black active:ring-electric-blue rounded-sm  ring hover:-translate-y-0.5 translate transform md:hidden ring-opacity-50"
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
        {navItems}
      </div>
    </>
  );
};

export default Navbar;
