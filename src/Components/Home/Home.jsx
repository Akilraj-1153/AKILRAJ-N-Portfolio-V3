import React, { useState } from "react";
import { ExternalLink } from "react-external-link";
import { Link } from "react-scroll";
import { useRecoilState } from "recoil";
import { NavState } from "../../Atoms/atoms";
import { ImLinkedin } from "react-icons/im";
import { FaSquareGithub } from "react-icons/fa6";
import { ImMail } from "react-icons/im";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import myimage from "../../Assets/HomeImg/HomeImage2.jpg"


function Home() {
  const [activeLink, setActiveLink] = useRecoilState(NavState);

  function handleActive(id) {
    setActiveLink(id);
  }

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".homeimg", { opacity: 0, y: 100 }, { opacity: 1, y: 0 });
    tl.fromTo(
      ".name",
      { opacity: 0, y: 100 },
      { opacity: 1, stagger: 0.1, y: 0 },
      "-=0.5"
    );
    tl.fromTo(".role", { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "-=0.4");
    tl.fromTo(
      ".hometext",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0 },
      "-=0.5"
    );
    tl.fromTo(
      ".contacticonpc",
      { opacity: 0, y: -100 },
      { opacity: 1, stagger: 0.1, y: 0, reversed: true },
      "-=0.4"
    );
  });

  return (
    <div className="h-full w-full flex flex-col xs:justify-start md:justify-center items-center text-white gap-2 overflow-hidden">
      <img
        className="homeimg h-[30vh] w-[30vh] rounded-full object-contain object-center flex justify-center items-center"
        src={myimage}
      ></img>
      <div className="flex justify-center gap-1 text-red-600">
        <h1 className=" name xs:text-5xl lg:text-7xl font-mateSc font-bold">
          A
        </h1>
        <h1 className=" name xs:text-5xl lg:text-7xl font-mateSc font-bold">
          K
        </h1>
        <h1 className=" name xs:text-5xl lg:text-7xl font-mateSc font-bold">
          I
        </h1>
        <h1 className=" name xs:text-5xl lg:text-7xl font-mateSc font-bold">
          L
        </h1>
        <h1 className=" name xs:text-5xl lg:text-7xl font-mateSc font-bold">
          R
        </h1>
        <h1 className=" name xs:text-5xl lg:text-7xl font-mateSc font-bold">
          A
        </h1>
        <h1 className=" name xs:text-5xl lg:text-7xl font-mateSc font-bold">
          J
        </h1>
        <h1 className=" name xs:text-5xl lg:text-7xl font-mateSc font-bold">
          &nbsp;
        </h1>
        <h1 className="name xs:text-5xl lg:text-7xl font-mateSc font-bold">
          N
        </h1>
      </div>

      <div className="role flex justify-center ">
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">F</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">r</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">o</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">n</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">t</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">e</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">n</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">d</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">&nbsp;</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">D</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">e</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">v</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">e</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">l</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">o</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">p</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">e</h4>
        <h4 className="xs:text-2xl lg:text-3xl font-mate font-bold">r</h4>
      </div>

      <p className="hometext text-justify max-w-3xl xs:text-md lg:text-2xl font-mate xs:px-5  ">
        I'm passionate about taking on new challenges and growing my skill set,
        particularly in frontend development. With my artistic vision and
        proactive approach to mastering new technologies, I excel in fast-paced,
        creative environments. I'm dedicated to advancing organizational success
        and bringing fresh ideas to support team goals.
      </p>
      <div className="h-fit w-full justify-center gap-5  items-end lg:py-4 flex">
        <SocialIcon
          url="https://www.linkedin.com/in/akilrajn1153"
          icon={<ImLinkedin size={35} color="white" />}
        />
        <SocialIcon
          url="https://github.com/Akilraj-1153"
          icon={<FaSquareGithub size={40} color="white" />}
        />
        <Link
          to="contact"
          containerId="contentcontainer"
          smooth={true}
          onClick={() => handleActive("contact")}
        >
          <div className="contacticonpc z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center">
            <ImMail size={35} color="white" />
          </div>
        </Link>
        <Link
          to="contact"
          containerId="contentcontainer"
          smooth={true}
          onClick={() => handleActive("contact")}
        >
          <div className="contacticonpc z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center">
            <FaSquarePhone size={40} color="white" />
          </div>
        </Link>
        <SocialIcon
          url="https://wa.me/919840899656"
          icon={<FaSquareWhatsapp size={40} color="white" />}
        />
      </div>
    </div>
  );
}

function SocialIcon({ url, icon }) {
  return (
    <ExternalLink href={url}>
      <div className="contacticonpc z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center">
        {icon}
      </div>
    </ExternalLink>
  );
}

export default Home;
