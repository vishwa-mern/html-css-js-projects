import React, { useState } from 'react'
import './Animation.css'


function Animation() {
    let [time,setTime]=useState(0)
    let x=setInterval(() => {
        setTime(time+1)
    },1000);



    setTimeout(()=>{
        clearInterval(x);
    },5000);

  return (
    <div>
      <h1>Animation</h1>
      <div className='box'>
        <div className='circle'></div>
      </div>
      <h1>{time}</h1>
    </div>
  )
}

export default Animation
