import { useState } from "react";
import { navOptions } from "data/navOptions";
import styles from "./Navbar.module.scss";
import { TfiClose } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }
  };

  return (
    <nav className={styles.navBar}>
      <p className={styles.navName}>Daria P Grabowska</p>
      <div className={clsx(styles.menu, showMenu && styles.showMenu)}>
        <ul className={styles.navList}>
          {navOptions.map((option) => (
            <li className={styles.navListItem} key={uuidv4()}>
              <a
                className={clsx(
                  styles.navOption,
                  option.isScroll ? styles.enabledLink : styles.disabledLink
                )}
                onClick={closeMenuOnMobile}
                href={option.path}
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navButton} onClick={toggleMenu}>
        {showMenu ? <TfiClose /> : <CiMenuBurger />}
      </div>
    </nav>
  );
};

export default Navbar;
