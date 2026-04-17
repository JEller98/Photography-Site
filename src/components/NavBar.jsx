import {Link} from "react-router-dom";
import {useState, useEffect, useRef} from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    
    //focus trap inside the hamburger menu
    useEffect(() => {
        if(!isOpen) {
            return;
        }

        const nav = navRef.current;
        const focusable = nav.querySelectorAll("a, button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        function handleKeyDown(e) {
            if(e.key === "Escape") {
                setIsOpen(false);
                return;
            }

            if(e.key !== "Tab") {
                return;
            }

            if(e.shiftKey) {
                if(document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
            else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }

        nav.addEventListener("keydown", handleKeyDown);
        return () => nav.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    //close on outside click
    useEffect(() => {
        if(!isOpen) {
            return;
        }

        function handleClickOutside(e) {
            if(navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <nav ref = {navRef}>
            <Link 
            to = "/" className = "nav-logo" onClick = {() => setIsOpen(false)}>Kassandra Eller</Link>
            <button 
            aria-label = "Toggle navigation menu"
            aria-expanded = {isOpen}
            className = {`hamburger ${isOpen ? "open" : ""}`}
            onClick = {() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div aria-hidden = {!isOpen} className = {`nav-links ${isOpen ? "open" : ""}`}>
                <Link to = "/work" tabIndex = {isOpen || window.innerWidth > 1200 ? 0 : -1} onClick = {() => setIsOpen(false)}>Portfolio</Link>
                <Link to = "/exhibits" tabIndex = {isOpen || window.innerWidth > 1200 ? 0 : -1} onClick = {()  => setIsOpen(false)}>Exhibits</Link>
                <Link to = "/about" tabIndex = {isOpen || window.innerWidth > 1200 ? 0 : -1} onClick = {() => setIsOpen(false)}>About</Link>
            
                {/* Editorial work is hidden for the foreseeable future */}
                {/* <Link to = "/editorial">Editorial Work</Link> */}
            </div>
        </nav>
    );
}