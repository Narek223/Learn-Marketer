import React from "react";
import styles from "./cours.module.scss";
import {courses,coursesTwo} from './coursData.js'

export default function Courses() {
  
  return (
    <div className={styles.main_2}>
      <div className={styles.title_2}>
        <h1>
          Featured<span> Courses</span>
        </h1>
        <p>
          Explore our top-rated courses designed to equip you with the skills
          and knowledge needed to excel in the <br /> digital marketing
          landscape.
        </p>
      </div>
      <div className={styles.main_3}>
        <div className={styles.pages}>
        {courses.map((elem) => (
            <div className={styles.one} key={elem.id}>
              <img src={elem.imgSrc} alt={elem.title} />
              <p>
                <span className={styles.span}>{elem.duration}</span>{" "}
                {elem.mode}
              </p>
              <h2>{elem.title}</h2>
              <p>{elem.description}</p>
              <h3>Read more...</h3>
            </div>
          ))}
        </div>

        <div className={styles.pages_3}>
        {coursesTwo.map((elem) => (
            <div className={styles.one} key={elem.id}>
              <img src={elem.imgSrc} alt={elem.title} />
              <p>
                <span className={styles.span}>{elem.duration}</span>{" "}
                {elem.mode}
              </p>
              <h2>{elem.title}</h2>
              <p>{elem.description}</p>
              <h3>Read more...</h3>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
