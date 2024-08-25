import React from 'react'
import styles from './error.module.scss'
import error from "../../assets/404PageImage/Errorimg.png"
import ErrorPicture from '../../assets/404PageImage/Error.png'

export default function Error() {
  return (
    <div className={styles.error}>
<p>Opps... Page not found</p>

<img className={styles.errorimg} src={error}/>
<img  className={styles.err} src={ErrorPicture}/>

    </div>
  )
}
