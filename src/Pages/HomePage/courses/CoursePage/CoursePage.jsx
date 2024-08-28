import React from "react";
import styles from "./coursepage.module.scss";
import imgone from "../../../../assets/Homepage_Images/CourseCard/Frame23.png";
import imgtwo from "../../../../assets/Homepage_Images/CourseCard/Frame_3.png";
import Contact from "./Contact/Contact";
import { useParams } from "react-router-dom";
import Faqs from "./Faqs/NewFaqs";
import { dataCourse } from "../../../../Services/Data/Course/CourseData";

export default function CoursePage() {
  const { id } = useParams();
  const course = dataCourse.find((c) => c.id === parseInt(id));

  const {
    courseInfo: { description: courseDscription, title: courseTitle },
    KeyTopics: courseKeyTopics,
    details: courseDetails,
    CourseHighlights: CourseHighlights,
  } = course;

  return (
    <div className={styles.course}>
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

      <div className={styles.topics}>
        <div>
          <div className={styles.second}>
            <h1>Key Topics</h1>
            <ul>
              <li>Advanced Keyword Research </li>
              <li>On-Page and Off-Page SEO </li>
              <li>Technical SEO Optimization </li>
              <li> Link Building Strategies</li>
              <li>SEO Analytics and Reporting </li>
            </ul>
            <div className={styles.CourseHighlights}>
              <h1>Course Highlights</h1>
              <ul>
                <li>Expert-led tutorials </li>
                <li>Real-world SEO projects </li>
                <li>Access to SEO tools and resources </li>
                <li> Certification upon completion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.CurseImg}>
          <img src={imgone} />
        </div>
      </div>

      <Contact />
      <Faqs />
    </div>
  );
}
