import { nanoid } from "nanoid";
import styles from "./ProjectItem.module.scss";

const ProjectItem = ({ item }) => {
  return (
    <li key={nanoid()}>
      <div className={styles.projectItem}>
        {item.isNew && <div className={styles.newProjectTag}></div>}
        <a href={item.url} target="blank">
          <h2>{item.name}</h2>
        </a>
        {item.isNew && <p>(new)</p>}
      </div>
    </li>
  );
};

export default ProjectItem;
