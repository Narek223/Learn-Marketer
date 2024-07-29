import React from "react";
import styles from "./blog.module.scss";

export default function BlogCartTwo({ data }) {
  return (
    <div className={styles.blogs}>
      <img src={data.img} />
      <p className={styles.data}>{data.data}</p>
      <p className={styles.title}>{data.h1}</p>
      <p className={styles.text}>{data.p}</p>
    </div>
  );
}
