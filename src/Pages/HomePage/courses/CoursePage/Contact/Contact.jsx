import React from 'react'
import styles from './contact.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Primary_button from '../../../../../shered_components/buttons/primary_button/Primary_button';
import { NavLink } from "react-router-dom";

export default function Contact() {


    const validationSchema = Yup.object({ 
        name:Yup.string().required('Please enter your Username').matches(/^[A-Z]/g,"username must start with capital letter").min(4,'Minimum username length 4').max(8,'Maximum username length 8'),
        email:Yup.string().required('Please enter your email').email("This isn't not correct email format").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/," "),
       // phoneNumber:Yup.number().required('Please enter your phone number').matches(/^[0-9]{10}$/,'Phone number must be exactly 10 digits').required('Phone number is required')
    })    
    const initialValues = {
        name:"",
        email: '',
        password: '',
    }




  return (
    <div className={styles.form}>

<div className={styles.formTwo}>
<h1>fill in the list and we will <span> contact you  </span></h1>
</div>
<Formik
    validationSchema={validationSchema}
    initialValues={initialValues}
    validateOnChange={false}
    validateOnBlur={true}>
 {formik=>{

return(
<Form>
  

  <div className={styles.registr}>

{formik.errors.pass && formik.touched.pass || formik.errors.email && formik.touched.email ? <p className={styles.error}>Incorrect email or password.</p> : null}<br/>
<Field type='string' name='name' placeholder='Name Surname '   />
<ErrorMessage name='name' component='p'  className={styles.error}/><br/>
<Field type='email' name='email'  placeholder='E-mail'    />
<ErrorMessage name='email' component='p'  className={styles.error}/><br/>
<Field type='tel' name='phoneNumber' placeholder='+374-(XX)-XX-XX-XX'/>
<ErrorMessage name='phoneNumber' component='p' className={styles.error} />
<div className={styles.button}>
<Primary_button disabled={!formik.isValid}> SEND</Primary_button>
</div>


</div>

</Form>
)
 }}
    </Formik>
    </div>
  )
}
