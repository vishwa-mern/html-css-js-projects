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
                <Link to="/" style={{textDecoration:"none"}} className="nav-link">Home</Link>
                <Link to="/about" style={{textDecoration:"none"}} className="nav-link">About</Link>
                <Link to="/portfolio" style={{textDecoration:"none"}} className="nav-link">Portfolio</Link>
                <Link to="/services" style={{textDecoration:"none"}} className="nav-link">Services</Link>
                <Link to="/contact" style={{textDecoration:"none"}} className="nav-link">Contact</Link>
            </h5>
            <button className="btn">Login</button>
        </div>
        </div>
        </>
    )
}
export default Navbar1;
