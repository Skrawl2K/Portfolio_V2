import './Landingpage.css'
import coding from '../img/coding-icon.svg'
import githubIcon from '../img/github-icon.svg'
import reactIcon from '../img/react-icon.svg'
import nodeIcon from '../img/node-icon.svg'
import Navbar from '../components/Navbar/Navbar';
import HeroHeader from '../components/HeroHeader/HeroHeader';
// icon imports
import html from '../img/tech/HTML.svg'
import css from '../img/tech/CSS.svg'
import express from '../img/tech/EXPRESS.svg'
import figma from '../img/tech/FIGMA.svg'
import github from '../img/tech/Github-icon.png'
import js from '../img/tech/JavaScript-logo.svg'
import mongodb from '../img/tech/MONGODB.svg'
import node from '../img/tech/nodejs.svg'
import react from '../img/tech/REACT_JS.svg'
import vscode from '../img/tech/VSCODE.svg'
import bootstrap from '../img/tech/Bootstrap_logo.png'
import webflow from '../img/tech/webflow_logo.svg'



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
                        <article className='card'>
                            <h2>Über mich.</h2>
                            <p>Mein Name ist Kevin Koslowski, 32 Jahre alt. Aktuell wohne ich mit meiner Frau und meinen 2 Söhnen in der Stadt Siegen.
                                ich bin ab dem 22.02.2023 zertifizierter Junior Full Stack Webdeveloper.
                            </p>
                        </article>

                        <article className='card'>
                            <h2>Tech Stack</h2>
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
                        <article className='card'>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                        </article>
                        <article className='card'>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                        </article>
                        <article className='card'>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                        </article>
                        <article className='card'>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                        </article>
                    </section>
                </div>
            </div>

        </>
    );
};

export default Landingpage;