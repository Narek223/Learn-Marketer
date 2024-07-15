import React from "react";
import img_1 from "../../../assets/IMAGE.png";
import img_2 from "../../../assets/IMAGE (1).png";
import img_3 from "../../../assets/IMAGE (2).png";
import img_4 from "../../../assets/IMAGE (3).png";
import img_5 from "../../../assets/IMAGE (4).png";
import img_6 from "../../../assets/IMAGE (5).png";

import "./cours.css";

export default function Courses() {
  return (
    <div className="main_2">
      <div className="title_2">
        <h1>
          {" "}
          Featured<span> Courses</span>
        </h1>
        <p>
          Explore our top-rated courses designed to equip you with the skills
          and knowledge needed to excel in the <br /> digital marketing
          landscape.{" "}
        </p>
      </div>
      <div className="main_3">
        <div className="pages">
          <div className="one">
            <img src={img_1} />
            <p>
              <span className="span"> 4 Month</span> Online / Offline
            </p>
            <h2>Digital Marketing Fundamentals</h2>
            <p>
              Kickstart your digital marketing journey with our foundational
              course. Learn the core concepts.
            </p>
            <h3>Read more</h3>
          </div>

          <div className="two">
            <img src={img_2} />
            <p>
              <span className="span">6 Month</span> Online / Offline
            </p>
            <h2>Advanced SEO Techniques</h2>
            <p>
              Elevate your SEO skills with advanced strategies and techniques .
              . .
            </p>
            <h3> Read more</h3>
          </div>

          <div className="three">
            <img src={img_3} />
            <p>
              <span className="span"> 4 Month</span> Online / Offline
            </p>
            <h2>Social Media Marketing Mastery</h2>
            <p>
              Master the nuances of social media marketing and learn how to
              build a strong online . . .
            </p>
            <h3>Read more</h3>
          </div>
        </div>

        <div className="pages_3">
          <div className="one">
            <img src={img_4} />
            <p>
              <span className="span"> 5 Month</span> Online / Offline
            </p>
            <h2>Content Marketing Strategies</h2>
            <p>
              Learn how to create compelling content that attracts and engages
              your target audience.{" "}
            </p>
            <h3>Read more</h3>
          </div>

          <div className="two">
            <img src={img_5} />
            <p>
              <span className="span"> 3 Month</span> Online / Offline
            </p>
            <h2>Email Marketing for Businesses</h2>
            <p>
              Unlock the power of email marketing with strategies for building
              effective email campaigns . . ..
            </p>
            <h3>Read more</h3>
          </div>
          <div className="three">
            <img src={img_6} />
            <p>
              <span className="span"> 6 Month</span> Online / Offline
            </p>
            <h2>Data Analytics for D M</h2>
            <p>
              Gain the skills to analyze and interpret data to make informed
              marketing decisions.
            </p>
            <h3>Read more</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
