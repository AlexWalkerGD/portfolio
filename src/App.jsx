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

function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <div className="flex ">
          <div>
            <h4 className="border py-2 mx-112 mt-14 font-medium text-center bg-gradient-to-r from-indigo-950 via-purple-900 to-purple-950">
              Welcome to my Portfolio
            </h4>
            <h1 className=" text-5xl text-center pt-6 font-semibold">
              Hi I'm Web developer
            </h1>
            <h1 className=" text-5xl text-center font-semibold"> FullStack</h1>
            <p className=" text-center p-10 mx-15">
              Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="flex pb-9 pl-5">
              <h4 className="pl-10 font-semibold">Let's connect</h4>
              <button className="pl-2 cursor-pointer">
                <IoArrowForwardCircleOutline size={22} />
              </button>
            </div>
          </div>
          <img src="/imag.png" alt="logo" width={500} className="mr-60" />
        </div>
        <div className="gap-10 bg-[rgb(12,12,12)] mt-0 mx-10 rounded-3xl flex flex-col">
          <h1 className="text-2xl font-medium text-center pt-5">Skills</h1>
          <p className="text-center text-neutral-400 px-20">
            Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    </div>
  );
}

export default App;
