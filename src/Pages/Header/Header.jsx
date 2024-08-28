import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { FaAlignJustify } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import logo from "../../assets/logo/mobile-logo.png";

export default function Header() {
  const [show, setShow] = useState(false);
  const ref = useRef();
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
    const close = (e) => {
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
          <NavLink
            className={({ isActive }) => 
              `${styles.link} ${isActive ? styles.active : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `${styles.link} ${isActive ? styles.active : ''}`
            }
            to="/About"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `${styles.link} ${isActive ? styles.active : ''}`
            }
            to="/Course"
          >
            Course
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `${styles.link} ${isActive ? styles.active : ''}`
            }
            to="/Blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              `${styles.link} ${isActive ? styles.active : ''}`
            }
            to="/Contact"
          >
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
