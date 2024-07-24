import React from 'react'
import styles from "./coursepage.module.scss"
import imgone from '../../../../assets/Frame23.png'
import imgtwo from '../../../../assets/Group55.png'
import Contact from './Contact/Contact'
import { NavLink } from "react-router-dom";
import Faqs from './Faqs/NewFaqs'


export default function CoursePage() {



  return (
    <div className={styles.course}>
<div className={styles.buttons}>
 <NavLink className={styles.link} to="/">
   Home
 </NavLink>
 <p> > </p>
 <NavLink className={styles.link}>Course</NavLink>
</div>
<div className={styles.first}>
  <h1>Advanced <span>SEO  </span> Techniques</h1>
</div>
<div className={styles.main}>
  <div>
    <div className={styles.second}>
      <h1>Key Topics</h1>

      <ul>
        <li>Advanced Keyword Research </li>
        <li>On-Page and Off-Page SEO </li>
        <li>Technical SEO Optimization </li>
        <li> Link Building Strategies</li>
        <li>SEO Analytics and Reporting </li>
      </ul>

    <h1>Course Highlights</h1>
 <ul>
   <li>Expert-led tutorials </li>
   <li>Real-world SEO projects </li>
   <li>Access to SEO tools and resources </li>
   <li> Certification upon completion</li>

 </ul>
    </div>
  </div>
  <img src={imgone}/>
</div>
<Contact/>
<Faqs/>

    </div>
  )
}
