import React from 'react'
import vector from '../../../assets/Vector.png'
import './history.css'
import Primary_button from '../../../shered_components/buttons/primary_button/Primary_button'

export default function History() {
  return (
    <div className='history'>
      
      <div className='image'>
      <img className='img' src ={vector} />
      </div>

<div className='our_history'>

    <div className='title'>
    <h1>Our History</h1>
    <h1>Welcome to LearnMarketer!</h1>
    </div>


 <p>At LearnMarketer, our journey began in 2017 with a vision to empower individuals and businesses with the skills and knowledge needed to excel in the rapidly evolving digital marketing landscape. Founded by LearnMarketer, a seasoned expert in digital marketing with over 7 years of industry experience, our mission has always been to provide high-quality, accessible education to aspiring digital marketers around the world.</p>
<button>Read more</button>
<Primary_button>Read more</Primary_button>
</div>

    </div>
  )
}
