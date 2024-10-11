import React, { useState } from "react";
import { ExternalLink } from "react-external-link";
import { useRecoilState } from "recoil";
import { NavState } from "../../Atoms/atoms";
import { ImLinkedin } from "react-icons/im";
import { FaSquareGithub } from "react-icons/fa6";
import { ImMail } from "react-icons/im";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contact() {
  const [activeLink, setActiveLink] = useRecoilState(NavState);
  function handleActive(id) {
    setActiveLink(id);
  }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = async (data, e) => {
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_jjpiu7a", // Replace with your EmailJS service ID
        "template_kflt5rq", // Replace with your EmailJS template ID
        {
          name: data.user_name,
          email: data.user_email,
          message: data.message,
        },
        "A4mzb36nfjQshXKDV" // Replace with your EmailJS user ID (public key)
      );

      toast.success("Message sent!");
      console.log(result.text);
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
      console.error(error.text);
    }

    setIsSubmitting(false);
    e.target.reset();
    reset();
    console.log(data);
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Contactcontainer",
        scroller: "#contentcontainer",
        start: "top center+=100",
      },
    });
    tl.fromTo(
      ".Contactcontainer",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1 }
    );
    tl.fromTo(
      ".iconset1",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    );
    tl.fromTo(
      ".iconpc",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
    );
    tl.fromTo(".icontext1", { x: -100, opacity: 0 }, { x: 0, opacity: 1 });
    tl.fromTo(".icontext2", { x: 100, opacity: 0 }, { x: 0, opacity: 1 });
    tl.fromTo(".form", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
  });
  return (
    <div className="h-full w-full  text-white flex flex-col justify-center items-center gap-2 xs:text-sm md:text-md lg:text-xl p-5 overflow-hidden">
      <div className="h-fit w-full  justify-center items-center flex font-mateSc text-2xl text-white">
        <h1>Contact Me In</h1>
      </div>

      <div className="h-fit w-full flex-col flex justify-center items-center gap-5 font-mono ">
        <div className="iconset1 flex flex-col justify-center items-center gap-2 ">
          <ImMail size={35} color="white"></ImMail>
          <h1 className="icontext1">akilrajn1153@gmail.com</h1>
        </div>
        <div className="iconset1 flex flex-col justify-center items-center gap-2 ">
          <FaSquarePhone size={40} color="white"></FaSquarePhone>
          <h1 className="icontext2">+91 98408 99656</h1>
        </div>
      </div>



      <div className="h-fit w-full flex justify-center items-center">
        <div className="flex w-full justify-center gap-12   ">
          <SocialIcon
            url="https://www.linkedin.com/in/akilrajn1153"
            icon={<ImLinkedin size={35} />}
          />
          <SocialIcon
            url="https://github.com/Akilraj-1153"
            icon={<FaSquareGithub size={40} />}
          />
          <SocialIcon
            url="https://wa.me/919840899656"
            icon={<FaSquareWhatsapp size={40} />}
          />
        </div>
      </div>

      

      <div className="form p-5 rounded-xl w-full max-w-md bg-black/30 text-white font-mateSc overflow-scroll ">
        <form
          onSubmit={handleSubmit(sendEmail)}
          className="flex flex-col gap-2"
        >
          <label className="namelabel">Name</label>
          <input
            className="p-2 nameip rounded-lg h-10 text-black font-sans outline-none"
            type="text"
            {...register("user_name", { required: true })}
          />
          {errors.user_name && <span className="error">Name is required</span>}

          <label className="emaillabel">Email</label>
          <input
            className="p-2 emailip rounded-lg h-10 font-sans text-black outline-none"
            type="email"
            {...register("user_email", { required: true })}
          />
          {errors.user_email && (
            <span className="error">Email is required</span>
          )}

          <label className="textlabel">Message</label>
          <textarea
            className="p-2 textip rounded-lg font-sans h-20 text-black outline-none resize-none"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && <span className="error">Message is required</span>}

          <input
            className="p-2 submitbtn rounded-lg h-10 bg-blue-500 mt-2 outline-none"
            type="submit"
            value="Send"
            disabled={isSubmitting}
          />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

function SocialIcon({ url, icon }) {
  return (
    <ExternalLink href={url}>
      <div className="iconpc z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center">
        {icon}
      </div>
    </ExternalLink>
  );
}

export default Contact;
