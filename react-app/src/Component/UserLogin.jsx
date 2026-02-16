import "./userlogin.css"
import { useState } from "react";
const Login=()=>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(username,email,password);
    return (
        <div>
            <h2>Login Component</h2>
            <form className="login-form">
                
                <input type="text" id="username" name="username" placeholder="enter your username" onChange={(e)=>setUsername(e.target.value)}/> 
                 
                <input type="email" id="email" name="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/> 
                
                <input type="password" id="password" name="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}/> 
            
                <input type="submit" id="button" value="Login" />    

            </form>
        </div>
    )
}
export default Login;