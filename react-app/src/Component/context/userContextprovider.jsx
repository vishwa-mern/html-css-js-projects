// import React from 'react';
// import myContext from './userContext';
// import { useState } from 'react';
// const UserContextProvider = (props) => { //const UserContextProvider = ({children}) => {
// //let myName = "Vishwajeet";
// //let myAge = 24;
// const [myName, setMyName] = useState("Vishwajeet");
// const [myAge, setMyAge] = useState(24);
// const [Usedata, setUsedata] = useState();

// return (
//     <myContext.Provider value={{myName, myAge, Usedata, setUsedata}}>
//         {props.children}
        
//         {/* {children} */}
//     </myContext.Provider>
// )
// }
// export default UserContextProvider;



// import mycontext from "./userContext";
// import React, { useState } from "react";
// const UserContextProvider=(props)=>{
//     const [name,setName]=useState("vishwajeet");
//     console.log(name);
//     return(
//         <myContext.Provider value={{name,setName}} >
//           {props.children}
//         </myContext.Provider>
//     )
// }
// export default UserContextProvider
import React, { useState } from "react";
import myContext from "./userContext";   // yahan import karna hai

const UserContextProvider = (props) => {
  //const [name, setName] = useState("vishwajeet");
 // const [email,setEmail]=useState('')
 const [data,setData]=useState({})

  return (
    <myContext.Provider value={{data,setData}}>
      {props.children}
    </myContext.Provider>
  );
};

export default UserContextProvider;