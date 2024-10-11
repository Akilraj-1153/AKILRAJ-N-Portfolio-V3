import React, { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRecoilState } from "recoil";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Centercertificate } from "../../Atoms/atoms";
import certificate1 from "../../Assets/Certification/Foundations of User Experience (UX) Design.jpg";
import certificate2 from "../../Assets/Certification/Front End Development - HTML.jpg";
import certificate3 from "../../Assets/Certification/HTML and CSS in depth.jpg";
import certificate4 from "../../Assets/Certification/React Basics.jpg";
import certificate5 from "../../Assets/Certification/UI&UX.jpg";


function Certification() {
  
  const certificateList = [
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
  ];

  const [currentIndex, setCurrentIndex] = useRecoilState(Centercertificate);
  const [autoUpdate, setAutoUpdate] = useState(true);
  const boxRefs = useRef([]);

  useEffect(() => {
    if (autoUpdate) {
      const intervalId = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % certificateList.length
        );
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [autoUpdate, certificateList.length, setCurrentIndex]);

  const prevIndex = (currentIndex + 1) % certificateList.length;
  const nextIndex =
    (currentIndex - 1 + certificateList.length) % certificateList.length;

  useEffect(() => {
    const animateSwap = () => {
      gsap.fromTo(
        boxRefs.current[currentIndex],
        { scale: 0.5 },
        { scale: 1, duration: 0.5, ease: "power1.inout" }
      );
    };

    animateSwap();
  }, [currentIndex, prevIndex, nextIndex]);

  const navigateToIndex = (index) => {
    setCurrentIndex(index);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Certificatecontainer",
        // markers:true,
        scroller: "#contentcontainer",
        start: "top center",
      },
    });
    tl.fromTo(
      ".Certificatecontainer",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  });

  return (
    <div className="h-full w-full flex gap-2 xs:flex-col md:flex-row justify-center items-center overflow-hidden">
      <div
        ref={(el) => (boxRefs.current[prevIndex] = el)}
        className="xs:h-1/3 xs:w-full md:h-full md:w-1/3  flex justify-center items-center scale-75 "
      >
        <img
          className=" max-h-full h-auto w-auto rounded-xl cursor-pointer opacity-50 "
          src={certificateList[prevIndex]}
          alt={`Certificate ${prevIndex + 1}`}
          onMouseEnter={() => setAutoUpdate(false)}
          onMouseLeave={() => setAutoUpdate(true)}
          onClick={() => navigateToIndex(prevIndex)}
        />
      </div>
      <div
        ref={(el) => (boxRefs.current[currentIndex] = el)}
        className="xs:h-1/3 xs:w-full md:h-full md:w-1/3  flex justify-center items-center"
      >
        <img
          className="max-h-full h-auto w-auto rounded-xl  "
          src={certificateList[currentIndex]}
          alt={`Certificate ${currentIndex + 1}`}
          onMouseEnter={() => setAutoUpdate(false)}
          onMouseLeave={() => setAutoUpdate(true)}
          onClick={() => navigateToIndex(currentIndex)}
        />
      </div>
      <div
        ref={(el) => (boxRefs.current[nextIndex] = el)}
        className="xs:h-1/3 xs:w-full md:h-full md:w-1/3  flex justify-center items-center scale-75"
      >
        <img
          className="max-h-full h-auto w-auto rounded-xl cursor-pointer opacity-50  "
          src={certificateList[nextIndex]}
          alt={`Certificate ${nextIndex + 1}`}
          onMouseEnter={() => setAutoUpdate(false)}
          onMouseLeave={() => setAutoUpdate(true)}
          onClick={() => navigateToIndex(nextIndex)}
        />
      </div>
    </div>
  );
}

export default Certification;
