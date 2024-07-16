import React from "react";
import img1 from "../../../assets/Number (1).png";
import img2 from "../../../assets/Number.png";
import img3 from "../../../assets/Number (2).png";
import styles from './choose.module.scss'




export default function Choose() {
  let arr = [
    {
      id: 1,
      img: img2,
      title: "Great Experience",
      text: 'At LearnMarketer, we are committed to providing an exceptional learning experience that goes beyond traditional online education.'
    },
    {
      id: 2,
      img: img1,
      title: "Best Solutions",
      text: 'Our comprehensive and expertly crafted courses are designed to meet the diverse needs of our learners, ensuring you have the tools.'
    },
    {
      id: 3,
      img: img3,
      title: 'Effective Strategy',
      text: 'Our courses are meticulously designed to equip you with the knowledge, tools, and techniques needed to excel.'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title_2}>
        <h1>
          {" "}
          Why<span className={styles.change_color}> Choose Us</span>
        </h1>
        <p>
          At LearnMarketer, we are dedicated to providing top-notch education
          and resources to help you thrive in <br /> the dynamic world of
          digital marketing.{" "}
        </p>
      </div>
      <div className={styles.main}>
       
          {arr.map((elem) => (
            <div className={styles.one} key={elem.id}>
              <img src={elem.img} alt={elem.title} />
              <div className={styles.text}>
                <h1>{elem.title}</h1>
                <p>{elem.text}</p>
              </div>
            </div>
          ))}
     
      </div>
    </div>
  );
}
