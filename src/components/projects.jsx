import Project from "./project";

const Projetos = ({ Icon, iconColor = "#FFA500", size = 60 }) => {
  return (
    <div className="flex items-center gap-5 p-5 rounded-xl">
      {/* Ícone */}
      <div
        className="flex items-center justify-center p-5 rounded-full transition-transform duration-300"
        style={{
          boxShadow: `0 0 15px ${iconColor}`,
        }}
      >
        <Icon size={size} color={iconColor} />
      </div>

      {/* Lista */}
      <ul className="custom-scroll flex gap-4 overflow-x-auto pb-3 scroll-smooth">
        {[1, 2, 3, 4].map((n) => (
          <li
            key={n}
            className="flex items-center justify-center flex-none w-[350px] p-4 rounded-lg transition-transform duration-200 cursor-pointer"
          >
            <Project />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projetos;
