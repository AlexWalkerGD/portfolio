import "./App.css";
import logo from "/imag.png";
import { TiHtml5 } from "react-icons/ti";
import { RiJavascriptFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import Projects from "./components/projects";
import NavBar from "./components/navBar";
import { useState } from "react";

function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const projectsData = {
    html: [
      {
        id: 1,
        title: "About Me",
        image: "/projects-image/html.png",
        link: "https://alexwalkergd.github.io/AboutMe/",
      },
      {
        id: 2,
        title: "Form",
        image: "/projects-image/html1.png",
        link: "https://alexwalkergd.github.io/Form/",
      },
      {
        id: 3,
        title: "Landing Page",
        image: "/projects-image/html2.png",
        link: "https://alexwalkergd.github.io/LandingPage/",
      },
    ],
    js: [
      {
        id: 1,
        title: "Profile",
        image: "/projects-image/js.png",
        link: "https://alexwalkergd.github.io/Profile-Project/",
      },
      {
        id: 2,
        title: "Contact Book",
        image: "/projects-image/js1.png",
        link: "https://alexwalkergd.github.io/Contact-book/",
      },
      {
        id: 3,
        title: "Mini Chat",
        image: "/projects-image/js2.png",
        link: "https://alexwalkergd.github.io/MiniChat/",
      },
      {
        id: 4,
        title: "Task List",
        image: "/projects-image/js3.png",
        link: "https://alexwalkergd.github.io/TaskList/",
      },
      {
        id: 5,
        title: "Quiz",
        image: "/projects-image/js4.png",
        link: "https://alexwalkergd.github.io/Quiz/",
      },
      {
        id: 6,
        title: "Calculator",
        image: "/projects-image/js5.png",
        link: "https://alexwalkergd.github.io/Calculator/",
      },
    ],
    react: [
      {
        id: 1,
        title: "Find Any Film",
        image: "/projects-image/react.png",
        link: "https://alexwalkergd.github.io/FindAnyFilm/",
      },
      {
        id: 2,
        title: "Weather App",
        image: "/projects-image/react1.png",
        link: "https://alexwalkergd.github.io/weather-app/",
      },
      {
        id: 3,
        title: "Mini Pokedex",
        image: "/projects-image/react2.png",
        link: "https://alexwalkergd.github.io/mini-pokedex/",
      },
      {
        id: 4,
        title: "Github Finder",
        image: "/projects-image/react3.png",
        link: "https://alexwalkergd.github.io/github-finder/",
      },
    ],
    next: [
      {
        id: 1,
        title: "Barbershop",
        image: "/projects-image/next.png",
        link: "https://barbershop-project-dfvoh1ycv-alex-pedrosos-projects.vercel.app/",
      },
    ],
  };

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
          <img src={logo} alt="logo" width={500} className="mr-60" />
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
          {selectedSkill && (
            <div
              className={` grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-10 transition-opacity duration-500 ${
                selectedSkill ? "opacity-100" : "opacity-0"
              }`}
            >
              {projectsData[selectedSkill].map((proj) => (
                <div
                  key={proj.id}
                  className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div
                    className="
                      absolute inset-0 
                      bg-black/70 
                      flex items-center justify-center 
                      translate-y-[-100%]
                      group-hover:translate-y-0
                      transition-all duration-500
                    "
                  >
                    <button
                      onClick={() => window.open(proj.link, "_blank")}
                      className="cursor-pointer px-4 py-2 bg-purple-700 hover:bg-purple-800 rounded-lg font-medium text-white"
                    >
                      View
                    </button>
                  </div>

                  <h3 className="text-center font-medium p-2">{proj.title}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
