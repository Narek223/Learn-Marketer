import React from 'react'
import styles from './courses.module.scss'
import Courses from '../HomePage/courses/Courses'
import newimg from '../../assets/Group 1000014917 (1).png'
export default function Course() {
  return (
    <div className={styles.conteiner}>
<Courses/>
<div className={styles.section}> 
<img src={newimg}/>
<p>Explore our top-rated courses designed to equip you with the skills and knowledge needed to excel in the digital marketing landscape.Explore our top-rated courses designed to equip you with the skills and knowledge needed to excel in the digital marketing landscape. </p>
</div>
    </div>
  )
}
