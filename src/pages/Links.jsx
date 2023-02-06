import Navbar from "../components/Navbar/Navbar";
import './Links.css'


const Links = () => {
    return (
        <>
            <Navbar />
            <div className="main">
                <h1 className="headlines ">Contact Links</h1>
                <ul className='iconWrapper'>
                    <a className="LinkWrapper" href='https://github.com/Skrawl2K'><img className='socialIcon1' src='./img/github-mark-white.svg' alt="github"></img>Github</a>
                    <a className="LinkWrapper" href="https://www.linkedin.com/in/kevin-koslowski-39081a262/"><img className='socialIcon2' src='./img/linkedin-svgrepo-com.svg' alt="linkedin"></img>LinkedIn</a>
                    <h2>Or you can find me on "Instaffo.com"</h2>
                </ul>
            </div>
        </>
    )
};

export default Links;