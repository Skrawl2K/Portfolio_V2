import React, { useState, useEffect } from 'react';
import './PictureCarousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['./img/Cheatsheet3.0.png', './img/Poke_API.png', './img/furniture_server.png', './img/Cheatsheet-fetches.png', './img/Github-login.png'];

    const carouselInfiniteScroll = () => {
        if (currentIndex === images.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll(); }, 4000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <div className='carousel-container'>
                {images.map((item, index) => {
                    return <img src={item} alt="img" className='carousel-item'
                        style={{ transform: `translate(-${currentIndex * 100}%)` }}
                        key={index} />;
                })}
            </div>
            <ul className='list'>
                <li><a className='listItem' href='https://github.com/Skrawl2K/Cheatsheet_V3_Frontend.git'>Cheatsheet 3.0 Frontend</a></li>
                <li><a className='listItem' href='https://github.com/Skrawl2K/Cheatsheet_V3_Backend.git'>Cheatsheet 3.0 Backend</a></li>
                <li><a className='listItem' href='https://github.com/Skrawl2K/Furniture-Server.git'>Project Furniture Backend</a></li>
                <li><a className='listItem' href='https://github.com/Marius-Elting/PokeDex.git'>Project Poke API (group project)</a></li>
                <li><a className='listItem' href='https://yourtoponepokedex.netlify.app/'>Live Poke API (group project)</a></li>
                <li><a className='listItem' href='https://github.com/emily-s-codes/frontend_abschlussprojekt.git'>F.E. final project (group project)</a></li>
            </ul>
        </>
    );
};

export default Carousel;
