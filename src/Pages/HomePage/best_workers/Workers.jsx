import React from 'react'
import one from '../../../assets/Rectangle (2).png'
import two from '../../../assets/Rectangle.png'
import three from '../../../assets/Rectangle (1).png'
import { FaFacebookF,FaTelegramPlane, FaLinkedinIn,FaInstagram, FaYoutube  } from "react-icons/fa"
import './worker.css'

export default function Workers() {
  return (
    <div className='mainn'>
<div className='worker'>

<div className='blog'>
    <h1>Our <span>Best<br/> Workers</span></h1>
    <p>At LearnMarketerAt our success is driven by a dedicated team of experienced professionals who are passionate about digital marketing and committed to your learning journey.</p>
    <button>See All</button>
</div>

<div className='images'>
  
<div className='imgone'>
  <div className='img_one'>
  <img src={one}/>
  <ul>
    <li><FaFacebookF/></li>
    <li><FaTelegramPlane/></li>
    <li><FaLinkedinIn/></li>
    <li><FaInstagram/></li>
    <li>< FaYoutube/></li>
  </ul>
  </div>
  <h1>Mary D. Greenwell</h1>
  <p>Head of SEO</p>
</div>

<div className='imgtwo'>
  <img src={two}/>
  <h1>Mary D. Greenwell</h1>
  <p>Head of SEO</p>
</div>

<div className='imgthree'>
  <img src={three}/>
  <h1>Mary D. Greenwell</h1>
  <p>Head of SEO</p>
</div>

</div>

</div>

    </div>
  )
}
