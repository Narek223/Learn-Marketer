import React from 'react'
import { NavLink } from "react-router-dom";
import styles from'./header.module.css'
import { FaAlignJustify } from "react-icons/fa";

export default function Header() {



  return (
    <div className={styles.header}>
   <header>


      <p><NavLink   to='/' style={{ textDecoration:'none',color:'white'}}>LearnMarketer</NavLink></p>
<ul>
    <li><NavLink className={styles.link}  to='/' style={{ textDecoration:'none'}}>Home</NavLink></li>
    <li><NavLink className={styles.link}  to='/About' style={{ textDecoration:'none'}}>About</NavLink></li>
    <li>Course</li>
    <li>Blog</li>
    <li>Contact</li>
</ul>
<p>EN</p>
     </header>
    </div>
  )
}
