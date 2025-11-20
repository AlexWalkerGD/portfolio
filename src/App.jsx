import "./App.css";
import logo from "/logo.png";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import Projects from "./components/projects";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="w-full font-[Poppins] ">
      <NavBar />
      <div className="bg-[rgb(8,8,8)] text-amber-50 ">
        <div className="flex">
          <div className="content">
            <h4 className="border px-4 py-2 mx-48 mt-14 font-medium text-center bg-gradient-to-r from-indigo-950 via-purple-900 to-purple-950">
              Welcome to my Portfolio
            </h4>
            <h1 className=" text-5xl text-center pt-6 font-semibold">
              Hi I'm Web developer
            </h1>
            <h1 className=" text-5xl text-center font-semibold"> FullStack</h1>
            <p className=" text-center p-10">
              Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="flex">
              <h4 className="pl-10 font-semibold">Let's connect</h4>
              <button className="pl-2">
                <IoArrowForwardCircleOutline size={22} />
              </button>
            </div>
          </div>
          <img src={logo} alt="logo" height={150} width={150} />
        </div>
        <div className="">
          <Projects Icon={TiHtml5} itemHover="#00b7ffff" />
          <Projects Icon={FaReact} itemHover="#00b7ffff" />
        </div>
      </div>
    </div>
  );
}

export default App;
