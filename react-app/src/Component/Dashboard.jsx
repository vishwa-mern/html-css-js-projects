import React from 'react';
import { useContext } from 'react';
import myContext from './context/userContext';
const Dashboard=()=>{
    const {myName, myAge} = useContext(myContext);
    return(
        <div style={{backgroundColor:"lightblue",width:"200px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}}> 
            <h4> this is Dashboard component for {myName} and age is {myAge}
            </h4>
        </div>
    )
}
export default Dashboard;