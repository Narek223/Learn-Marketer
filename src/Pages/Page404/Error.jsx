import React from 'react'
import styles from './error.module.scss'
import ErrorPicture from '../../assets/page404.png'
import error from  '../../assets/h2.png'

export default function Error() {
  return (
    <div className={styles.error}>
<p>Opps... Page not found</p>

<img src={error}/>
<img  className={styles.err} src={ErrorPicture}/>

    </div>
  )
}
