import React from 'react'
import styles from './contact.module.scss'
import contactimg from '../../../assets/Frame_5.png'
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";



export default function Contact() {

  return (
    <div className={styles.conteiner}>
 <div className={styles.two}>
 <h1>Get <span>in</span> Touch</h1>
    <div className={styles.three}>
    <img src={contactimg}/>
        <p>We’re here to help you every step of the way. Whether you have questions about our courses, need technical support, or just want to learn more about how [Your Digital Marketing Course Website Name] can help you achieve your goals, don’t hesitate to reach out. Our friendly and knowledgeable team is ready to assist you.</p>
       
    </div>
 </div>
<div className={styles.conteinerTwo}>

<h1><span>Connect </span> with Us</h1>
<div className={styles.content}>
<div className={styles.text}>
    <p>Social Follow us on our social media chann updated on the lates Industry insights, and exciting projects</p>

</div>
<div className={styles.contact}>
    <ul>
        <li><FaMapMarkerAlt/> Yerevan / Halabyan 18/1</li>
        <li> <FaLocationArrow/> info@Marketer.am</li>
        <li> <IoCallSharp/> +374 93 55 55 66 </li>
    </ul>
</div>
</div>
</div>
    </div>
  )
}
