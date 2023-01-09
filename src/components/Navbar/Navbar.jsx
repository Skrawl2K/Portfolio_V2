import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="navbutton" to="/">Home</Link>
                </li>
                <li>
                    <Link className="navbutton" to="/about">About</Link>
                </li>
                <li>
                    <Link className="navbutton" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};


export default Navbar;