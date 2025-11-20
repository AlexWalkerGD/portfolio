import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="w-full bg-black text-gray-100 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <img src="/logon.png" alt="Logo" className="w-24" />

        {/* Menu */}
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

        {/* Social Icons */}
        <div className="hidden md:flex gap-4 text-xl">
          <FaInstagram className="cursor-pointer hover:text-purple-400 transition" />
          <FaGithub className="cursor-pointer hover:text-purple-400 transition" />
          <FaLinkedin className="cursor-pointer hover:text-purple-400 transition" />
        </div>

        {/* Button */}
        <button className="hidden md:block border-2 px-4 py-2 rounded-xl hover:bg-purple-600 transition cursor-pointer">
          Let's Connect
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
