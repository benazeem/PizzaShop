import { React, useState } from "react";
import Icon from "../assets/Icon.jsx";
import { Link, NavLink } from "react-router-dom";
import ScrollLink from "./ScrollLink.jsx";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="z-50 absolute sticky top-0  w-full flex justify-between items-center p-2 bg-teal-300 dark:bg-zinc-800">
        <div>
        <ScrollLink to="/#head">
            <Icon
              css={`fill-green-500 dark:fill-yellow-400 ml-2 h-10 w-10`}
              className="h-10 w-10"
            />
          </ScrollLink>
        </div>
        <div className="mr-4">
          <nav>
            <section className="MOBILE-MENU  flex lg:hidden">
              <div
                className="HAMBURGER-ICON flex flex-col space-y-2 "
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="bg-black dark:bg-white h-0.5 w-10 rounded"></span>
                <span className="bg-black dark:bg-white h-0.5 w-10 rounded"></span>
                <span className="bg-black dark:bg-white h-0.5 w-10 rounded"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav bg-white dark:bg-black" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className=" flex flex-col items-center justify-between min-h-[200px]">
                  <li className="text-black dark:text-white border-b border-gray-400 my-2 uppercase">
                  <ScrollLink to="/#head">Home</ScrollLink>
                  </li>
                  <li className="text-black dark:text-white border-b border-gray-400 my-2 uppercase">
                  <ScrollLink to="/#about">About</ScrollLink>
                  </li>
                  <li className="text-black dark:text-white border-b border-gray-400 my-2 uppercase">
                  <ScrollLink to="/#Review">Review</ScrollLink>
                  </li>
                  <li className="text-black dark:text-white border-b border-gray-400 my-2 uppercase">
                  <ScrollLink to="/#order">Order Now</ScrollLink>
                  </li>
                </ul>
              </div>
            </section>
            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
              <li className="text-white dark:text-black font-medium bg-green-500 dark:bg-yellow-400 p-1 rounded-lg ">
                {" "}
                <ScrollLink to="/#head">Home</ScrollLink>
              </li>
              <li className="text-white dark:text-black font-medium bg-green-500 dark:bg-yellow-400 p-1 rounded-lg ">
                {" "}
                <ScrollLink to="/#about">About</ScrollLink>
              </li>
              <li className="text-white dark:text-black font-medium bg-green-500 dark:bg-yellow-400 p-1 rounded-lg ">
                {" "}
                <ScrollLink to="/#Review">Review</ScrollLink>
              </li>
              <li className="text-white dark:text-black font-medium bg-green-700 dark:bg-yellow-300 px-2 py-1 rounded-lg">
                {" "}
                <ScrollLink to="/#order">Order Now</ScrollLink>
              </li>
            </ul>
          </nav>
          <style>
            {" "}
            {`
            .hideMenuNav {display: none;}
            .showMenuNav {display: block;
              position: absolute;
              width: 100%;
              height: 40vh;
              top: 0;
              left: 0;
              z-index: 10;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
            }`}
          </style>
        </div>
      </div>
    </>
  );
}

export default Header;
