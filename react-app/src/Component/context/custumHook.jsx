import React, { useState } from 'react'
const CustumHook=(c)=>{
    const [X,setX]=useState(c);
    const increment=()=>{
        setX(X+1);
    }
    const decrement=()=>{
        setX(X-1);   
    }
    const reset=()=>{
        setX(0);
    }
    return (
    
        [X,increment,decrement,reset]
        
    )
    
}
export default CustumHook;