import React from "react";
import vector from '../../../assets/Homepage_Images/Faq/Vector 28974.png'
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { questions } from "../../../Services/Data/Faqs/faqsData";
import styles from "./faq.module.scss";
import Faqs from "./Faqs";

export default function Faq() {

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
