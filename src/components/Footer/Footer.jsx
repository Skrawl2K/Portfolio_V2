import './Footer.css'
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'
import './Footer.css'
import { useState } from 'react';
import { useEffect } from 'react';

const Footer = () => {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    }, []);

    return (
        <div className='FooterBody'>
            {/* <Link className="navbutton" to="/main"><button>Back</button></Link> */}
            <button className={`scroll-to-top ${showScroll ? "show" : ""}`} onClick={scrollTop}>
                <i className="fas fa-angle-up"></i>
                TOP</button>
        </div>
    )
};

export default Footer;