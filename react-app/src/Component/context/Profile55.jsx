import { useContext } from "react"
import myContext from "./userContext"

const Profile=()=>{
    const {data}=useContext(myContext)
    return(
        <div>
            <h4>userName:{data.username}</h4>
             <h4>userName:{data.email}</h4>
        </div>
        
    )
    
}
export default Profile;