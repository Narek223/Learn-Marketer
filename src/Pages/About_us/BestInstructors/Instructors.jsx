import React from "react";
import styles from "./instructors.module.scss";
import InstructorsCard from "./InstructorsCard"
import Kathryn from '../../../assets/AboutUsImages/Kathryn.png'
import Armen from '../../../assets/AboutUsImages/Armen.png'
import Cam from '../../../assets/AboutUsImages/Cam.png'
import David from '../../../assets/AboutUsImages/David.png'
import Wade from '../../../assets/AboutUsImages/Wade.png'
import Eleanor from '../../../assets/AboutUsImages/Eleanor.png'

export default function Instructors() {

  const array = [
    {
      id: 1,
      img: Kathryn,
      h1: "Kathryn Murphy",
      p: "Marketolog",
    },
    {
      id: 2,
      img: Armen,
      h1: "Armen Asatryan",
      p: "Head of SEO",
    },
    {
      id: 3,
      img: Cam,
      h1: " Cam Williamson",
      p: "Programmer ",
    },
    {
      id: 4,
      img: David,
      h1: " David Grigoryan",
      p: "SMM ",
    },
    {
      id: 5,
      img: Wade,
      h1: "Wade Warren ",
      p: "Head of SEO ",
    },
    {
      id: 6,
      img: Eleanor,
      h1: "Eleanor Pena ",
      p: "Programmer",
    },
  ];

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
        {array.map((elem) => (
           <InstructorsCard key={elem.id} data={elem} />
        ))}
        </div>
    </div>
  );
}
