import React from 'react'
import styles from './request.module.scss'
import Primary_button from '../../../../../shered_components/buttons/primary_button/Primary_button'
import photo from '../../../../../assets/Group (4).png'
import { NavLink } from "react-router-dom";

export default function Request() {
  return (
    <div className={styles.request}>
        <div className={styles.requestTwo}>
<img src={photo}/>
<h1>Thank You </h1>
<p>Your request has been approved. We will be in touch with you shortly.</p>
<div style={{width:'200px'}}>

<NavLink
   className={styles.link}
   to='/Course'
 >
<Primary_button>Bach to Courses</Primary_button>
</NavLink>
</div>

</div>
    </div>
  )
}
