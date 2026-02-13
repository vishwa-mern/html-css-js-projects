import { use, useEffect } from "react";
import { useState } from "react";

function Effect(){

const [count,setCount] =useState(0);

    useEffect(()=>{
        console.log("useEffect called");
    },[])   
    return(
        <>
        <h1>Use Effect</h1>
        <h2>{count}</h2>
        <button onClick={/*() => setCount(count+1)*/ ()=>setCount(count===10?0:count+1)}>Click me</button>
        
        </>

    )}
export default Effect