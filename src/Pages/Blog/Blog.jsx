import React from "react";
import styles from "./blog.module.scss";
import { NavLink } from "react-router-dom";
import BlogCart from "./BlogCard.jsx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function Blog() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.buttons}>
        <NavLink className={styles.link} to="/">
          HOME
        </NavLink>
        <p> > </p>
        <NavLink className={styles.link}> BLOG</NavLink>
      </div>
      <div className={styles.title}>
        <h1>
          Welcome to the LearnMarketer <span>Blog! </span>
        </h1>
        <p>
          Here, we share the latest insights, tips, trends, and best practices
          in digital marketing. Our blog is designed to provide valuable
          resources for both beginners and seasoned professionals looking to
          stay ahead in the dynamic world of digital marketing. Explore our
          articles to gain knowledge, inspiration, and practical advice to
          enhance your marketing strategies.
        </p>
      </div>

      <BlogCart />
      <ul className={styles.list}>
        <li className={styles.icon}>
          <IoIosArrowBack />
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li className={styles.icon}>
          <IoIosArrowForward />
        </li>
      </ul>
    </div>
  );
}
