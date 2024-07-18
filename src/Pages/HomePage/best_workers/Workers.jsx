import React from "react";
import one from "../../../assets/Rectangle (2).png";
import two from "../../../assets/Rectangle.png";
import three from "../../../assets/Rectangle (1).png";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import styles from './workers.module.scss'
import Primary_button from "../../../shered_components/buttons/primary_button/Primary_button";

export default function Workers() {
  
  return (
    <div className={styles.mainn}>
      <div className={styles.worker}>
        <div className={styles.blog}>
          <h1>
            Our
            <span>
              Best
              <br /> Workers
            </span>
          </h1>
          <p>
            At LearnMarketerAt our success is driven by a dedicated team of
            experienced professionals who are passionate about digital marketing
            and committed to your learning journey.
          </p>
         <div style={{width:'150px'}}>
         <Primary_button> See All</Primary_button>
         </div>
   
        </div>

        <div className={styles.images}>
          <div className={styles.imgone}>
            <div className={styles.img_one}>
              <img src={one} />
              <ul >
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTelegramPlane />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaYoutube />
                </li>
              </ul>
            </div>
            <h1>Mary D. Greenwell</h1>
            <p>Head of SEO</p>
          </div>

          <div className={styles.imgtwo}>
            <img src={two} />
            <h1>Mary D. Greenwell</h1>
            <p>Head of SEO</p>
          </div>

          <div className={styles.imgthree}>
            <img src={three} />
            <h1>Mary D. Greenwell</h1>
            <p>Head of SEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
