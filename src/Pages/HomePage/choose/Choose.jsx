import React from "react";
import {arr} from './choose.js'
import styles from './choose.module.scss'

export default function Choose() {
  return (
    <div className={styles.container}>
      <div className={styles.title_2}>
        <h1>
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
