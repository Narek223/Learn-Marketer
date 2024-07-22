import React from 'react'
import styles from  './blog.module.scss'
import { NavLink } from "react-router-dom";
import {arr} from './BlogCard'


export default function Blog() {
    


  return (
    <div className={styles.conteiner}>
         <div className={styles.buttons}>
         <NavLink className={styles.link} to="/"> HOME</NavLink>
    <p> > </p>
    <NavLink className={styles.link} > BLOG</NavLink>

    </div>
<div className={styles.title}>
   
   
<h1>Welcome to the LearnMarketer <span>Blog! </span></h1>
<p>Here, we share the latest insights, tips, trends, and best practices in digital marketing. Our blog is designed to provide valuable resources for both beginners and seasoned professionals looking to stay ahead in the dynamic world of digital marketing. Explore our articles to gain knowledge, inspiration, and practical advice to enhance your marketing strategies.</p>
</div>
<div className={styles.blog}>

{arr.map((elem) => (
       <div className={styles.blogs} key={elem.id}>
         <img src={elem.img}  />
         <p className={styles.data}>{elem.data}</p>
         <p className={styles.title}>{elem.h1}</p>
         <p className={styles.text}>{elem.p}</p>
       </div>
     ))}

</div>

    </div>
  )
}
