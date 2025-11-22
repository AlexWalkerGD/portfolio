import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

import Modal from "./modal";

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="w-full bg-black text-gray-100 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <img src="/portfolio/logon.png" alt="Logo" className="w-24" />

        {/* 
        
        <ul className="hidden md:flex gap-10 font-light">
          <li className="cursor-pointer hover:text-purple-400 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-purple-400 transition">
            Skills
          </li>
          <li className="cursor-pointer hover:text-purple-400 transition">
            Projects
          </li>
        </ul>
        
        
        Menu */}

        <div className="flex gap-12 items-center">
          {/* Social Icons */}
          <div className="hidden md:flex gap-4 text-xl">
            <a href="https://www.instagram.com/alexwalkergd/" target="_blank">
              <FaInstagram className="cursor-pointer hover:text-purple-400 transition" />
            </a>
            <a href="https://github.com/AlexWalkerGD" target="_blank">
              <FaGithub className="cursor-pointer hover:text-purple-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/alex-walkergd/"
              target="_blank"
            >
              <FaLinkedin className="cursor-pointer hover:text-purple-400 transition" />
            </a>
          </div>

          {/* Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="hidden md:block border-2 px-4 py-2 rounded-xl hover:bg-purple-600 transition cursor-pointer"
          >
            Let's Connect
          </button>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </nav>
  );
};

export default NavBar;
