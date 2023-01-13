import './Landingpage.css'
import coding from '../img/coding-icon.svg'
import githubIcon from '../img/github-icon.svg'
import reactIcon from '../img/react-icon.svg'
import nodeIcon from '../img/node-icon.svg'
import Navbar from '../components/Navbar/Navbar';
import HeroHeader from '../components/HeroHeader/HeroHeader';
import Footer from '../components/Footer/Footer'



const Landingpage = () => {

    const handleScroll = (event) => {
        const scrollPosition = event.target.scrollingElement.scrollTop;

        console.log("handleScroll");

        const images = document.querySelectorAll("img");

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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                        </article>
                        <article className='card'>
                            <h2>Tech Stack</h2>
                            <p></p>
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
            <Footer />
        </>
    );
};

export default Landingpage;