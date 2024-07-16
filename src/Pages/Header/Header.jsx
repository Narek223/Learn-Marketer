import React from 'react'
import { NavLink } from "react-router-dom";
import styles from'./header.module.css'

export default function Header() {



  return (
    <div className={styles.header}>
   <header>
      <p>LearnMarketer</p>
<ul>
    <li><NavLink className={styles.link}  to='/' style={{ textDecoration:'none'}}>Home</NavLink></li>
    <li>About</li>
    <li>Course</li>
    <li>Blog</li>
    <li>Contact</li>
</ul>
<p>EN</p>
     </header>
    </div>
  )
}
