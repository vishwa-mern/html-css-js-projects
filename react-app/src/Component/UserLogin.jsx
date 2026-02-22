import myContext from "./context/userContext";
import "./userlogin.css"
import { useState } from "react";
import { useContext } from "react";
import Counter from "./counter";

const Login=()=>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {Usedata, setUsedata} = useContext(myContext);
    //console.log(Usedata);
    //console.log(setUsedata);
   // console.log(username,email,password);
    
    return (
        <div>
            <h2>Login Component</h2>
            <form className="login-form" onSubmit={(e)=>{
                e.preventDefault();
                setUsedata({username,email,password});
            }}>
                
                <input type="text" id="username" name="username" placeholder="enter your username" onChange={(e)=>setUsername(e.target.value)}/> 
                 
                <input type="email" id="email" name="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/> 
                
                <input type="password" id="password" name="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)}/> 
            
                <input type="submit" id="button" value="Login" />    


            </form>
            <div style={{margin:"20px"}}>
                <Counter/>

            </div>
        </div>
    )
}
export default Login;