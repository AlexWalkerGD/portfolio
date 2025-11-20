import Project from "./project";
import styles from "./projects.module.css";

const Projetos = ({
  Icon, // ícone principal
  iconColor = "#FFA500",
  itemHover = "#FFA500",
  size = 60,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <Icon size={size} color={iconColor} />
      </div>
      <ul className={styles.list}>
        <li
          className={styles.item}
          style={{
            boxShadow: itemHover,
          }}
        >
          <Project />
        </li>
        <li
          className={styles.item}
          style={{
            boxShadow: itemHover,
          }}
        >
          <Project />
        </li>
        <li
          className={styles.item}
          style={{
            boxShadow: itemHover,
          }}
        >
          <Project />
        </li>
        <li
          className={styles.item}
          style={{
            boxShadow: itemHover,
          }}
        >
          <Project />
        </li>
      </ul>
    </div>
  );
};

export default Projetos;
