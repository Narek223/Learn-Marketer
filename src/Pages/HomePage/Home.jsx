import React from 'react'
import History from './history/History'
import groub2 from '../../assets/Group.png'
import Choose from './choose/Choose'
import Opinion from './opinion/Opinion'
import Footer from './footer/Footer'

import './home.css'

export default function Home() {
  return (
    <div>
      <div className='homepage'>
      <div className='home'>
    <h1>Find most exciting <span>online courses</span></h1>
    <p>At LearnMarketer,our journey begun in 2017 with a vision to empower individuals</p>
    <button>Explore Courses</button>
    <button>Cantact us </button>
</div>
<img src={groub2}/> 
      </div>
<History/>
<Choose/>
<Opinion/>
<Footer/>
    </div>

  )
}
