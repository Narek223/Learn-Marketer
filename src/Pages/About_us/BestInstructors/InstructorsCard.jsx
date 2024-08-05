import React from "react";
import button from '../../../../public/assets/AboutUsImages/Vector.png'
import styles from "./instructors.module.scss";
import { FiArrowUpRight } from "react-icons/fi";

export default function InstructorsCard({ data }) {
  return (
    <div className={styles.instructors}>
      <img className={styles.img} src={data.img} />
      <div className={styles.text}>
        <h1>{data.h1}</h1>
        <p>{data.p}</p>
      </div>
      <button>
        <img src={button} />
      </button>
    </div>
  );
}
