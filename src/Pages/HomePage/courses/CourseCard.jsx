import React from 'react'
import styles from "./cours.module.scss";
import { NavLink } from "react-router-dom";

export default function CourseCard({img,title,duration,id,mode,description}) {

  return (
    <div className={styles.one} key={id}>
      <div className={styles.image}>
              <img src={img} alt={title} />
              </div>
              <p>
                <span className={styles.span}>{duration}</span>
                {mode}
              </p>
              <h2>{title}</h2>
              <p>{description}</p>
              <NavLink
              to='/Course/Contact'
                className={styles.link}
              >
                   <h3>Read more...</h3>
              </NavLink>
            </div>
  )
}
