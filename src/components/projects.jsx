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

export default function Projects({ selectedSkill }) {
  const filtered = projectsData[selectedSkill] || [];

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
    </>
  );
}
