import clsx from "clsx";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={clsx(".container", styles.footerContainer)}>
        <h4>Daria Paulina Grabowska - all rights reserved, 2024</h4>
      </div>
    </footer>
  );
};

export default Footer;
