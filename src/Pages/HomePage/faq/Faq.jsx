import React, { useState } from 'react';
import vector from '../../../assets/Vector 28974.png';
import { IoIosArrowDown, IoIosArrowUp }  from "react-icons/io";
import './faq.css';

export default function Faq() {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggle = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const questions = [
    {
      question: "How long is the course?",
      answer: "The duration of the course depends on the specific program you choose. Generally, our courses range from 6 weeks to 6 months."
    },
    {
      question: "When does the next intake start?",
      answer: "The next intake for our courses typically starts at the beginning of each month."
    },
    {
      question: "I'm not sure if this course is suitable for me?",
      answer: "Choosing the right course can be challenging, but we're here to help! Our courses are designed to cater to different skill levels, from beginners to advanced learners."
    },
    {
      question: "How long do I have to complete the course?",
      answer: "The time you have to complete the course varies depending on the specific program you choose. Most of our courses offer flexible completion times, ranging from 6 weeks to 6 months."
    }
  ];

  return (
    <div className='cont'>
      <div className='faq'>
        <h1>FAQ</h1>
        {questions.map((item, index) => (
          <div key={index} className='line'>
            <h2>{item.question}</h2>
            <p onClick={() => toggle(index)}>{visibleIndex === index ? <IoIosArrowDown /> : <IoIosArrowUp/> }</p>
            {visibleIndex === index && <h2 className='question'>{item.answer}</h2>}
          </div>
        ))}
      </div>
      <img src={vector} alt="vector" />
    </div>
  );
}
