import React from "react";
import styles from "./cours.module.scss";
import { NavLink } from "react-router-dom";

export default function CourseCard({ data }) {
  return (
    <div className={styles.one}>
       <NavLink to={`/Course/${data.id}`} className={styles.link}>
      <div className={styles.image}>
        <img src={data.info.imgSrc} alt={data.title} />
      </div>
      {/* <p>
        <span className={styles.span}>{data.details[0]}</span>
        {data.details[data.details.length -1]}
      </p> */}
      <div className={styles.infoBox}>
        <div className={styles.duration}>
        <p>{data.details[0]}</p>
        </div>
        <div className={styles.format}>
        {data.details[data.details.length -1]}
        </div>
      </div>
      <h2>{data.courseInfo.title}</h2>
      <p className={styles.cardDescription}>{data.info.description}</p>
     
        <h3>Read more...</h3>
      </NavLink>
    </div>
  );
}
