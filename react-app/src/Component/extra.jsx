import "./extra.css"
function Extra(props){
   console.log(props.data);
    return(
        <>
            <h1>
                {/* {props.title} will be held in {props.year} */}
                {/* <ul>
                    <li>India</li>
                    <li>Australia</li>
                    <li>England</li>    
                </ul> */}
            </h1> 
            
          < > 
            <div className="file" >
                <h1>
                    id:{props.data.id}
                </h1>
                <h2> 
                  name:{props.data.first_name}
                </h2>
                <h3>
                    email:{props.data.email}
                </h3>
                <h4>
                    gender:{props.data.gender}
                </h4>
                <h5>
                    ip address:{props.data.ip_address}
                </h5>
                   
            </div>
            </>
            </>
        )
}
export default Extra