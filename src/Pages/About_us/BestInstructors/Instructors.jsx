import React from 'react'
import styles from './instructors.module.scss'
import imgOne from '../../../assets/Ellipse 1212.png'
import imgTwo from '../../../assets/Ellipse 1213.png'
import imgThree from '../../../assets/Ellipse 1214.png'
import imgFour from '../../../assets/Ellipse 1210.png'
import imgFife from '../../../assets/Ellipse 1211.png'
import imgSix from '../../../assets/Ellipse 1206.png'
import button from '../../../assets/Vector.png'


export default function Instructors() {


const array=[
    {
        id:1,
       img:imgOne,
       h1:"Kathryn Murphy",
       p:"Marketolog",


    },
    {
        id:2,
        img:imgTwo,
        h1:"Armen Asatryan",
        p:"Head of SEO",
    },
    {
        id:3,
        img:imgThree,
        h1:" Cam Williamson",
        p:"Programmer ",
    },
    {
        id:4,
        img:imgFour,
        h1:" David Grigoryan",
        p:"SMM ",
    },
    {
        id:5,
        img:imgFife,
        h1:"Wade Warren ",
        p:"Head of SEO ",
    },
    {
        id:6,
        img:imgSix,
        h1:"Eleanor Pena ",
        p:"Programmer",
    },
]


  return (
    <div className={styles.main}>
        <div className={styles.title}>
        <h1>Meet Our Best Instructors</h1>
        <p>At LearnMarketerAt our success is driven by a dedicated team of experienced professionals who are passionate about digital marketing and committed to your learning journey.</p>
        </div>
<div className={styles.mainTwo}>
{array.map((elem) => (
  <div key={elem.id} className={styles.instructors}>
    <img className={styles.img} src={elem.img}/>
    <div className={styles.text}>
    <h1>{elem.h1}</h1>
    <p>{elem.p}</p>
    </div>
    <button><img src={button}/> </button>
  </div>    
))}

</div>
    
    </div>
  )
}