import './AboutCard.css'

const AboutCard = () => {
    return (
        <div className="row">
            <img className='imgSize' src='./img/Kev_laptop.png'></img>
            <p className='text'>Hi & welcome to my Portfolio. Here you can find some screenshots & links to my projects & some additional information about me.
            </p>
            {/* <ul className='iconWrapper'>
                <a href='https://github.com/Skrawl2K' >
                    <img className='socialIcons' src='./img/github-mark-white.svg'></img>
                </a>
                <a href=''>
                    <img className='socialIcons' src='./img/linkedin-svgrepo-com.svg'></img>
                </a>
                <img></img>
            </ul> */}
        </div >
    )
}

export default AboutCard;