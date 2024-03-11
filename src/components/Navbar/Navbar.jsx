import { useState } from "react";
import { navOptions } from "data/navOptions";
import styles from "./Navbar.module.scss";
import { Squeeze as Hamburger } from "hamburger-react";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setOpen(!isOpen);
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
                onClick={toggleMenu}
                href={option.path}
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navButton} onClick={toggleMenu}>
        <Hamburger
          size={20}
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
