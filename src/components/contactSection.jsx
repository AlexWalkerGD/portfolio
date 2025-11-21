import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function ContactSection() {
  return (
    <div className="w-full  text-white py-20 px-6" id="contact">
      <h2 className="text-center text-3xl font-semibold mb-6 text-white text-transparent bg-clip-text">
        Contact Me
      </h2>

      <p className="text-center text-neutral-400 max-w-2xl mx-auto mb-12">
        Let's build something amazing together. Whether it's a freelance
        project, job opportunity or collaboration, feel free to reach out!
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* FORM */}
        <form className="bg-black/40 backdrop-blur-lg p-6 rounded-2xl border border-purple-900 shadow-[0_0_25px_#6d28d9] flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black/60 border border-purple-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-black/60 border border-purple-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="bg-black/60 border border-purple-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-700 to-fuchsia-700 text-white font-semibold py-3 rounded-lg hover:shadow-[0_0_20px_#9333ea] transition-all"
          >
            Send Message
          </button>
        </form>

        {/* SOCIALS */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-2">Connect with me</h3>
            <p className="text-neutral-400">
              I'm always available on my socials
            </p>
          </div>

          <div className="flex gap-6 text-3xl">
            <a
              href="alexwalkerson@hotmail.com"
              className="hover:scale-110 text-purple-400 transition-transform"
            >
              <HiOutlineMail />
            </a>

            <a
              href="https://github.com/AlexWalkerGD"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 text-purple-400 transition-transform"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/alex-walkergd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 text-purple-400 transition-transform"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/alexwalkergd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 text-purple-400 transition-transform"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
