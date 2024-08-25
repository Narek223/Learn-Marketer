import { useState } from "react";
import pic from "../../../assets/Homepage_Images/Opinion/Frame.png";
import  {slider} from '../../../Services/Data/Opinion/opiniondata'
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import styles from "./opinion.module.scss";
import contactimg from "../../../assets/ContactPageImages/Frame_5.png";

export default function Opinion() {
  let [state, setstate] = useState(0);

  let next = () => {
    setstate(state == slider.length - 1 ? 0 : state + 1);
  };
  let prev = () => {
    setstate(state === 0 ? slider.length - 1 : state - 1);
  };

  return (
    <div className={styles.conteier_4}>
      <h1 className={styles.h1}>
        What <span className={styles.span}> people say</span>
      </h1>
      <div className={styles.opinion_2}>
        <div className={styles.images}>
          <img src={pic} />
          <img src={contactimg} />
        </div>

        <div className={styles.opinion}>
          <div className={styles.text}>
            <div className={styles.stars}>
              <p>{slider[state].name}</p>
              <div className={styles.icons}>
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar className={styles.stars} key={index} />
                ))}
              </div>
            </div>
            <p>{slider[state].p} </p>
            <p className={styles.description}>{slider[state].text} </p>
            <div className={styles.buttons}>
              <button onClick={prev}>
                <FaArrowLeft />
              </button>
              <button onClick={next}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
