import React from 'react'
import img1 from '../../../assets/Number (1).png'
import img2 from '../../../assets/Number.png'
import img3 from '../../../assets/Number (2).png'
import './choose.css';


export default function Choose() {
  return (
    <div className='conteiner'>
  <div className='title_2'>
    <h1> why<span className='change_color'> choose us</span></h1>
    <p>At LearnMarketer, we are dedicated to providing top-notch education and resources to help you thrive in <br/> the dynamic world of digital marketing. </p>
   
    </div>
    <div className='main'>
<div className='one'>
<img src={img2}/>
<div className='text'>
<h1>Great Experience</h1>
<p>At LearnMarketer, we are committed to providing an exceptional learning experience that goes beyond traditional online education.</p> 
</div>

</div>
<div className='two'>
<img src={img1}/>
<div className='text_2'>
<h1>Best Solutions</h1>
<p>Our comprehensive and expertly crafted courses are designed to meet the diverse needs of our learners, ensuring you have the tools .</p>
</div>
</div>
<div className='three'>
<img src={img3}/>
<div className='text_3'>
<h1>Efective Strategy</h1>
<p>Our courses are meticulously designed to equip you with the knowledge, tools, and techniques needed to excel.</p>
</div>

</div>
  </div>

    </div>
  )
}
