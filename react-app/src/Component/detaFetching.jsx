import { useState } from "react";
import { useEffect } from "react";

function DataFetching(){
    const [data, setdata] = useState({});
    let apiURL = "https://official-joke-api.appspot.com/random_joke";
  async  function fetchData(){
    
    try{
        let response = await fetch(apiURL);
        let result = await response.json();//converting response to json format
        console.log("Fetched data:", result);
        setdata(result);
    }catch(error){
        console.log("Error fetching data:", error);
    }
}
useEffect(()=>{
    fetchData();
},[])

 return(
    <div>
      <h1>
        Data Fetching 
      </h1>
      <div className="data-container">
       <h2> Data:{data.id}</h2>
        <h2> Type:{data.type}</h2>
        <h2>Joke: {data.setup}</h2>
        <h3>Punchline: {data.punchline}</h3>
        </div>
    </div>
 )   
}
export default DataFetching