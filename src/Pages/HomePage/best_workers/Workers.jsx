import React from "react";
import MaryImg from "../../../assets/Homepage_Images/BestWorkers/MaryImg.png";
import SheronImg from "../../../assets/Homepage_Images/BestWorkers/SheronImg.png";
import Max from "../../../assets/Homepage_Images/BestWorkers/Max.png";
import styles from "./workers.module.scss";
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
              <span className={styles.best}>
                Best
                <br />{" "}
              </span>{" "}
              Workers
            </span>
          </h1>
          <p>
            At LearnMarketerAt our success is driven by a dedicated team of
            experienced professionals who are passionate about digital marketing
            and committed to your learning journey.
          </p>
          <div style={{ width: "150px" }} className={styles.seeAllBtn}>
            <Primary_button> See All</Primary_button>
          </div>
        </div>

        <div className={styles.imgBox}>
          <div className={styles.imgMary}>
            <WorkersCard
              imgSrc={MaryImg}
              name="Mary D. Greenwell"
              position="Head of SEO"
              worker={styles.mary}
            />
          </div>
          <div styles={styles.images}>
            <WorkersCard
              imgSrc={SheronImg}
              name="Sharon A. Melton"
              position="Wep Developer"
              worker={styles.shereon}
            />
            <WorkersCard
              imgSrc={Max}
              name="Max D. Greenwell"
              position="Head of SEO"
              worker={styles.david}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
