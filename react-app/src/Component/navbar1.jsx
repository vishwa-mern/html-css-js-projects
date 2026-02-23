import { Link } from "react-router-dom";    
import "./navbar1.css"
function Navbar1(){
    return(
        <>
        <div className="container">
        <div className="app-name">
            <h3>Coding App</h3>
        </div>
        <div className="nav-item">
            <h5>
                <Link to="/home" style={{textDecoration:"none"}} className="nav-link">Home</Link>
                <Link to="/about" style={{textDecoration:"none"}} className="nav-link">About</Link>
                <Link to="/portfolio" style={{textDecoration:"none"}} className="nav-link">Portfolio</Link>
                <Link to="/services" style={{textDecoration:"none"}} className="nav-link">Services</Link>
                <Link to="/Extra" style={{textDecoration:"none"}} className="nav-link">Extra</Link>
            </h5>
            <button className="btn">Login</button>
        </div>
        </div>
        </>
    )
}
export default Navbar1;
