import React from 'react';
import myContext from './userContext';
import { useState } from 'react';
const UserContextProvider = (props) => { //const UserContextProvider = ({children}) => {
//let myName = "Vishwajeet";
//let myAge = 24;
const [myName, setMyName] = useState("Vishwajeet");
const [myAge, setMyAge] = useState(24);
const [Usedata, setUsedata] = useState();

return (
    <myContext.Provider value={{myName, myAge, Usedata, setUsedata}}>
        {props.children}
        
        {/* {children} */}
    </myContext.Provider>
)
}
export default UserContextProvider;