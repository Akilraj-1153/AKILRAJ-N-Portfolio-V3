import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import { NavState } from "./Atoms/atoms";
import { useRecoilState } from "recoil";
import Skill from "./Components/Skill/Skill";
import Projects from "./Components/Projects/Projects";
import Certification from "./Components/Certification/Certification";

function App() {
  const [activeButton, setActiveButton] = useRecoilState(NavState);

  const handleMouseEnter = (sectionName) => {
    setActiveButton(sectionName);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 overflow-hidden">
      <div className=" h-[8vh] w-full">
        <NavBar />
      </div>
      <div
        name="home"
        id="contentcontainer"
        className=" h-[92lvh] w-full overflow-scroll"
      >
        <div
          onMouseEnter={() => handleMouseEnter("home")}
          className="h-full w-full p-1 rounded-md"
        >
          <Home></Home>
        </div>
        <div
          name="skill"
          onMouseEnter={() => handleMouseEnter("skill")}
          className="skillcontainer h-full w-full p-1 rounded-md"
        >
          <Skill></Skill>
        </div>
        <div
          name="project"
          onMouseEnter={() => handleMouseEnter("project")}
          className="projectecontainer h-full w-full p-1 rounded-md"
        >
          <Projects></Projects>
        </div>
        <div
          name="Certification"
          onMouseEnter={() => handleMouseEnter("Certification")}
          className="Certificatecontainer h-full w-full p-1 rounded-md"
        >
          <Certification></Certification>
        </div>
        <div
          name="contact"
          onMouseEnter={() => handleMouseEnter("contact")}
          className="Contactcontainer h-full w-full p-1 rounded-md"
        >
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
