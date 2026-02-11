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
                <Link to="/" style={{textDecoration:"none"}}>Home</Link>
                <Link to="/about" style={{textDecoration:"none"}}>About</Link>
                <Link to="/portfolio" style={{textDecoration:"none"}}>Portfolio</Link>
                <Link to="/services" style={{textDecoration:"none"}}>Services</Link>
                <Link to="/contact" style={{textDecoration:"none"}}>Contact</Link>
            </h5>
        </div>
        </div>
        </>
    )
}
export default Navbar1;
