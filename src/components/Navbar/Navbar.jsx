import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 190) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = `navbar ${isSticky ? 'sticky' : ''}`;


    return (
        <div className="NavBody">
            <nav className={navbarClass}>
                <ul>
                    <li>
                        <Link className="navbutton" to="/main">Home</Link>
                    </li>
                    <li>
                        <Link className="navbutton" to="/about">Links</Link>
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
