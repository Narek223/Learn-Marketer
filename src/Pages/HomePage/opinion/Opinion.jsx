import {useState} from 'react';
import pic from '../../../assets/Frame.png';
import { text } from './obj';
import {FaArrowLeft,FaArrowRight,FaStar}  from 'react-icons/fa';
import styles from  './opinion.module.scss'


export default function Opinion() {
  
    let [stete, setstate]=useState(0)

    let next=()=>{
        setstate(stete==text.length-1?0: stete+1)
      }
      let prev=()=>{
        setstate(stete===0?text.length-1: stete-1)
      } 

  return (
    <div className={styles.conteier_4}>
 <h1 className={styles.h1}>What <span className={styles.span}> people say</span></h1>
 <div className={styles.opinion_2}>
  <div>
  <img  src={pic}/>
  </div>

    <div className={styles.opinion}>
        <div className={styles.text}>
          <div className={styles.stars}> 
          <p>{text[stete].name}</p>
          <div className={styles.icons}>
          <FaStar className={styles.stars}/>
            <FaStar className={styles.stars}/>
            <FaStar className={styles.stars}/>
            <FaStar className={styles.stars}/>
            <FaStar className={styles.stars}/>
          </div>
           
          </div>
        <p>{text[stete].p} </p>
        <p>{text[stete].text} </p>
        <button onClick={prev}><FaArrowLeft/></button>
        <button onClick={next}><FaArrowRight/></button>
        </div>
 


 
    </div>
 </div>
    </div>
  )
}
