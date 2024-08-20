import React from "react";
import styles from "./path.module.scss";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function Path({ path, currentPage, link, icon, nextPage }) {
  return (
    <div className={styles.main}>
      <div className={styles.buttons}>
        <NavLink className={styles.link} to="/">
          {path}
        </NavLink>
        <p className={styles.ArrowIcon}>
          <IoIosArrowForward />
        </p>
        <NavLink className={styles.link} to={link}>
          {currentPage}
        </NavLink>
        <p className={styles.ArrowIcon} >{icon}</p>
        <NavLink className={styles.link}>{nextPage}</NavLink>
      </div>
    </div>
  );
}
