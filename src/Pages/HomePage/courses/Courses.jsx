import React from "react";
import styles from "./cours.module.scss";
import CourseCard from "./CourseCard.jsx";
import { dataCourse } from "../../../Services/Data/Course/CourseData.jsx";



export default function Courses() {
  return (
    <div className={styles.featuredCoursesContainer}>

        <h1 className={styles.featuredCoursesTitle}>
          Featured<span> Courses</span>
        </h1>
        <p className={styles.featuredCoursesDescription}>
          Explore our top-rated courses designed to equip you with the skills
          and knowledge needed to excel in the  digital marketing
          landscape.
        </p>
        <div className={styles.cardsBox}>
          {dataCourse.map((elem) => (
            <CourseCard key={elem.id} data={elem} />
          ))}
          
        </div>
    </div>
  );
}
