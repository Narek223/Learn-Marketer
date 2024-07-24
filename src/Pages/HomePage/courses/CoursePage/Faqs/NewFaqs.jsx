import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Faqs from "../../../faq/Faqs";
import styles from "./faqs.module.scss";

export default function NewFaqs() {
  const questions = [
    {
      id: 1,
      question:
        "What is the Advanced SEO Techniques course about?",
      answer:
        "The Advanced SEO Techniques course teaches advanced strategies for improving website visibility in search engines."
    },
    {
      id: 2,
      question: "Who should take this course?",
      answer:
        "Digital marketers, SEO professionals, and website owners seeking advanced SEO skills should take this course.",
    },
    {
      id: 3,
      question: "What are the prerequisites for this course?",
      answer:
        "Choosing the right course can be challenging, but we're here to help! Our courses are designed to cater to different skill levels, from beginners to advanced learners.",
    },
    {
      id: 4,
      question: "How long is the course?",
      answer:
        "The course typically spans several weeks to a few months, depending on the depth of the material and the pace of study.",
    },
  ];

  return (
    <div className={styles.faqs}>
      <h1 className={styles.h1}>
        <span>FAQs </span> - Advanced SEO Techniques
      </h1>
    <div className={styles.cont}>
    <div className={styles.faq}>
      {
        <Faqs
          first={questions}
          iconone={<FaAngleRight />}
          icontwo={<FaAngleDown />}
          classone={styles.test}
          classtwo={styles.questions}
        />
      }
        </div>
    </div>
     
    </div>
  );
}
