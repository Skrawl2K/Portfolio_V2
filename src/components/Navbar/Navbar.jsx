import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="NavBody">
            <nav>
                <ul>
                    <li>
                        <Link className="navbutton" to="/main">Home</Link>
                    </li>
                    <li>
                        <Link className="navbutton" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="navbutton" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};


export default Navbar;