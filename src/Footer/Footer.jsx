import styles from "./Footer.module.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footerContainer}>
        <h4>Daria Paulina Grabowska - all rights reserved, 2024</h4>

        <div className={styles.footerLinksContainer}>
          <a className={styles.footerLink} href="google.com">
            <BsLinkedin />
          </a>
          <a className={styles.footerLink} href="google.com">
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
