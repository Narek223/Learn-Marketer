import React from "react";
import groub2 from "../../assets/Group.png";
import styles from './home.module.scss'
import History from "./history/History";
import Choose from "./choose/Choose";
import Courses from "./courses/Courses";
import Opinion from "./opinion/Opinion";
import Faq from "./faq/Faq";
import Workers from "./best_workers/Workers";
import Secondary_button from "../../shered_components/buttons/secondary_button/Secondary_button";
import Primary_button from "../../shered_components/buttons/primary_button/Primary_button";
import img from '../../assets/Frame 1.png'


export default function Home() {
  return (
    <div>
      <div className={styles.homepage}>
        <div className={styles.home}>
          <h1>
            Find most exciting <span>online courses</span>
          </h1>
          <p>
            At LearnMarketer,our journey begun in 2017 with a vision to empower
            individuals
          </p>
       <img src={img}/>
           <div  className={styles.btn}> 
            <Primary_button>Explore Courses</Primary_button>
            <Secondary_button>Cantact us</Secondary_button>
           </div> 
          
        </div>
   
      </div>
      <History/>
       <Choose /> 
    <Courses /> 
       <Opinion /> 
       <Workers /> 
      <Faq /> 

    </div>
  );
}
