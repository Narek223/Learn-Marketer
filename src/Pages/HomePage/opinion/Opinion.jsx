import {useState} from 'react';
import pic from '../../../assets/Frame.png';
import { text } from './obj';
import {FaArrowLeft,FaArrowRight,FaStar}  from 'react-icons/fa';
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
    <div className='conteier_4'>
 <h1 className='h1'>What <span className='span'> people say</span></h1>
 <div className='opinion_2'>
  <div>
  <img  src={pic}/>
  </div>

    <div className='opinion'>
        <div className='text'>
          <div className='stars'> 
          <p>{text[stete].name}</p>
          <div className='icons'>
          <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
            <FaStar className='star'/>
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
