import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 
        bg-black/60 backdrop-blur-sm 
        flex items-center justify-center 
        z-50 text-white
      "
      onClick={onClose}
    >
      <div
        className="
          bg-[rgb(20,20,20)]
          border border-purple-700/40 
          rounded-2xl 
          p-10 
          w-[90%] md:w-[400px]
          shadow-[0_0_20px_rgba(168,85,247,0.5)]
          scale-95 animate-fadeIn
        "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center text-xl font-semibold text-purple-300 mb-6">
          Let's Connect
        </h2>

        <div className="flex flex-col gap-4">
          {/* EMAIL */}
          <a
            href="mailto:alexwalkergd@gmail.com"
            className="
              flex items-center gap-3 
              bg-purple-700/30 hover:bg-purple-700/50 
              px-4 py-3 rounded-xl 
              transition
            "
          >
            <FaEnvelope size={22} className="text-purple-400" />
            <span>Email me</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/AlexWalkerGD"
            target="_blank"
            className="
              flex items-center gap-3 
              bg-purple-700/30 hover:bg-purple-700/50 
              px-4 py-3 rounded-xl 
              transition
            "
          >
            <FaGithub size={22} className="text-purple-400" />
            <span>GitHub</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/alex-walkergd/"
            target="_blank"
            className="
              flex items-center gap-3 
              bg-purple-700/30 hover:bg-purple-700/50 
              px-4 py-3 rounded-xl 
              transition
            "
          >
            <FaLinkedin size={22} className="text-purple-400" />
            <span>LinkedIn</span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/alexwalkergd/"
            target="_blank"
            className="
              flex items-center gap-3 
              bg-purple-700/30 hover:bg-purple-700/50 
              px-4 py-3 rounded-xl 
              transition
            "
          >
            <FaInstagram size={22} className="text-purple-400" />
            <span>Instagram</span>
          </a>
        </div>

        <button
          onClick={onClose}
          className="cursor-pointer mt-8 w-full text-center py-2 rounded-xl border border-purple-600 hover:bg-purple-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
