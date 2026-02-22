import React, { useContext } from 'react';
import myContext from './context/userContext';
import CustumHook from './context/custumHook';

const Profile = () => {
  const {Usedata} = useContext(myContext);
  console.log(Usedata);
  
  return (
    <>
    <h2>Profile Component</h2>
    <div style={{backgroundColor:"lightgreen",width:"fit-content",height:"250px",display:"flex",flexDirection:"column",justifyContent:"space-around",
      marginBottom:"20px"
    }}>
      
      <h3>Username: {Usedata?.username}</h3>
      <h3>Email: {Usedata?.email}</h3>
      <h3>Password: {Usedata?.password}</h3>
    </div>
    
    </>
  );
};

export default Profile;