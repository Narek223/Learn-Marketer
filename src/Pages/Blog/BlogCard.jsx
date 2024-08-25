import React from "react";
import styles from "./blog.module.scss";
import { NavLink } from "react-router-dom";
import BlogCartTwo from "./BlogCartTwo";
import { BlogCardData } from "../../Services/Data/Blog/blogData";

export default function BlogCard() {
  return (
    <div className={styles.blog}>
      <NavLink className={styles.link} to="/Blog/SocialMedia">
        {BlogCardData.map((elem) => (
          <BlogCartTwo key={elem.id} data={elem} />
        ))}
      </NavLink>
    </div>
  );
}
