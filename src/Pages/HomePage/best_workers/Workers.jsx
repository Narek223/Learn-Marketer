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
  
  const socialIcons = [
    { icon: FaFacebookF, key: "facebook" },
    { icon: FaTelegramPlane, key: "telegram" },
    { icon: FaLinkedinIn, key: "linkedin" },
    { icon: FaInstagram, key: "instagram" },
    { icon: FaYoutube, key: "youtube" },
  ];
  
  const Worker = ({ imgSrc, name, position,worker }) => (
    <div className={worker}>
      <img src={imgSrc} alt={name} />
      <ul>
        {socialIcons.map(({ icon: Icon, key }) => (
          <li key={key}><Icon /></li>
        ))}
      </ul>
      <h1>{name}</h1>
      <p>{position}</p>
    </div>
  );




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

            <Worker imgSrc={one} name="Mary D. Greenwell" position="Head of SEO"  worker={styles.img_one} />
        <Worker imgSrc={two} name="Mary D. Greenwell" position="Head of SEO" worker={styles.imgtwo} />
        <Worker imgSrc={three} name="Mary D. Greenwell" position="Head of SEO" worker={styles.imgthree} />
           
          </div>

        
      
        </div>
      </div>
    </div>
  );
}
