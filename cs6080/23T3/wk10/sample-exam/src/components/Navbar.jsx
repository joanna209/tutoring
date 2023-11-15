import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { link } from "../utils/Links";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <Link to="/">
      <img src="/favicon.ico" alt="logo" className={styles.logo}></img>
      </Link>
      <div className={styles.link}>
        {link.map((l) => (
          <Link to={l.link} key={l.name}>
            {l.name}
          </Link>
        ))}
      </div>
      <div className={styles.mobile}>
        {link.map((l) => (
          <Link to={l.link} key={l.name}>
            {l.letter}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
