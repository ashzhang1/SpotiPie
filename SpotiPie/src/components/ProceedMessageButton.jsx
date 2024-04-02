import React from "react"
import arrow from '../assets/svg/arrow.svg';

export default function ProceedMessageButton(props) {

  return (
    <div className='proceed--message--container'>
        <button className='proceed--message--button'>{props.message}</button>
        <img className="arrow--svg" src={arrow}/>
    </div>
  )
}
