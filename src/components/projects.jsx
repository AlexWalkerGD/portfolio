import { useEffect, useState } from "react";

const projectsData = {
  html: [
    {
      id: 1,
      title: "About Me",
      image: "/portfolio/projects-image/html.png",
      link: "https://alexwalkergd.github.io/AboutMe/",
    },
    {
      id: 2,
      title: "Form",
      image: "/portfolio/projects-image/html1.png",
      link: "https://alexwalkergd.github.io/Form/",
    },
    {
      id: 3,
      title: "Landing Page",
      image: "/portfolio/projects-image/html2.png",
      link: "https://alexwalkergd.github.io/LandingPage/",
    },
  ],
  js: [
    {
      id: 1,
      title: "Profile",
      image: "/portfolio/projects-image/js.png",
      link: "https://alexwalkergd.github.io/Profile-Project/",
    },
    {
      id: 2,
      title: "Contact Book",
      image: "/portfolio/projects-image/js1.png",
      link: "https://alexwalkergd.github.io/Contact-book/",
    },
    {
      id: 3,
      title: "Mini Chat",
      image: "/portfolio/projects-image/js2.png",
      link: "https://alexwalkergd.github.io/MiniChat/",
    },
    {
      id: 4,
      title: "Task List",
      image: "/portfolio/projects-image/js3.png",
      link: "https://alexwalkergd.github.io/TaskList/",
    },
    {
      id: 5,
      title: "Quiz",
      image: "/portfolio/projects-image/js4.png",
      link: "https://alexwalkergd.github.io/Quiz/",
    },
    {
      id: 6,
      title: "Calculator",
      image: "/portfolio/projects-image/js5.png",
      link: "https://alexwalkergd.github.io/Calculator/",
    },
  ],
  react: [
    {
      id: 1,
      title: "Find Any Film",
      image: "/portfolio/projects-image/react.png",
      link: "https://alexwalkergd.github.io/FindAnyFilm/",
    },
    {
      id: 2,
      title: "Weather App",
      image: "/portfolio/projects-image/react1.png",
      link: "https://alexwalkergd.github.io/weather-app/",
    },
    {
      id: 3,
      title: "Mini Pokedex",
      image: "/portfolio/projects-image/react2.png",
      link: "https://alexwalkergd.github.io/mini-pokedex/",
    },
    {
      id: 4,
      title: "Github Finder",
      image: "/portfolio/projects-image/react3.png",
      link: "https://alexwalkergd.github.io/github-finder/",
    },
    {
      id: 5,
      title: "Notes App",
      image: "/portfolio/projects-image/react4.png",
      link: "https://notes-app-psi-ten.vercel.app/",
    },
  ],
  next: [
    {
      id: 1,
      title: "Barbershop",
      image: "/portfolio/projects-image/next.png",
      link: "https://barbershop-project-dfvoh1ycv-alex-pedrosos-projects.vercel.app/",
    },
  ],
};

export default function Projects({ selectedSkill }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const filtered = projectsData[selectedSkill] || [];

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateTouchDevice = (event) => {
      setIsTouchDevice(event.matches);
    };

    setIsTouchDevice(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateTouchDevice);

      return () => mediaQuery.removeEventListener("change", updateTouchDevice);
    }

    mediaQuery.addListener(updateTouchDevice);

    return () => mediaQuery.removeListener(updateTouchDevice);
  }, []);

  useEffect(() => {
    setActiveProjectId(null);
  }, [selectedSkill, isTouchDevice]);

  return (
    <>
      {" "}
      {filtered && (
        <div
          className={` grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-10 transition-opacity duration-500 ${
            filtered ? "opacity-100" : "opacity-0"
          }`}
        >
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => {
                if (!isTouchDevice) return;
                setActiveProjectId((currentId) =>
                  currentId === proj.id ? null : proj.id,
                );
              }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  isTouchDevice && activeProjectId === proj.id
                    ? "scale-105"
                    : "group-hover:scale-105"
                }`}
              />

              <div
                className={`
                      absolute inset-0 
                      bg-black/70 
                      flex items-center justify-center 
                      ${
                        isTouchDevice
                          ? activeProjectId === proj.id
                            ? "translate-y-0"
                            : "translate-y-[-100%]"
                          : "translate-y-[-100%] group-hover:translate-y-0"
                      }
                      transition-all duration-500
                    `}
              >
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    window.open(proj.link, "_blank");
                  }}
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
    </>
  );
}
