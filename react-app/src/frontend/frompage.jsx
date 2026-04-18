import React, { useState } from "react";
import "./frompage.css"
const From_page = (props) => {
    const handleSubmit = async(e) => {
     
        console.log("Form submitted");
        try{
        const res=await fetch("http://localhost:4000/",{    
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },//
            body:JSON.stringify({
                first_name,
                last_name,
                email,
                password
            })
        });
        const data = await res.json();
        console.log("Response from server:",data);
    }   catch(err){
        console.error("Error submitting form:",err);

    }
}
const [first_name,setFirstName] = useState();
const [last_name,setLastName] = useState();
const [email,setEmail] = useState();
const [password,setPassword] = useState();


    return(
        <div>
            <h1>From Page</h1> 
          <form className="form">
                <input type="name" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="name" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="login" onClick={() => {  
                    handleSubmit();
                
                }}>Create_Account</button>    
          </form>
        </div>
    )
}
export default From_page