import React from "react";
import styles from "./instructors.module.scss";
import InstructorsCard from "./InstructorsCard"
import imgOne from '../../../../public/assets/AboutUsImages/Ellipse 1212.png'
import imgTwo from '../../../../public/assets/AboutUsImages/Ellipse 1213.png'
import imgThree from '../../../../public/assets/AboutUsImages/Ellipse 1214.png'
import imgFour from '../../../../public/assets/AboutUsImages/Ellipse 1210.png'
import imgFife from '../../../../public/assets/AboutUsImages/Ellipse 1211.png'
import imgSix from '../../../../public/assets/AboutUsImages/Ellipse 1206.png'

export default function Instructors() {

  const array = [
    {
      id: 1,
      img: imgOne,
      h1: "Kathryn Murphy",
      p: "Marketolog",
    },
    {
      id: 2,
      img: imgTwo,
      h1: "Armen Asatryan",
      p: "Head of SEO",
    },
    {
      id: 3,
      img: imgThree,
      h1: " Cam Williamson",
      p: "Programmer ",
    },
    {
      id: 4,
      img: imgFour,
      h1: " David Grigoryan",
      p: "SMM ",
    },
    {
      id: 5,
      img: imgFife,
      h1: "Wade Warren ",
      p: "Head of SEO ",
    },
    {
      id: 6,
      img: imgSix,
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
