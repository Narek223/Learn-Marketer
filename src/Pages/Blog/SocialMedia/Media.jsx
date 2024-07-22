import React from 'react'
import styles from './media.module.scss'
import { NavLink } from "react-router-dom";
import imgOne from '../../../assets/charlesdeluvio-Lks7vei-eAg-unsplash 1.png'
import imgTwo from '../../../assets/Rectangle 8645.png'


export default function media() {
  return (
    <div className={styles.socialMedia}>

<div className={styles.buttons}>
   <NavLink className={styles.link} to="/">
     Home
   </NavLink>
   <p> > </p>
   <NavLink className={styles.link} to='/Blog'> Blog</NavLink>
   <p> > </p>
   <NavLink className={styles.link} to='/Blog'> Articles</NavLink>
 </div>
<div className={styles.mainPart}>
<h1 className={styles.h1}><span> Top Social Media </span> Marketing Strategies for Small Businesses</h1>

<p>In today's digital age, social media has become an indispensable tool for small businesses looking to grow their brand, engage with customers, and drive sales. However, with the ever-changing social media landscape, it can be challenging to know which strategies will yield the best results. Here are some of the top social media marketing strategies that can help small businesses make a big impact.</p>
<div className={styles.NextPart}>
    <div className={styles.FirstPart}>
    <h1 >Define Your Goals and Objectives</h1>
 <p>Before diving into social media marketing, it’s essential to have clear goals and objectives. Whether you want to increase brand awareness, drive website traffi
leads, or boost sales, having specific and measurable goals will guide your strategy and help you track your progress.</p>
    </div>
    <div className={styles.img}>
 <img  src={imgOne} />
 </div>
    <div className={styles.FirstPart}>
    <h1  >Identify Your Target Audience</h1>
<p>Understanding your target audience is crucial for creating content that resonates. Conduct market research to identify the demographics, interests, and behaviors of your ideal 
customers. Use this information to tailor your social media content to meet their needs and preferences.</p>

    </div>
   

 
   
   


</div>
</div>
    </div>
  )
}
