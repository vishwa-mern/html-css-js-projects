import React from 'react';
import myContext from './userContext';
const UserContextProvider = (props) => { //const UserContextProvider = ({children}) => {
let myName = "Vishwajeet";
let myAge = 24;
return (
    <myContext.Provider value={{myName, myAge}}>
        {props.children}
        {/* {children} */}
    </myContext.Provider>
)
}
export default UserContextProvider;