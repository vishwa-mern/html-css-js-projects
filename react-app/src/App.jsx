// import { useState } from "react";
// import Course from "./Component/course";
// import Time from "./Component/time";
// import Navbar1 from "./Component/navbar1";

// function App() {
//  const name="Vishwajeet";
//  const friends=["vedant ","vaibhav ","aarushi ","satyarth ","pratik "];
//  let count=0;
//  const fruits = (name) =>{
//   alert(name)
//  }
//  const [count1, setCount1] =useState(0);
//   return (
//     <>
    
//     <div>
//       <h1>
//         Hallo my name is {name}
//         <br />
       
//       </h1>
//       <h3>
//         My friends are:{friends.join(",")}
//         {friends[1]}
//        <ol>
//         my friends are: 
//          {
//          friends.map((friend,index)=> {
//           return <li key = {index}>{friend}</li> 
//         })
//         } 
// </ol>
//       </h3>
//       {Learn()}
//        <Learn/>
//         <button onClick={() => fruits("apple")}>Click me</button>
//         <button onClick={()=>Click()}>Click me</button>
//         <button onClick={()=>{count++; console.log("count:", count);}}>Click</button>   
//         <button onClick={()=>setCount1(count1+1)}>Click me</button>
//         <h1>Count value is: {count1}</h1>
//         <Time/>
//        <Click/>
//     </div>
//     </>
//   );
// }
// function Learn(){
//   return(
    
//     <div>
//       <Course/>
//       <h1>
//          <ul>
//           <li>
//               i am learning react js.
//           </li>
//          </ul>
//       </h1>
//     </div>
//   )
// }
//   function Click(){
  
//    return (
//     <div>
//       <h1>
//         hello world
//       </h1>
//       <Count/>
//     </div>
//    )
// }
// function Count(){
//   const [count, setCount] = useState(0);
//   return (
//     <>
//     <div>
//       <h1>{count}</h1>
//       <button onClick={
//         ()=>setCount(count+1)
//       } >clicki</button>
//       {
//       count === 0 ? <h1>condition 0</h1> 
//       :count ===1 ?<h1>condition 1</h1>
//       :count ===2 ? <h1>condition2</h1>
//       :count ===3 ?<h1>condition3</h1>
//       :count ===4 ?<h1>condition4</h1>
//       :count ===5 ?<h1>condition5</h1>
//       :count ===6 ?<h1>condition6</h1>
//       :count ===7 ?<h1>condition7</h1>
//       :count ===8 ?<h1>condition8</h1>
//       :count ===9 ?<h1>condition9</h1>
//       :<h1>condition10</h1>
//       } 
//     </div>
//     <div>
//       <Navbar1 />
//     </div>
//     </>
//     )
// }
import Effect from "./Component/useEffect";

function App(){
  return(
    <>
    <Effect/>
    </>
  )
}
export default App