import React from 'react'
import style from './secondary_button.module.scss'


export default function Secondary_button({children}) {

  return (
    <button className={style.secendary_button}>
{children}
    </button>
  )
}
