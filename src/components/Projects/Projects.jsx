import clsx from "clsx";
import styles from "./Projects.module.scss";
import { projectItems } from "data/projectItems";
import ProjectItem from "./Project/ProjectItem";
import { nanoid } from "nanoid";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <div className={clsx("container", styles.projectsWrapper)}>
        <h1 className={styles.projectTitle}>
          Here you can check out my latest projects
        </h1>
        <ul className={styles.projectList}>
          {projectItems.map((item) => (
            <ProjectItem key={nanoid()} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

// <section id="projects" className={styles.projectsContainer}>
//   <div className={clsx("container", styles.projectsWrapper)}>
//     <h2 className={styles.projectTitle}>
//       Here you can check out my latest projects
//     </h2>
//     <ul className={styles.projectList}>
//       {projectItems.map((item) => (
//         <ProjectItem key={nanoid()} item={item} />
//       ))}
//     </ul>
//   </div>
// </section>
