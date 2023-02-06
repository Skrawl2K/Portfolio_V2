import './Landingpage.css'
import coding from '../img/coding-icon.svg'
import githubIcon from '../img/github-icon.svg'
import reactIcon from '../img/react-icon.svg'
import nodeIcon from '../img/node-icon.svg'
import Navbar from '../components/Navbar/Navbar';
import HeroHeader from '../components/HeroHeader/HeroHeader';
import Carousel from '../components/PictureCarousel/PictureCarousel'
// icon imports
import html from '../img/tech/HTML.svg'
import css from '../img/tech/CSS.svg'
import express from '../img/tech/EXPRESS.svg'
import figma from '../img/tech/FIGMA.svg'
import github from '../img/tech/github-mark-white.svg'
import js from '../img/tech/JavaScript-logo.svg'
import mongodb from '../img/tech/MONGODB.svg'
import node from '../img/tech/nodejs.svg'
import react from '../img/tech/REACT_JS.svg'
import vscode from '../img/tech/VSCODE.svg'
import bootstrap from '../img/tech/Bootstrap_logo.png'
import webflow from '../img/tech/webflow_logo.svg'
import Footer from '../components/Footer/Footer'
import AboutCard from '../components/AboutCard/AboutCard'




const Landingpage = () => {

    const handleScroll = (event) => {
        const scrollPosition = event.target.scrollingElement.scrollTop;

        console.log("handleScroll");

        const images = Array.from(document.getElementsByClassName("BackgroundIcon")).filter(element => element.classList.contains("BackgroundIcon"));

        console.log("images", images);

        images.forEach((element) => {
            element.style.transform = `translate(0, ${scrollPosition / 10}px)`;
        });
    };


    window.addEventListener("scroll", handleScroll);


    return (
        <>

            <div>
                <HeroHeader />
                <Navbar />
                <div>

                    <img className='BackgroundIcon' alt='code-background-icon' src={coding} />
                    <img className='BackgroundIcon' alt='github-background-icon' src={githubIcon} />
                    <img className='BackgroundIcon' alt='react-background-icon' src={reactIcon} />
                    <img className='BackgroundIcon' alt='node.js-background-icon' src={nodeIcon} />
                    <section class="home-content">
                        <article className='card about'>
                            <h2 className='headlines'>About me.</h2>
                            <AboutCard />
                        </article>

                        <article className='card'>
                            <h2 className='headlines'>Tech Stack</h2>
                            <div className='icon-card'>
                                <div>
                                    <img className='icon' src={html} alt='html'></img>
                                    <p>HTML</p>
                                </div>
                                <div>
                                    <img className='icon' src={css} alt='css'></img>
                                    <p>CSS</p>
                                </div>
                                <div>
                                    <img className='icon' src={bootstrap} alt='bootstrap'></img>
                                    <p>Bootstrap</p>
                                </div>
                                <div>
                                    <img className='icon' src={js} alt='JavaScript'></img>
                                    <p>JavaScript</p>
                                </div>
                                <div>
                                    <img className='icon' src={webflow} alt='webflow'></img>
                                    <p>Webflow</p>
                                </div>
                                <div>
                                    <img className='icon' src={github} alt='github'></img>
                                    <p>Github</p>
                                </div>
                                <div>
                                    <img className='icon' src={react} alt='react'></img>
                                    <p>React.js</p>
                                </div>
                                <div>
                                    <img className='icon' src={node} alt='node'></img>
                                    <p>Node.js</p>
                                </div>
                                <div>
                                    <img className='icon' src={express} alt='express'></img>
                                    <p>Express.js</p>
                                </div>
                                <div>
                                    <img className='icon' src={mongodb} alt='mongodb'></img>
                                    <p>MongoDB</p>
                                </div>
                                <div>
                                    <img className='icon' src={figma} alt='figma'></img>
                                    <p>Figma</p>
                                </div>
                                <div>
                                    <img className='icon' src={vscode} alt='vscode'></img>
                                    <p>VSCode</p>
                                </div>
                            </div>
                        </article>
                        {/* <article className='card'>
                            <h2 className='headlines'>The Past.</h2>
                            <p>I have worked as a 2nd level IT Engineer in the past and also in nursing for a few years. So I like to be a team player but also able to work solo and achieve the set goals.
                            </p>
                        </article> */}
                        <article className='card'>
                            <h2 className='headlines'>Whats next ?</h2>
                            <p>If I find the time I am currently still in my own direction to train in the areas of Kotlin & Ansible. Kotlin I have taken up because I find this programming language very interesting and it also has more and more application areas. Ansible, on the other hand, belongs to a topic package that I still want to dedicate myself to. In addition, AWS, Docker, Jenkins and a few other topics.
                            </p>
                        </article>
                        <article className='card'>
                            <h2 className='headlines'>Projects!</h2>
                            <Carousel />

                        </article>
                        <article className='card'>
                            <h2 className='headlines'>Lets Talk !</h2>
                            <p>You can reach me via the contact form under Contact or on LinkedIn & Instaffo.</p>
                        </article>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Landingpage;