import React from 'react'
import styles from './choose.module.scss'

export default function ChooseCard({id,img,title,text}) {

  return (
 <div className={styles.one} key={id}>
              <img src={img} alt={title} />
              <div className={styles.text}>
                <h1>{title}</h1>
                <p>{text}</p>
              </div>
   </div>
  )
}
