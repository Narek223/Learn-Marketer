import React from "react";
import styles from "./home.module.scss";
import History from "./history/History";
import Choose from "./choose/Choose";
import Courses from "./courses/Courses";
import Opinion from "./opinion/Opinion";
import Faq from "./faq/Faq";
import Workers from "./best_workers/Workers";
import Secondary_button from "../../shered_components/buttons/secondary_button/Secondary_button";
import Primary_button from "../../shered_components/buttons/primary_button/Primary_button";
import medaiImg from '../../assets/Homepage_Images/Home/HomeImgForMedia.png'
import img from  '../../assets/Homepage_Images/Home/Frame 1.png'
import { NavLink } from "react-router-dom";

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
          <img src={medaiImg} className={styles.homeimg}/>
          <div className={styles.btn}>
            <NavLink className={styles.src} to="Course">
              <Primary_button>Explore Courses </Primary_button>
            </NavLink>

            <NavLink className={styles.btnTwo} to="Contact">
              <Secondary_button>Contact us </Secondary_button>
            </NavLink>
          </div>
        </div>
        <div className={styles.img}>
          <img src={img} />
          <img src={medaiImg} />
        </div>
      </div>
  

       <History /> 
       <Choose /> 
      <Courses /> 
     {/* <Opinion/>  */}
      {/* <Workers/>  */}
      <Faq />
    </div>
  );
}
