import React, { useState } from "react";
import { ExternalLink } from "react-external-link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import project1 from "../../Assets/Projects/ROCK PAPER SCISSOR.png";
import project2 from "../../Assets/Projects/Etch-a-Sketch Color Game.png";
import project3 from "../../Assets/Projects/SIMPLE CALCULATOR.png";
import project4 from "../../Assets/Projects/Flames.png";
import project5 from "../../Assets/Projects/EverGreen.png";
import project6 from "../../Assets/Projects/PGHT-Web.png";
import project7 from "../../Assets/Projects/PGHT-TAURI.png";
import project8 from "../../Assets/Projects/CodeTurf.png";


function Projects() {
  

  const MyProjects = [
    {
      Title: "CODE TURF",
      Description:
        "Code Turf integrates React.js, Tailwind CSS, and the Ace Editor API to deliver a seamless coding experience with support for multiple programming languages. It leverages the Piston API to execute and run code, making it an invaluable tool for developers, students, and educators alike.",
      Image: project8,
      Link: "https://akilraj-1153.github.io/Code_Turf-Code_Editor/",
    },
    {
      Title: "PGHT-WINDOWS APP",
      Description:
        "Boost your personal development journey with our Windows app, powered by Tauri, React.js, Tailwind CSS, and Firebase. Experience seamless habit tracking and goal setting in your desktop environment, with cross-platform compatibility for accessibility across devices. Enjoy security and convenience within the Windows ecosystem.",
      Image: project7,
      DownloadLink:
        "https://drive.usercontent.google.com/download?id=1IekcHNAE4ghYTbAI3mIcVy_PE3_OybVc&export=download&authuser=0",
    },
    {
      Title: "PGHT-WEB",
      Description:
        "Track your personal growth effortlessly with our web platform, featuring React.js, Tailwind CSS, and Firebase. Safeguard your progress with robust user authentication, manage habits effortlessly, and customize your profile for your unique journey. Access your data from any browser for convenience wherever you go.",
      Image: project6,
      Link: "https://akilraj-1153.github.io/PGHT-Web/",
    },
    {
      Title: "EVERGREEN",
      Description:
        "Discover the vibrant spectrum of health benefits offered by our meticulously curated selection of vegetables and fruits at EverGreen.",
      Image: project5,
      Link: "https://akilraj-1153.github.io/EverGreen/",
    },
    {
      Title: "FLAMES",
      Description:
        'After being challenged by a "Zoho" interview question, I was inspired to create FLAMES WebApp. FLAMES is a fun game that predicts the relationship between two people based on the acronym: Friends, Lovers, Affectionate, Marriage, Enemies, Siblings.',
      Image: project4,
      Link: "https://akilraj-1153.github.io/Flames_Fun_web_app/",
    },
    {
      Title: "ROCK PAPER SCISSOR",
      Description:
        "Enjoy a digital twist on the classic Rock, Paper, Scissors game. Crafted with HTML, CSS, and JavaScript, this interactive experience brings timeless fun to your fingertips.",
      Image: project1,
      Link: "https://akilraj-1153.github.io/Rock_Paper_Scissors/",
    },
    {
      Title: "ETCH-A-SKETCH COLOR GAME",
      Description:
        "Immerse yourself in nostalgia with our digital Etch-a-Sketch Color Game. Using HTML, CSS, and JavaScript, this game transforms the classic toy into a vibrant canvas, allowing you to draw and paint with a virtual twist.",
      Image: project2,
      Link: "https://main--top-etch-a-sketch-akil-1153.netlify.app/",
    },
    {
      Title: "SIMPLE CALCULATOR",
      Description:
        "Streamline your calculations with our sleek and user-friendly Simple Calculator. Developed using HTML, CSS, and JavaScript, it offers a smooth interface for basic arithmetic, making number crunching a breeze.",
      Image: project3,
      Link: "https://calculator-akil-1153.netlify.app/",
    },
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projectecontainer",
        // markers:true,
        scroller: "#contentcontainer",
        start: "top center",
      },
    });
    tl.fromTo(
      ".projectecontainer",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1 }
    );
    tl.fromTo(
      ".project",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );
  });

  return (
    <div className=" myprojects h-[90vh] w-full text-white flex flex-col bg-blac rounded-lg lg:flex-row gap-4 p-4 lg:justify-center items-center overflow-scroll">
      <div className=" scroll-smooth lg:h-full lg:w-[60%] grid md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1 gap-5 overflow-x-scroll p-2 ">
        {MyProjects.map((project, index) => (
          <div
            key={index}
            className="project flex flex-col items-center p-4 rounded-2xl shadow-lg w-full bg-black/30 text-white"
          >
            <img
              className="select-none w-auto h-50 object-cover rounded-lg"
              src={project.Image}
              alt={project.Title}
            />
            <h3 className="select-none text-xl font-bold mb-2 font-mateSc">
              {project.Title}
            </h3>
            <p className="select-none text-sm mb-4 text-center">
              {project.Description}
            </p>
            {project.Title === "PGHT-WINDOWS APP" ? (
              <ExternalLink href={project.DownloadLink} download>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                  Download
                </button>
              </ExternalLink>
            ) : (
              <ExternalLink href={project.Link}>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  View Page
                </button>
              </ExternalLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
