import clsx from "clsx";
import styles from "./Container.module.scss";

const Container = () => {
  return (
    <section id="home">
      <div className={styles.homeBackground}>
        <div className={styles.homeLanding}>
          <div className={clsx("container")}>
            <h1 className={styles.homeTitle}>
              I design and create web applications. Simple, yet elegant
            </h1>
            <h3>Welcome to my domain</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
