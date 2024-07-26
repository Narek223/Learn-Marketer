import React from 'react'
import styles from './secondary_button.module.scss'


export default function Secondary_button({children,...props}) {

  return (
    <button className={styles.secendary_button}>
{children}
    </button>
  )
}
