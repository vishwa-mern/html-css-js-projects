import { useState } from "react";
const From = ()=>{
    // const [name,setName]=useState("")
    // const [email,setEmail]=useState("")
    
    // const data={
    //     name,
    //     email
    // }

    const [data,setData]=useState("")
     function handleClick(e){
        setData((prev)=>({...prev,[e.target.name]:e.target.value}))
        console.log(data);
     }
    return(
        <div style={{margin:"150px", height:"1000px"}}>
            <h1>form page</h1>
            {/* <h1>{data.name}</h1>
            <h1>{data.email}</h1> */}
            <div>
                {/* <form action="" style={{display:"flex",flexDirection:"column", margin:"10px"}}>
                
                    <input name="name"type="name" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
                    <br /><br /><br />
                    <input name="email" type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value) }/>
                </form> */}
                <form action="" style={{display:"flex",flexDirection:"column", margin:"10px"}}>
                   
                     
                
                    <input name="name"type="name" placeholder="name" onChange={(e)=>handleClick(e)}/>
                    <br /><br /><br />
                    <input name="email" type="email" placeholder="email" onChange={(e)=>handleClick(e)}/>
                </form>
            </div>
        </div>
    )
}
export default From