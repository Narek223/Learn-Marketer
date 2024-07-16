import React from 'react'
import styles from './Primary_button.module.scss'


export default function Primary_button({children,...props}) {

  return (
    <button className={styles.primary_button}>
        {children}
    </button>
  )
}
