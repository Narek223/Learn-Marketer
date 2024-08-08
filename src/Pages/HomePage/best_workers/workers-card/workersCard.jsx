import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import styles from "./workersCard.module.scss";

export default function WorkersCard({ imgSrc, name, position, worker }) {
  const socialIcons = [
    { id: 1, icon: FaFacebookF },
    { id: 2, icon: FaTelegramPlane },
    { id: 3, icon: FaLinkedinIn },
    { id: 4, icon: FaInstagram },
    { id: 5, icon: FaYoutube },
  ];

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageBox}>
        <img src={imgSrc} alt={name} className={styles.cardImage} />
        <div className={styles.socialBox}>
          <div className={styles.socialIcons}>
            {socialIcons.map(({ icon: Icon, id: index }) => (
              <Icon key={index} className={styles.icon} />
            ))}
          </div>
        </div>
      </div>

      <h1>{name}</h1>
      <p>{position}</p>
    </div>
  );
}
