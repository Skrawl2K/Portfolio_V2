import Navbar from "../components/Navbar/Navbar";
import './Links.css'


const Links = () => {
    return (
        <>
            <Navbar />
            <h1 className="headlines ">Contact Links</h1>

            <ul className='iconWrapper'>
                <a href='https://github.com/Skrawl2K'><img className='socialIcon1' src='./img/github-mark-white.svg' alt="github"></img>Giuthub</a>

                <a href="https://www.linkedin.com/in/kevin-koslowski-39081a262/"><img className='socialIcon2' src='./img/linkedin-svgrepo-com.svg' alt="linkedin"></img>LinkedIn</a>
                <img></img>
            </ul>

        </>
    )
};

export default Links;