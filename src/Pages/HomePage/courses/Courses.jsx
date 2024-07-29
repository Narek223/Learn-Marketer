import React from "react";
import styles from "./cours.module.scss";
import { courses } from "./coursData.js";
import CourseCard from "./CourseCard.jsx";
import CoursePage from "./CoursePage/CoursePage.jsx";
import { courseData } from "./CoursePage/CourseData.jsx";


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

          {courseData.map((elem) => (
            <CourseCard key={elem.id} data={elem} />
          ))}
          
        </div>
      </div>
    </div>
  );
}
