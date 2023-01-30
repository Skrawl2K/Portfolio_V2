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
import Footer from '../components/Footer/Footer'



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
                            <h2 className='headlines'>About me.</h2>
                            <p>Mein Name ist Kevin Koslowski, 32 Jahre alt. Aktuell wohne ich mit meiner Frau und meinen 2 Söhnen in der Stadt Siegen.
                                ich bin ab dem 22.02.2023 zertifizierter Junior Full Stack Webdeveloper.
                            </p>
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
                        <article className='card'>
                            <h2 className='headlines'>The Past.</h2>
                            <p>Ich habe in der Vergangenheit als 2nd Level IT Engineer gearbeitet und einige Jahre auch in der Krankenpflege.
                                Ich bin also gerne ein Teamplayer aber auch in der Lage solo zu arbeiten und die gesetzten Ziele zu erreichen.
                            </p>
                        </article>
                        <article className='card'>
                            <h2 className='headlines'>Whats next ?</h2>
                            <p>Wenn ich die Zeit finde bin ich aktuell mich noch in eigen Regie am fortbilden in den Bereichen Kotlin & Ansible.
                                Kotlin habe ich aufgegriffen da ich diese Programmiersprache sehr interessant finde und diese auch immer mehr Anwendungsbereiche hat.
                                Ansible gehört im gegensatz zu einem Themen Packet dem ich mich noch widmen will. Dazu kommen noch AWS, Docker, Jenkins und ein paar weitere Themen
                            </p>
                        </article>
                        <article className='card'>
                            <h2 className='headlines'>Projects!</h2>
                            <p>W.I.P.</p>
                        </article>
                        <article className='card'>
                            <h2 className='headlines'>Lets Talk !</h2>
                            <p>Man kann mich über das Kontaktformular unter Contact erreichen oder unter LinkedIn & Xing.</p>
                        </article>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Landingpage;