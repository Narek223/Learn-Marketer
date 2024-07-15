import React from "react";
import History from "./history/History";
import groub2 from "../../assets/Group.png";
import Choose from "./choose/Choose";
import Courses from "./courses/Courses";
import Opinion from "./opinion/Opinion";
import Faq from "./faq/Faq";
import Footer from "./footer/Footer";
import Workers from "./best_workers/Workers";

import "./home.css";
import Primary_button from "../../shered_components/buttons/primary_button/Primary_button";

export default function Home() {
  return (
    <div>
      <div className="homepage">
        <div className="home">
          <h1>
            Find most exciting <span>online courses</span>
          </h1>
          <p>
            At LearnMarketer,our journey begun in 2017 with a vision to empower
            individuals
          </p>
          {/* <button>Explore Courses</button> */}
          {/* <div style={{width:'200px'}}> */}
            <Primary_button>Explore Courses</Primary_button>
          {/* </div> */}
          <button>Cantact us </button>
        </div>
        <img src={groub2} />
      </div>
      <History />
      <Choose />
      <Courses />
      <Opinion />
      <Workers />
      <Faq />
      <Footer />
    </div>
  );
}
