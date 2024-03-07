import clsx from "clsx";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section id="aboutUs" className={styles.aboutUsContainer}>
      <div className={clsx("container")}>
        <h2>My name is Daria...</h2>
        <p>
          I am an energetic and detail-oriented IT student looking for a job in
          a company where I could use my skills in solving complex problems,
          assisting in the timely implementation of projects, and creating
          documentation.
        </p>
        <p>
          I'm currently enrolled in IT (Frontend Developer) University Course
          and work on my personal projects, as well as building from grounds up
          a project for book shop application backed with database info.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
