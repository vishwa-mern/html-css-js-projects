import React from 'react'
import './calculator1.css';
import { useState } from 'react';

const Calculator1 = () => {
 const [input,setInput] = useState("");
 const handleClick = (value) => {

    if (input === "Error") {
    setInput(value);
  } else {
    setInput(input + value);
  }
  };

  const clearInput = () => {
    setInput("");
  };

    const calculate = () => {
    try {
        setInput(eval(input).toString());
    } catch {
        setInput("Error");
}
    };



console.log(input)

    return (
        <>

    <div  className='div div1'>
          <h1 className='cal'>Calculator</h1>

    </div >
    <div className='cbig'>
    <div className=" div div2">
        <input type="text" placeholder='0' className='input' value={input} readOnly />
    </div>

    <div className="container">
    
        <button className="btn btn1" onClick={() => clearInput()}>C</button>
        <button className="btn btn2" onClick={() => setInput(input.slice(0, -1))}>DEL</button>
        <button className="btn btn3" onClick={() => handleClick('/')}>/</button>
        <button className="btn btn4" onClick={() => handleClick('*')}>*</button>
    
        <button className='btn btn5' onClick={() => handleClick('7')}>7</button>
        <button className='btn btn6' onClick={() => handleClick('8')}>8</button>
        <button className='btn btn7' onClick={() => handleClick('9')}>9</button>
        <button className='btn btn8' onClick={() => handleClick('-')} >-</button>
      
        
        <button className='btn btn9' onClick={() => handleClick('4')}>4</button>
        <button className='btn btn10' onClick={() => handleClick('5')}>5</button>
        <button className='btn btn11' onClick={() => handleClick('6')}>6</button>
        <button className='btn btn12' onClick={() => handleClick('+')}>+</button>
       
        
        <button className='btn btn13' onClick={() => handleClick('1')}>1</button>
        <button className='btn btn14' onClick={() => handleClick('2')}  >2</button>
        <button className='btn btn15' onClick={() => handleClick('3')}>3</button>
        <button className='btn btn16' onClick={() => calculate()}>=</button>
        
       
        <button className='btn btn17' onClick={() => handleClick('0')}>0</button>
        <button className='btn btn18' onClick={() => handleClick('.')}>.</button>
        
        </div>
          </div>
        </>
        
  )
}

export default Calculator1;