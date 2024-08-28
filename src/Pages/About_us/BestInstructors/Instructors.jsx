import React from "react";
import styles from "./instructors.module.scss";
import InstructorsCard from "./InstructorsCard"
import { instructors } from "../../../Services/Data/About_Us/Instructors/InstructorsData";



export default function Instructors() {


  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Meet Our Best Instructors</h1>
        <p>
          At LearnMarketerAt our success is driven by a dedicated team of
          experienced professionals who are passionate about digital marketing
          and committed to your learning journey.
        </p>
      </div>
      <div className={styles.mainTwo} >
        {instructors.map((elem) => (
           <InstructorsCard key={elem.id} data={elem} />
        ))}
        </div>
    </div>
  );
}
