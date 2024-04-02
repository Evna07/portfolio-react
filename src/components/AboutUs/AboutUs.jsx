import clsx from "clsx";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section id="aboutUs" className={styles.aboutUsContainer}>
      <div className={clsx("container")}>
        <div className={styles.profileAvatar}>
          <img
            className={styles.profilePicture}
            src="https://avatars.githubusercontent.com/u/85988106?v=4"
            alt="My person"
          />
        </div>
        <h1 className={styles.aboutUsTitle}>My name is Daria Paulina</h1>
        <div className={styles.aboutUsDescription}>
          <p>
            I am an energetic and detail-oriented IT student looking for a job
            in a company where I could use my skills in solving complex
            problems, assisting in the timely implementation of projects, and
            creating documentation.
          </p>
          <p>
            I'm currently enrolled in IT (Frontend Developer) University classes
            and work on my personal projects, as well as building from grounds
            up a project for book shop application backed with database info.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
