import React from 'react'
import {
    FaFacebookF,
    FaTelegramPlane,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa";

export default function WorkersCard({ imgSrc, name, position,worker }) {

    const socialIcons = [
        { id:1,icon: FaFacebookF },
        {id:2, icon: FaTelegramPlane },
        {id:3, icon: FaLinkedinIn },
        {id:4, icon: FaInstagram },
        {id:5, icon: FaYoutube },
      ];

  return (
        <div className={worker}>
          <img src={imgSrc} alt={name} />
          <ul>
            {socialIcons.map(({ icon: Icon, id:index }) => (
              <li key={index}><Icon /></li>
            ))}
          </ul>
          <h1>{name}</h1>
          <p>{position}</p>
        </div>
      );
}
