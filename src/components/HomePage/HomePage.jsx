import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.backgroundContainer}>
        <div className="container">
          <div className={styles.homeIntro}>
            <h1 className={styles.homepageTitle}>
              I design and create web applications. Simple, yet elegant
            </h1>
            <h3>Welcome to my domain</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
