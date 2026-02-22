import CustumHook from "./context/custumHook";
import React from "react";

const Counter = () => { 
    console.log(CustumHook());
    let arr = CustumHook();
    console.log(arr);
    let b=5;
    let [X,increment,decrement,reset] = CustumHook(b);
    console.log(X,increment,decrement,reset);
    let a=[1,2,3,4];
    const [x,y,,z]=a;
    console.log(z);
    return (
        <div style={{backgroundColor:"lightblue",width:"fit-content",height:"200px"}}>
            <h1>Counter</h1>
            <h1>{X}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>  
        </div>
    )
}
export default Counter;