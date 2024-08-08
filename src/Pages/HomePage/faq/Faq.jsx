import React from "react";
import vector from '../../../assets/Homepage_Images/Faq/Vector 28974.png'
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

import styles from "./faq.module.scss";
import Faqs from "./Faqs";

export default function Faq() {
  const questions = [
    {
      id: 1,
      question: "How long is the course?",
      answer:
        "The duration of the course depends on the specific program you choose. Generally, our courses range from 6 weeks to 6 months.",
    },
    {
      id: 2,
      question: "When does the next intake start?",
      answer:
        "The next intake for our courses typically starts at the beginning of each month.",
    },
    {
      id: 3,
      question: "I'm not sure if this course is suitable for me?",
      answer:
        "Choosing the right course can be challenging, but we're here to help! Our courses are designed to cater to different skill levels, from beginners to advanced learners.",
    },
    {
      id: 4,
      question: "How long do I have to complete the course?",
      answer:
        "The time you have to complete the course varies depending on the specific program you choose. Most of our courses offer flexible completion times, ranging from 6 weeks to 6 months.",
    },
  ];

  return (
    <div className={styles.cont}>
      <div className={styles.faq}>
        <h1>FAQ</h1>

        {
          <Faqs
            object={questions}
            classone={styles.line}
            classtwo={styles.question}
            iconone={<FaArrowRight />}
            icontwo={<IoIosArrowDown />}
          />
        }
      </div>
      <img src={vector} alt="vector" />
    </div>
  );
}
