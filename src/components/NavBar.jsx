import {Link} from "react-router-dom";
import {useState} from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav>
            <Link to = "/" className = "nav-logo" onClick = {() => setIsOpen(false)}>Kassandra Eller</Link>
            <div className = {`nav-links ${isOpen ? "open" : ""}`}>
            {/* Editorial work is hidden for the foreseeable future */}
            {/* <Link to = "/editorial">Editorial Work</Link> */}
            <Link to = "/about" onClick = {() => setIsOpen(false)}>About</Link>
            </div>
            <button className = {`hamburger ${isOpen ? "open" : ""}`} onClick = {() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}