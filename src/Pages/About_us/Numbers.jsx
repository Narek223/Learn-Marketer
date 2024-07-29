import React from "react";
import styles from "./about.module.scss";
import imgOne from "../../assets/Vector.png";
import imgTwo from "../../assets/Group (1).png";
import imgThree from "../../assets/Vector (1).png";

export default function Numbers() {
  let arr = [
    {
      id: 1,
      img: imgOne,
      firstH1: 14,
      lastH1: "Courses",
    },
    {
      id: 2,
      img: imgTwo,
      firstH1: 1230,
      lastH1: "Happy students",
    },
    {
      id: 3,
      img: imgThree,
      firstH1: 3260,
      lastH1: "Project Complated",
    },
  ];

  return (
    <div className={styles.aboutTwo}>
      {arr.map((elem) => (
        <div className={styles.one} key={elem.id}>
          <img src={elem.img} />
          <h1>{elem.firstH1}+</h1>
          <h1>{elem.lastH1}</h1>
        </div>
      ))}
    </div>
  );
}
