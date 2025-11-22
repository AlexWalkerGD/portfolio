import "./App.css";

import { TiHtml5 } from "react-icons/ti";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { useState, useEffect } from "react";

import NavBar from "./components/navBar";
import Certifications from "./components/certifications";
import Loader from "./components/loader";
import ContactSection from "./components/contactSection";
import Projects from "./components/projects";
import Modal from "./components/modal";

function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full font-[Poppins]">
      <NavBar />
      <div className="bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat h-screen text-amber-50 ">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
          <div>
            <h4 className="py-2 mt-14 text-center md:text-center mx-auto max-w-xl font-medium bg-gradient-to-r from-indigo-950 via-purple-900 to-purple-950">
              Welcome to my Portfolio
            </h4>
            <h1 className=" text-5xl text-center pt-6 font-semibold">
              Hi I'm Web developer
            </h1>
            <h1 className=" text-5xl text-center font-semibold"> Front-End</h1>
            <p className="text-center md:text-left p-6 max-w-2xl mx-auto">
              Focused on building scalable digital products that combine
              performance, design, and user experience. I develop fast, modern,
              and UI-driven applications using React, Tailwind, and solid
              component architecture, always prioritizing clean, intuitive, and
              maintainable code. I have experience turning ideas into functional
              and efficient interfaces, consistently delivering solutions that
              are not only visually refined but also optimized, reusable, and
              built to scale. I work with attention to detail, strong
              development standards, and a product-oriented mindset. I’m
              constantly evolving toward becoming a full-stack developer,
              expanding my knowledge in APIs, databases, advanced integrations,
              security, and scalability—all with the goal of creating robust,
              end-to-end systems ready for the real market and adaptable to
              multiple clients with distinct needs. I also focus on building
              applications that can be easily customized and sold in scale,
              leveraging my solid UI/UX understanding, fast learning ability,
              and curiosity for new technologies to deliver consistent and
              professional results.
            </p>
            <div className="flex pb-9 pl-5">
              <h4 className="pl-10 font-semibold">Let's connect</h4>
              <button
                onClick={() => setOpenModal(true)}
                className="pl-2 cursor-pointer"
              >
                <IoArrowForwardCircleOutline size={22} />
              </button>
            </div>
          </div>
          <img
            src="%PUBLIC_URL%/imag.png"
            alt="logo"
            className="w-64 md:w-[450px] lg:w-[500px] mx-auto md:mx-0"
          />
        </div>
        <div className="gap-10 bg-[rgb(12,12,12)] mt-0 mx-10 rounded-3xl flex flex-col">
          <h1 className="text-2xl font-medium text-center pt-5">Skills</h1>
          <p className="text-center text-neutral-400 px-20">
            My skills were developed through self-learning and hands-on
            experience, shaped by building practical and diverse projects. I
            have strong knowledge of HTML, CSS, JavaScript, and TypeScript, and
            I use React, Tailwind, Axios, and React Router to build efficient,
            fluid, high-performance interfaces.
          </p>

          <ul className="flex justify-center gap-5 rounded-xl pb-10">
            <li
              className="flex cursor-pointer hover:scale-105 transition-transform items-center justify-center p-2 rounded-full transition-transform duration-300"
              style={{
                boxShadow: `0 0 15px #F06529`,
              }}
              onClick={() => setSelectedSkill("html")}
            >
              <TiHtml5 size={35} />
            </li>
            <li
              className="flex cursor-pointer hover:scale-105 transition-transform items-center justify-center p-2 rounded-full transition-transform duration-300"
              style={{
                boxShadow: `0 0 15px #FFA500`,
              }}
              onClick={() => setSelectedSkill("js")}
            >
              <RiJavascriptFill size={35} />
            </li>
            <li
              className="flex cursor-pointer hover:scale-105 transition-transform items-center justify-center p-2 rounded-full transition-transform duration-300"
              style={{
                boxShadow: `0 0 15px #00b7ffff`,
              }}
              onClick={() => setSelectedSkill("react")}
            >
              <FaReact size={35} />
            </li>
            <li
              className="flex cursor-pointer hover:scale-105 transition-transform items-center justify-center p-2 rounded-full transition-transform duration-300"
              style={{
                boxShadow: `0 0 15px #228b22`,
              }}
              onClick={() => setSelectedSkill("next")}
            >
              <RiNextjsFill size={35} />
            </li>
          </ul>
          <Projects selectedSkill={selectedSkill} />
        </div>
        <div className="w-full font-[Poppins]">
          <Certifications /> {/* <-- coloque aqui */}
          <ContactSection />
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default App;
