import React, { useState } from "react";
import { MobNavState, NavState } from "../../Atoms/atoms";
import { useRecoilState } from "recoil";
import { RiMenuFoldFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { TbArrowsCross } from "react-icons/tb";
import navimg from "../../Assets/NavImg/Navimg.png"

import { useGSAP } from "@gsap/react"; // Assuming this import is used elsewhere in your project
import gsap from "gsap"; // Assuming this import is used elsewhere in your project

function NavBar() {
  const [mobnav, setMobNav] = useRecoilState(MobNavState);
  const [navactiveicon, setNavActiveIcon] = useState(false);
  const [activeLink, setActiveLink] = useRecoilState(NavState);
  const [firstclick, setFirstclick] = useState(true);

  function handleClick() {
    setNavActiveIcon(!navactiveicon);
    setMobNav(!mobnav);
    if (firstclick) {
      setFirstclick(false);
    }
  }

  const handlenavicon = () => {
    setNavActiveIcon(!navactiveicon);
    setMobNav(!mobnav);
  };

  function handleactive(id) {
    setActiveLink(id);
  }

  return (
    <div className="sticky top-0 flex flex-col gap-1 p-1 font-mateSc backdrop-blur-3xl z-40 ">
      <div className="rounded-md w-full h-[7vh] flex bg-black/30 text-white">
        <div className="h-full w-auto">
          <img className="h-full w-auto" src={navimg} alt="Navigation Logo" />
        </div>

        <div className="flex justify-end items-center h-full flex-grow xs:hidden md:flex">
          <div className="flex justify-end items-center mr-10">
            <div>
              <Link
                onClick={() => {
                  handleactive("home");
                }}
                to="home"
                containerId="contentcontainer"
                smooth={true}
                className={`${
                  activeLink === "home"
                    ? "text-red-500 font-bold"
                    : "text-white"
                } navbarelement cursor-pointer justify-center items-center flex h-[5vh] p-4 text-xl`}
              >
                Home
              </Link>
            </div>

            <div>
              <Link
                onClick={() => {
                  handleactive("skill");
                }}
                to="skill"
                containerId="contentcontainer"
                smooth={true}
                className={`${
                  activeLink === "skill"
                    ? "text-red-500 font-bold"
                    : "text-white"
                } navbarelement cursor-pointer justify-center items-center flex h-[5vh] p-4 text-xl`}
              >
                Skill
              </Link>
            </div>

            <div>
              <Link
                onClick={() => {
                  handleactive("project");
                }}
                to="project"
                containerId="contentcontainer"
                smooth={true}
                className={`${
                  activeLink === "project"
                    ? "text-red-500 font-bold"
                    : "text-white"
                } navbarelement cursor-pointer justify-center items-center flex h-[5vh] p-4 text-xl`}
              >
                Project
              </Link>
            </div>

            <div>
              <Link
                onClick={() => {
                  handleactive("Certification");
                }}
                to="Certification"
                containerId="contentcontainer"
                smooth={true}
                className={`${
                  activeLink === "Certification"
                    ? "text-red-500 font-bold"
                    : "text-white"
                } navbarelement cursor-pointer justify-center items-center flex h-[5vh] p-4 text-xl`}
              >
                Certification
              </Link>
            </div>

            <div>
              <Link
                onClick={() => {
                  handleactive("contact");
                }}
                to="contact"
                containerId="contentcontainer"
                smooth={true}
                className={`${
                  activeLink === "contact"
                    ? "text-red-500 font-bold"
                    : "text-white"
                } navbarelement cursor-pointer justify-center items-center flex h-[5vh] p-4 text-xl`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div
          onClick={handlenavicon}
          className="h-full w-fit flex flex-grow justify-end items-center md:hidden xs:flex mr-5"
        >
          {navactiveicon ? (
            <TbArrowsCross
              style={{
                height: "60%",
                width: "auto",
              }}
            />
          ) : (
            <RiMenuFoldFill
              style={{
                height: "60%",
                width: "auto",
              }}
            />
          )}
        </div>
      </div>

      {mobnav && (
        <div className="bg-black/30 text-white rounded-md w-full h-fit z-40 p-5 md:hidden">
          <div className="flex flex-col gap-3 justify-end items-end text-xl">
            <Link
              onClick={() => {
                handleClick();
                handleactive("home");
              }}
              to="home"
              containerId="contentcontainer"
              smooth={true}
              className={`${
                activeLink === "home" ? "text-red-500 font-bold" : "text-white"
              } mobileelement cursor-pointer justify-end items-center flex h-[5vh] w-full`}
            >
              Home
            </Link>
            <Link
              onClick={() => {
                handleClick();
                handleactive("skill");
              }}
              to="skill"
              containerId="contentcontainer"
              smooth={true}
              className={`${
                activeLink === "skill" ? "text-red-500 font-bold" : "text-white"
              } mobileelement cursor-pointer justify-end items-center flex h-[5vh] w-full`}
            >
              Skill
            </Link>
            <Link
              onClick={() => {
                handleClick();
                handleactive("project");
              }}
              to="project"
              containerId="contentcontainer"
              smooth={true}
              className={`${
                activeLink === "project"
                  ? "text-red-500 font-bold"
                  : "text-white"
              } mobileelement cursor-pointer justify-end items-center flex h-[5vh] w-full`}
            >
              Project
            </Link>
            <Link
              onClick={() => {
                handleClick();
                handleactive("Certification");
              }}
              to="Certification"
              containerId="contentcontainer"
              smooth={true}
              className={`${
                activeLink === "Certification"
                  ? "text-red-500 font-bold"
                  : "text-white"
              } mobileelement cursor-pointer justify-end items-center flex h-[5vh] w-full`}
            >
              Certification
            </Link>
            <Link
              onClick={() => {
                handleClick();
                handleactive("contact");
              }}
              to="contact"
              containerId="contentcontainer"
              smooth={true}
              className={`${
                activeLink === "contact"
                  ? "text-red-500 font-bold"
                  : "text-white"
              } mobileelement cursor-pointer justify-end items-center flex h-[5vh] w-full`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
