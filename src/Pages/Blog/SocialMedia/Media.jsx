import React from "react";
import styles from "./media.module.scss";
import { NavLink } from "react-router-dom";
import imgOne from  "../../../assets/BlogCardImages/charlesdeluvio-Lks7vei-eAg-unsplash 1.png"
import imgTwo from  "../../../assets/BlogCardImages/Rectangle 8645.png"
import imgthree from '../../../assets/BlogCardImages/Rectangle 8645 (1).png'
import Primary_button from "../../../shered_components/buttons/primary_button/Primary_button";
import {  IoIosArrowForward } from "react-icons/io";

export default function media() {
  return (
    <div className={styles.socialMedia}>
      <div className={styles.buttons}>
        <NavLink className={styles.link} to="/">
          HOME
        </NavLink>
        <p>
          {" "}
          <IoIosArrowForward />
        </p>
        <NavLink className={styles.link} to="/Blog">
          BLOG
        </NavLink>
        <p>
          {" "}
          <IoIosArrowForward />
        </p>
        <NavLink className={styles.link} to="/Blog">
          ARTICLES
        </NavLink>
      </div>
      <div className={styles.mainPart}>
        <h1 className={styles.h1}>
          <span> Top Social Media </span> Marketing Strategies for Small
          Businesses
        </h1>

        <p>
          In today's digital age, social media has become an indispensable tool
          for small businesses looking to grow their brand, engage with
          customers, and drive sales. However, with the ever-changing social
          media landscape, it can be challenging to know which strategies will
          yield the best results. Here are some of the top social media
          marketing strategies that can help small businesses make a big impact.
        </p>
        <div className={styles.NextPart}>
          <div className={styles.blok}>
            <div className={styles.FirstPart}>
              <h1>Define Your Goals and Objectives</h1>
              <p>
                Before diving into social media marketing, it’s essential to
                have clear goals and objectives. Whether you want to increase
                brand awareness, drive website traffi leads, or boost sales,
                having specific and measurable goals will guide your strategy
                and help you track your progress.
              </p>

              <h1>Identify Your Target Audience</h1>
              <p>
                Understanding your target audience is crucial for creating
                content that resonates. Conduct market research to identify the
                demographics, interests, and behaviors of your ideal customers.
                Use this information to tailor your social media content to meet
                their needs and preferences.
              </p>
            </div>
          </div>
          <div className={styles.img}>
            <img src={imgOne} className={styles.firstimg} />
          </div>
        </div>
        <div className={styles.secondPart}>
          <div>
            <div className={styles.second}>
              <h1>Choose the Right Platforms</h1>
              <p>
                Not all social media platforms are created equal. Choose the
                platforms that are most popular with your target audience. For
                example:
              </p>
              <ul>
                <li>
                  Facebook: Great for building a community and sharing a variety
                  of content types.
                </li>
                <li>
                  Instagram: Ideal for visually appealing products and services.
                </li>
                <li>
                  Twitter: Best for real-time updates and engaging with
                  followers.
                </li>
                <li>
                  LinkedIn: Perfect for B2B marketing and professional
                  networking.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.img}>
            <img src={imgTwo} className={styles.pic} />
          </div>
        </div>
        <div className={styles.finalPart}>
          <h1>Create High-Quality Content</h1>
          <p>
            Content is king in social media marketing. Invest time in creating
            high-quality, engaging, and valuable content that aligns with your
            brand and appeals to your audience. Use a mix of content types, such
            as:
          </p>
          <ul>
            <li>
              Images and Graphics: Eye-catching visuals that tell your brand
              story.
            </li>
            <li>
              Videos: Engaging and informative videos that capture attention.
            </li>
            <li>
              Blog Posts and Articles: Educational content that provides value
              to your audience.
            </li>
            <li>
              Infographics: Shareable content that presents information in a
              visual format.
            </li>
            <li>
              User-Generated Content: Content created by your customers that
              adds authenticity.
            </li>
          </ul>
     
          <img src={imgthree} className={styles.secondimg} />
       
          
        </div>
      
        <div className={styles.read}>
          <h1>
            Ready to take your social media marketing skills to the next level?
            Enroll in our Social Media Marketing Mastery course today and learn
            how to create effective strategies, produce engaging content, and
            achieve your business goals.
          </h1>
          <div style={{ width: "200px" }}>
            <Primary_button>
              <NavLink className={styles.src} to="/Blog">
                Back to Blog{" "}
              </NavLink>
            </Primary_button>
          </div>
        </div>
      </div>
    </div>
  );
}
