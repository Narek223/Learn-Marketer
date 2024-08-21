import React from "react";
import styles from "./home.module.scss";
import History from "./history/History";
import Choose from "./choose/Choose";
import Courses from "./courses/Courses";
import Opinion from "./opinion/Opinion";
import Faq from "./faq/Faq";
import Workers from "./best_workers/Workers";
import Hero from "../../components/HeroSection/Hero";

export default function Home() {
  return (
    <div className={styles.home}>
       <Hero /> 
      <History />
        <Choose />
       {/* <Courses />
      <Opinion />
      <Workers /> 
      <Faq />     */}
    </div>
  );
}
