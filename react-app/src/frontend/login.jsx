import React, { useState } from "react";

function Login(props){
const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Login form submitted");
    try{
        const res=await fetch("http://localhost:4000/login",{    
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },//
            body:JSON.stringify({
                email,
                password
            })
        });
        const data = await res.json();
        console.log("Response from server:",data);
    }    catch(err){
        console.error("Error submitting form:",err);
    }
}
const [email,setEmail] = useState();
const [password,setPassword] = useState();  

    return(
        <>
        <div>
            <h1>Login</h1>
            <form className="form">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={ (e) => {
                    e.preventDefault();
                    handleSubmit(e);
                if(email && password){
                    alert("Login successful");
                     
                }
                else{
                    alert("Please enter your correct email and password to use create account");
                }
            }
        }>Login</button>   
                <button type="create_account" onClick={ (e) => {
                    e.preventDefault();
                    props.setIsloggedin(true);
                }}>create_account</button>    
            </form>
        </div>
        </>
    )
}
export default Login;