import React from "react";
import styles from "./about.module.scss";
import CoursesImg from "../../../src/assets/AboutUsImages/CoursesImg.png";
import HappyStudentsimg from "../../../src/assets/AboutUsImages/HappyStudentsimg.png";
import ComplatedProject from "../../../src/assets/AboutUsImages/ComplatedProject.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Numbers() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  let arr = [
    {
      id: 1,
      img: CoursesImg,
      firstH1: 14,
      lastH1: "Courses",
    },
    {
      id: 2,
      img: HappyStudentsimg,
      firstH1: 1230,
      lastH1: "Happy students",
    },
    {
      id: 3,
      img: ComplatedProject,
      firstH1: 3260,
      lastH1: "Project Complated",
    },
  ];

  return (
    <div className={styles.aboutTwo}>
      {arr.map((elem) => (
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
