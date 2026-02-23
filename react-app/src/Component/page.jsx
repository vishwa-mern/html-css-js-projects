import { useContext } from "react"
import myContext from "./context/userContext"

const Page=()=>{
    const {data,setData}=useContext(myContext)
    function Handle(e){
    //  console.log(setEmail((prev)=>({...prev,[e.target.name]:e.target.value})))
       setData((prev)=>({...prev,[e.target.name]:e.target.value}))
        console.log(data);
        //console.log((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    
    return(<>
        <h3>This is home page</h3>
        <form action="" style={{display:"flex",flexDirection:"column",width:"300px",gap:"10px"}}>
            <input name="username" type="text" placeholder="enter your name"  onChange={(e) => Handle(e)}/>
            <input name="email" type="email" placeholder="Email" onChange={(e) => Handle(e)}/>
        </form>
        </>
    )

}
export default Page