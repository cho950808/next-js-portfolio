import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f1");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 700) {
        setShadow(true);
        setNavBg("#ecf0f1");
        setLinkColor("#1f2937");
      } else {
        setShadow(false);
        setNavBg("transparent");
        setLinkColor("#ecf0f1");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleResume = (e) => {
    e.preventDefault();
    router.push("/myResume");
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/assets/mylogo.png" alt="/" width="100" height="40" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:scale-105">HOME</li>
            </Link>
            <Link href="/#aboutMe">
              <li className="ml-10 text-sm uppercase hover:scale-105">ABOUT</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:scale-105">
                SKILLS
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:scale-105">
                PROJECTS
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer px-2">
            <AiOutlineMenu style={{ color: `${linkColor}` }} size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease duration-500"
              : "fixed left-[-100%] top-0 p-10 ease duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/assets/mylogo.png" width="87" height="35" alt="/" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col h-[90vh]">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(!nav)}
                  className="py-4 text-sm hover:border-b"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(!nav)}
                  className="py-4 text-sm hover:border-b"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(!nav)}
                  className="py-4 text-sm hover:border-b"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(!nav)}
                  className="py-4 text-sm hover:border-b"
                >
                  Projects
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#6fa2c7]">
                Let's connect
              </p>
              <div className="flex items-center justify-between w-full my-4 sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/gw%C3%A9na%C3%ABl-gu%C3%A9rin-0636901a7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150">
                    <AiFillLinkedin />
                  </div>
                </a>
                <a
                  href="https://github.com/gwen-guerin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150">
                    <AiFillGithub />
                  </div>
                </a>
                <a href="mailto:gwenael.guerin@protonmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150">
                    <AiOutlineMail />
                  </div>
                </a>
                <Link onClick={handleResume} href="/#myResume" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-150">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
