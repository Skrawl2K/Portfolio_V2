import './Footer.css'
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'

const Footer = () => {
    return (
        <div>
            <p></p>
            <Link className="navbutton" to="/main"><button>Back</button></Link>
        </div>
    )
};

export default Footer;