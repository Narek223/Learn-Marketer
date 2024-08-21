import React from "react";
import styles from "./card-style.module.scss";

export default function ChooseCard({ data }) {
  return (
    <div className={styles.cardContainer} key={data}>
      <img src={data.img} alt={data.title} />
      <div className={styles.text}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.chooseUsText}>{data.text}</p>
      </div>
    </div>
  );
}
