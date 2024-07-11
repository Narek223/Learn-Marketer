import {useState} from 'react';
import pic from '../../../assets/Frame.png';
import { text } from './obj';
import {FaArrowLeft,FaArrowRight}  from 'react-icons/fa';
import './opinion.css';

export default function Opinion() {
    let [stete, setstate]=useState(0)

    let next=()=>{
        setstate(stete==text.length-1?0: stete+1)
      }
      let prev=()=>{
        setstate(stete===0?text.length-1: stete-1)
      } 

  return (
    <div className='conteier_2'>
 <h1>What <span> people say</span></h1>
 <div className='opinion_2'>
  
    <img src={pic}/>
    <div className='opinion'>
        <div className='text'>
        <p>{text[stete].name}</p>
        <p>{text[stete].p} </p>
        <p>{text[stete].text} </p>
        </div>
 <div className='btn'>
 <button onClick={prev}><FaArrowLeft/></button>
 <button onClick={next}><FaArrowRight/></button>
 </div>
    </div>
 </div>
    </div>
  )
}
