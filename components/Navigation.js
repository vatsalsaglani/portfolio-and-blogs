import { useState } from "react";
import useGlobalContext from "../contexts/global";
import Link from "next/link";

export default function Navigation() {
  const [openBar, setOpenBar] = useState(false);
  return (
    <>
      <div className="w-[80%]  p-8 hidden md:block ">
        <div className="md:flex bg-darkbg flex-row items-start justify-start  mx-auto rounded-md">
          <div className="flex flex-row justify-around w-[60%] items-start">
            <NavLink href={"/"}>
              <div className="flex flex-row items-center justify-center">
                About
              </div>
            </NavLink>
            <NavLink href={"/blog"}>
              <div className="flex flex-row items-center justify-center">
                Blog
              </div>
            </NavLink>
            <NavLink href={"/leetcode"}>
              <div className="flex flex-row items-center justify-center">
                Leetcode
              </div>
            </NavLink>
            <NavLink href={"/contact"}>
              <div className="flex flex-row items-center justify-center">
                Contact
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="md:hidden rounded-sm ">
        {openBar ? (
          <div
            className={` bg-transparent  ${
              openBar ? "translate-x-0" : "translate-x-full"
            } z-40  ease-in-out duration-900`}
          >
            <div className="bg-transparent px-4 py-4 min-h-screen min-w-full flex flex-col justify-start items-start">
              <div className="flex flex-row-reverse w-full">
                <button
                  onClick={() => {
                    setOpenBar(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center h-screen w-full space-y-4 ">
                <NavLink href={"/"}>About</NavLink>
                <NavLink href={"/blog"}>Blog</NavLink>
                <NavLink href={"/leetcode"}>Leetcode</NavLink>
                <NavLink href={"/contact"}>Contact</NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-darkbg w-full">
            <div className="px-4 bg-darkbg py-4 z-10 w-full block fixed shadow-xl hover:border translate-x-0 ease-linear duration-150">
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  setOpenBar(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-200 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />{" "}
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const NavLink = ({ href, children }) => (
  <Link href={href} className={"text-sky-50 font-bold text-base "}>
    <a className="text-sky-200 font-bold font-Work text-2xl my-2 md:my-0 md:text-base md:hover:text-xl md:hover:transition-all">
      {children}
    </a>
  </Link>
);
