import React from 'react'
import styles from './contact.module.scss'
import contactimg from '../../../../public/assets/ContactPageImages/Frame_5.png'
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import {  IoIosArrowForward } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import vector from  "../../../../public/assets/ContactPageImages/Vector 28973.png"
import { NavLink } from "react-router-dom";


export default function Contact() {

  return (
    <div className={styles.conteiner}>
      <div className={styles.buttons}>
        <NavLink className={styles.link} to="/">
          HOME
        </NavLink>
        <p> <IoIosArrowForward />
        </p>
        <NavLink className={styles.link}> CONTACT</NavLink>
      </div>
 <div className={styles.two}>

 <h1>Get <span>in</span> Touch</h1>
 <img src={contactimg} className={styles.mediaimg}/>
    <div className={styles.three}>
        <p>We’re here to help you every step of the way. Whether you have questions about our courses, need technical support, or just want to learn more about how [Your Digital Marketing Course Website Name] can help you achieve your goals, don’t hesitate to reach out. Our friendly and knowledgeable team is ready to assist you.</p>

    </div>
   
    <div className={styles.contact}>
    <ul>
        <li > <a href="https://www.google.com/maps/place/40.1974479,44.4771885" target="_blank"><FaMapMarkerAlt className={styles.icon}/> Yerevan / Halabyan 18/1</a></li>
        <li> <FaLocationArrow className={styles.icon} /> info@Marketer.am</li>
        <li><IoCallSharp className={styles.icon} /> +374 93 55 55 66 </li>
    </ul>
    
     <p><IoCallSharp className={styles.icon} /> +374 93 55 55 66 </p>
  
</div>
<img src={vector} className={styles.img}/>
 </div>
<div className={styles.conteinerTwo}>
<img src={contactimg}/>
<h1><span>Connect </span> with Us</h1>
<div className={styles.content}>
<div className={styles.text}>
    <p>Social Follow us on our social media chann updated on the lates Industry insights, and exciting projects</p>

</div>

</div>
</div>
    </div>
  )
}
