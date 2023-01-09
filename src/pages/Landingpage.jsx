import './Landingpage.css'
import coding from '../img/coding-icon.svg'
import githubIcon from '../img/github-icon.svg'
import reactIcon from '../img/react-icon.svg'

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
                <img src={coding} />
                <img src={githubIcon} />
                <img src={reactIcon} />
                <section class="home-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius dolorum fuga pariatur? Facilis, magni nostrum aperiam illo provident officiis dicta qui exercitationem vero sint dolorum perspiciatis, beatae veniam nulla doloribus natus. Fuga suscipit fugiat accusamus, expedita sequi mollitia aliquam quos, labore similique rem quia, laborum qui. Ipsa, facere quas.</p>
                    <br />
                    <br />
                </section>
            </div>
        </>
    );
};

export default Landingpage;