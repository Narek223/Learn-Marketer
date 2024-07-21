import React from 'react'
import styles from  './about.module.scss'
import photo from '../../assets/Group23.png'
import Numbers from './Numbers'

export default function About() {


  return (
<div className={styles.about}>
  <div className={styles.new_title}>
    <h1>We Have 7 Years Of Experience On Digital Agency</h1>
  </div>
  <div className={styles.content}>
    <div className={styles.part_one}>
      <h1>About Us</h1>
      <p>Welcome to Learnmarketer Course, where we are dedicated to empowering individuals and businesses with the skills and knowledge needed to thrive in the digital marketing world. Our mission, history, and commitment to excellence set us apart as a leader in digital marketing education.</p>
      
      <h1>Our Mission </h1>
      <p>We envision a world where digital marketing expertise is accessible to everyone, driving innovation, growth, and success across all industries. As we continue to evolve and expand our offerings, our ultimate goal is to become the go-to resource for digital marketing education globally, known for our commitment to quality and student success.</p>
    </div>
    <div className={styles.img}>
      <img src={photo} alt="About Us" />
    </div>
  </div>
<Numbers/>
</div>
  )
}
