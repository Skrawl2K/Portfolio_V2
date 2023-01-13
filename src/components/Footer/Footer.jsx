import './Footer.css'
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'
import './Footer.css'

const Footer = () => {
    return (
        <div className='FooterBody'>
            <p></p>
            <Link className="navbutton" to="/main"><button>Back</button></Link>
        </div>
    )
};

export default Footer;