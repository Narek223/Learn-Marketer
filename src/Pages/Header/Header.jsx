import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { FaAlignJustify } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import logo from "../../assets/logo/mobile-logo.png"
import { useLocation } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  const ref=useRef()
  const { pathname } = useLocation();

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  const handleShowNavBar = () => {
    setShow(!show);
  };

  const handleResize = () => {
    if (window.innerWidth > 1000 && show) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [show]);

  useEffect(() => {
    let close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, [ref]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.MenuIcon} onClick={handleShowNavBar}>
          {!show ? <FaAlignJustify /> : <MdClear />}
        </div>
        <div className={styles.image}>
          <NavLink className={styles.link} to="/">
            <img src={logo} alt="logo" />
            </NavLink>
        </div>
        <nav className={show ? styles.openNav : styles.nav} ref={ref}>
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
