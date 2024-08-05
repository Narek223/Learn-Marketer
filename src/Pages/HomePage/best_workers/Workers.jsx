import React  from "react";
import one from '../../../../public/assets/Homepage_Images/BestWorkers/Rectangle (2).png'
import two from '../../../../public/assets/Homepage_Images/BestWorkers/Rectangle.png'
import three from '../../../../public/assets/Homepage_Images/BestWorkers/Rectangle (1).png'
import styles from './workers.module.scss'
import Primary_button from "../../../shered_components/buttons/primary_button/Primary_button";
import WorkersCard from "./workers-card/workersCard";



export default function Workers() {
  


  
  
  
  
  
  return (
    <div className={styles.main}>
      <div className={styles.worker}>
        <div className={styles.workersInfoBox}>
          <h1>
              Our

               <span>
                  Best
                <br /> Workers
              </span>
            </h1>
            <p>
              At LearnMarketerAt our success is driven by a dedicated team of
              experienced professionals who are passionate about digital marketing
              and committed to your learning journey.
           </p>
           <div style={{width:'150px'}} className={styles.seeAllBtn}>
         <Primary_button> See All</Primary_button>
         </div>
        </div>

        <div className={styles.imgBox}>
          <div className={styles.imgMary}>
            <WorkersCard imgSrc={one} name="Mary D. Greenwell" position="Head of SEO"  worker={styles.mary} />
          </div>
          <div styles={styles.images}>
            <WorkersCard imgSrc={two} name="Mary D. Greenwell" position="Head of SEO" worker={styles.shereon} />
        <WorkersCard imgSrc={three} name="Mary D. Greenwell" position="Head of SEO" worker={styles.david} /> 
          </div>
        </div>

        {/* <div className={styles.blog}>
          <h1>
            Our
            <span>
                Best
              <br /> Workers
            </span>
          </h1>
          <p>
            At LearnMarketerAt our success is driven by a dedicated team of
            experienced professionals who are passionate about digital marketing
            and committed to your learning journey.
          </p>
         <div style={{width:'150px'}} className={styles.seeAllBtn}>
         <Primary_button> See All</Primary_button>
         </div>
   
        </div>

        <div className={styles.images}>
          <div className={styles.imgone}>

            <WorkersCard imgSrc={one} name="Mary D. Greenwell" position="Head of SEO"  worker={styles.img_one} />
            <WorkersCard imgSrc={two} name="Mary D. Greenwell" position="Head of SEO" worker={styles.imgtwo} />
            <WorkersCard imgSrc={three} name="Mary D. Greenwell" position="Head of SEO" worker={styles.imgthree} />
           
          </div>

        
      
        </div> */}
      </div>
    </div>
  );
}
