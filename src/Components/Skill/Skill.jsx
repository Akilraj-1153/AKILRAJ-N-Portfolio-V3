import React from "react";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import htmllogo from "../../Assets/Skills/Html.png";
import csslogo from "../../Assets/Skills/Css.png";
import jslogo from "../../Assets/Skills/js.png";
import reactlogo from "../../Assets/Skills/React.png";
import tailwindlogo from "../../Assets/Skills/Tailwind.png";
import gsapanimationlogo from "../../Assets/Skills/Gsap.png";
import pythonlogo from "../../Assets/Skills/Python.png";
import canvalogo from "../../Assets/Skills/Canva.png";


function Skill() {
  

  const myskills = [
    {
      Image: htmllogo,
      Title: "HTML",
      heightrating: "h-[60%] ",
      rating: 60,
      color: "bg-[#e54c26]",
    },
    {
      Image: csslogo,
      Title: "CSS",
      rating: 70,
      heightrating: "h-[70%]",
      rating: 70,
      color: "bg-[#2197f2]",
    },
    {
      Image: jslogo,
      Title: "JavaScript",
      heightrating: "h-[75%]",
      rating: 75,
      color: "bg-[#fec44c]",
    },
    {
      Image: reactlogo,
      Title: "React",
      heightrating: "h-[80%]",
      rating: 80,
      color: "bg-[#39C0D6]",
    },
    {
      Image: tailwindlogo,
      Title: "Tailwind",
      heightrating: "h-[65%]",
      rating: 65,
      color: "bg-[#2596be]",
    },
    {
      Image: gsapanimationlogo,
      Title: "GSAP",
      heightrating: "h-[70%]",
      rating: 70,
      color: "bg-[#88ce02]",
    },
    {
      Image: pythonlogo,
      Title: "Python",
      heightrating: "h-[85%]",
      rating: 85,
      color: "bg-gradient-to-br from-blue-900 to-yellow-500",
    },
    {
      Image: canvalogo,
      Title: "Canva",
      heightrating: "h-[60%]",
      rating: 60,
      color: "bg-gradient-to-br from-cyan-500 via-blue-700 to-violet-600",
    },
  ];

  const logoRef = useRef(null);
  const barRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skillcontainer",
        scroller: "#contentcontainer",
        start: "top center",
      },
    });

    tl.fromTo(".skillcontainer", { opacity: 0, y: 200 }, { opacity: 1, y: 0 });
    tl.fromTo(
      ".skillicon",
      { opacity: 0, y: 100, x: 20 },
      { opacity: 1, y: 0, x: 20, stagger: 0.1 }
    );
    tl.fromTo(
      ".skillname",
      { opacity: 0, y: -100, x: 20 },
      { opacity: 1, y: 0, x: 20, stagger: 0.1 }
    );

    tl.to(".skillicon", { y: 0, x: 0 }, "-=0.4");
    tl.to(".skillname", { y: 0, x: 0 }, "-=0.4");

    tl.fromTo(".progressbar", { opacity: 0, x: -50 }, { opacity: 1, x: 0 });
    tl.fromTo(
      ".skillcolors",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2 }
    );
    tl.fromTo(".skillrating", { opacity: 0, y: -50 }, { opacity: 1, y: 0 });
  });

  return (
    <div className="h-full w-full text-white flex gap-2 xs:justify-start xs:items-start md:justify-center md:items-center font-mateSc overflow-hidden">
      <div className="flex gap-4 flex-wrap justify-center items-center xs:h-[90%] xs:w-full md:h-[50%] lg:h-[60%] lg:w-[50%] overflow-scroll">
        {myskills.map((skill, index) => (
          <div
            key={index}
            className=" h-fit w-fit rounded-md bg-black/30 flex justify-center items-center  p-2 lg:p-5 gap-2"
          >
            <div className="flex justify-center items-center flex-col">
              <img
                className="skillicon h-[10vh] w-[10vh]"
                src={skill.Image}
                alt={`${skill.Title} logo`}
              />
              <div className="skillname">{skill.Title}</div>
            </div>

            <div className="flex xs:flex-col  justify-center items-center  gap-2">
              <div className="progressbar flex  xs:items-end bg-white/30 h-20 w-5  rounded-sm overflow-hidden shadow-2xl">
                <div
                  className={`skillcolors ${skill.color} w-full shadow-lg ${skill.heightrating}`}
                ></div>
              </div>

              <div className="skillrating">{skill.rating}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
