import clsx from "clsx";
import styles from "./Container.module.scss";

const Container = () => {
  return (
    <section>
      <div className={styles.homeBackground}>
        <div className={clsx("container")}>
          <h1 className={styles.homeTitle}>
            I design and create web applications. Simple, yet elegant
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Container;
