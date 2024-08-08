import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/FooterImage/log.png";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className={styles.footer}>
          <img src={logo} />

          <h1>+374 93 55 55 66</h1>
          <h1>Halabyan 18/1</h1>
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTelegramPlane />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
          <p>info@Marketer.am</p>
        </div>
      </footer>
    </div>
  );
}
