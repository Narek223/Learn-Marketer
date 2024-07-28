import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { FaAlignJustify } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import logo from "../../../public/assets/logo/logo.png";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleShowNavBar = () => {
    setShow(!show);
  };

  const handleResize = () => {
    if (window.innerWidth > 1000 && show) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [show]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p className={styles.MenuIcon} onClick={handleShowNavBar}>
          {!show ? <FaAlignJustify /> : <MdClear />}
        </p>
        <div className={styles.image}>
          <img src={logo} alt="logo" />
        </div>
        <nav className={show ? styles.openNav : styles.nav}>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
          <NavLink className={styles.link} to="/About">
            About
          </NavLink>
          <NavLink className={styles.link} to="/Course">
            Course
          </NavLink>
          <NavLink className={styles.link} to="/Blog">
            Blog
          </NavLink>
          <NavLink className={styles.link} to="/Contact">
            Contact
          </NavLink>
        </nav>
        <div className={styles.changeLanguage}>
          <p>EN</p>
        </div>
      </div>
    </header>
  );
}
