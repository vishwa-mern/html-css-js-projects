import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  // button click handle
  const handleClick = (value) => {
    setInput(input + value);
  };
  // clear screen
  const clearInput = () => {
    setInput("");
  };

  // calculate result
  const calculate = () => {
    try {
      setInput(eval(input)); // simple calculation
    } catch {
      setInput("Error");
    }
  };

  


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Calculator</h2>

      <input
        type="text"
        value={input}
        readOnly
        style={{ width: "200px", height: "40px", fontSize: "18px" }}
      />


      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>

      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>

      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>

      <div>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={clearInput}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
    </div>
  );
}

export default Calculator;