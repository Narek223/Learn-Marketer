import React from "react";
import styles from "./about.module.scss";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { numberCount } from "../../Services/Data/About_Us/CountUp/count";



export default function Numbers() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className={styles.aboutTwo}>
      {numberCount.map((elem) => (
        <div className={styles.one} key={elem.id} ref={ref}>
          <div className={styles.imgbox}>
            <img src={elem.img} />
          </div>

          <h1>
            {
              <CountUp
                start={0}
                end={inView ? elem.firstH1 : null}
                duration={3}
                delay={2}
              />
            }
            +
          </h1>
          <h1>{elem.lastH1}</h1>
        </div>
      ))}
    </div>
  );
}
