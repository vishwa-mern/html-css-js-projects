import { useState } from "react"
import Course from "./Course"
function App() {
 const name="Vishwajeet"
 const friends=["vedant ","vaibhav ","aarushi ","satyarth ","pratik "]
 let count=0;
 const fruits = (name) =>{
  alert(name)
 }
 
 const [count1, setCount1] = useState(0);
  return (
    <div>
      <h1>
        Hallo my name is {name}
        <br />
       
      </h1>
      <h3>
        My friends are:{friends.join(",")}
        {friends[1]}
       <ol>
        my friends are: 
         {
         friends.map((friend,index)=> {
          return <li key = {index}>{friend}</li>
         
        })
        } 
</ol>
      </h3>
      {Learn()}
       <Learn/>
        <button onClick={() => fruits("apple")}>Click me</button>
        <button onClick={()=>Click()}>Click me</button>
        <button onClick={()=>{count++; console.log("count:", count);}}>Click</button>
        <button onClick={()=>setCount1(count1+1)}>Increment Count</button>
        <h1>Count value is: {count1}</h1>
       
    </div>
  )
}
function Learn(){
  return(
    
    <div>
      <Course/>
      <h1>
         <ul>
          
          <li>
              i am learning react js.
          </li>
         </ul>
      </h1>
    </div>
  )
}

export default App



  function Click(){
  
   return (
    <div>
      <h1>
        hello world
      </h1>
    </div>
   )
}
