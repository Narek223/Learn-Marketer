import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import styles from'./header.module.css'
import { FaAlignJustify } from "react-icons/fa";
import { MdClear } from "react-icons/md";


export default function Header() {

const [show,setshow]= useState(false)

const handleShowNavBar=()=>{
   setshow(!show)
}

  return (
    <div className={styles.header}>
   <header>
    <div > 
   <p className={styles.MenuIcon} onClick={handleShowNavBar}>{show===false?<FaAlignJustify/>:<MdClear />}</p> 
    </div>
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
