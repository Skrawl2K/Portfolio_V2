import { Link } from "react-router-dom";
import SplashScreen from "../components/SplashScreen/withSplashScreen";
import './OnboardingPage.css'

const Onboarding = () => {
    return (
        <>
            <SplashScreen />
            <div className="onboarding">
                <article className="headline">
                    <h2>to my Portfolio</h2>
                </article>
                <img className="memoji" alt="memoji-Skrawl2K" src='../img/Kev-sticker.png'></img>
                <Link to={'/main'}><button>next</button></Link>
            </div>
        </>

    )
}

export default Onboarding;