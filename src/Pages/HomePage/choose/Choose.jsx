import React from "react";
import styles from './choose.module.scss'
import { arr } from "./data";
import ChooseCard from "./chooseCard/ChooseCard";

export default function Choose() {


  return (
    <div className={styles.container}>
      <div className={styles.title_2}>
        <h1>
          Why<span className={styles.change_color}> Choose Us</span>
        </h1>
        <p>
          At LearnMarketer, we are dedicated to providing top-notch education
          and resources to help you thrive in  the dynamic world of
          digital marketing.
        </p>
      </div>
      <div className={styles.main}>

          {arr.map((elem) => (
            <ChooseCard key={elem.id} data={elem}/>
          ))}
     
      </div>
    </div>
  );
}
