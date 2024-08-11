import React from "react";
import styles from "./coursepage.module.scss";
import imgone from '../../../../assets/Homepage_Images/CourseCard/Frame23.png'
import imgtwo from '../../../../assets/Homepage_Images/CourseCard/Frame_3.png'

import Contact from "./Contact/Contact";
import { NavLink, useParams } from "react-router-dom";
import Faqs from "./Faqs/NewFaqs";
import { IoIosArrowForward } from "react-icons/io";
import { courseData } from "./CourseData";

export default function CoursePage() {
  const { id } = useParams();
  const course = courseData.find((c) => c.id === parseInt(id));

  const {
    courseInfo: { description: courseDscription, title: courseTitle },
    KeyTopics: courseKeyTopics,
    details: courseDetails,
    CourseHighlights: CourseHighlights,
  } = course;

  return (
    <div className={styles.course}>
      <div className={styles.buttons}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <p>
          <IoIosArrowForward />
        </p>
        <NavLink to="/Course" className={styles.link}>
          Course
        </NavLink>
      </div>
      <div className={styles.first}>
        <h1>{courseTitle}</h1>
        <div>
          <div className={styles.main}>
            <img src={imgtwo} />
            <p>{courseDscription}</p>
          </div>
          <div className={styles.btnConteiner}>
            <div className={styles.buttons}>
              {courseDetails.map((elem) => (
                <button>{elem}</button>
              ))}
            </div>
          </div>
        </div>
      </div>



















      <Contact />
      <Faqs />
    </div>
  );
}
