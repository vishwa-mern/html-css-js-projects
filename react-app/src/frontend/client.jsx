import { useEffect } from "react";
import { useState } from "react";
function Client(){
    const [data, setdata] = useState({});
    async  function fetchData(){
        try{
            let response = await fetch("http://localhost:4000/data");
            let result = await response.json(); // Assuming the backend returns JSON data
            console.log("Fetched data:",result);
            setdata(result);
        }
        catch(error){
            console.log("Error fetching data:", error);
        }

    }
    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <div>
            <h1>Client Component</h1>
            <h2>Data from backend:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )

}
export default Client;