import React from 'react'
import styles from './choose.module.scss'

export default function ChooseCard({data}) {

  return (
 <div className={styles.one} key={data}>
              <img src={data.img} alt={data.title} />
              <div className={styles.text}>
                <h1>{data.title}</h1>
                <p>{data.text}</p>
              </div>
   </div>
  )
}
