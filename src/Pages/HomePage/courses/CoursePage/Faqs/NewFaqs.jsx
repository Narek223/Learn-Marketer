import React from "react";
import { FaAngleDown, FaArrowRight} from "react-icons/fa";
import Faqs from "../../../faq/Faqs";
import styles from "./faqs.module.scss";
import { questionsandAnswers } from "../../../../../Services/Data/Faqs/faqsData";
export default function NewFaqs() {


  return (
    <div className={styles.faqs}>
      <h1 className={styles.h1}>
        <span>FAQs </span> - Advanced SEO Techniques
      </h1>
    <div className={styles.cont}>
    <div className={styles.faq}>
      {
        <Faqs
          object={questionsandAnswers}
          iconone={< FaArrowRight />}
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
