import { nanoid } from "nanoid";
import styles from "./ProjectItem.module.scss";

const ProjectItem = ({ item }) => {
  return (
    <li key={nanoid()}>
      <div className={styles.projectItem}>
        {item.isNew && <div className={styles.newProjectTag}></div>}
        <h2>{item.name}</h2>
        {item.isNew && <p>(new)</p>}
      </div>
      {/* TODO: after hovering over item make it bigger and display iframe */}
      {/* <div>
        <iframe
          src="about:blank"
          frameborder="0"
          className={styles.projectItem}
        ></iframe>
      </div> */}
    </li>
  );
};

export default ProjectItem;

// {
//   /* <li key={nanoid()}>
//       <iframe
//         src={"about:blank"}
//         frameborder="0"
//         title={item.name}
//         className={styles.projectItem}
//       >
//         {item.isNew && <div className={styles.newProjectTag}></div>}
//         {item.isNew && <p>(new)</p>}
//       </iframe>
//     </li> */
// }
