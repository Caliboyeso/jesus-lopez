import React from 'react';
import './css/home.css';

const Home = () => {
    const HomeButton = () => {
        // Desktop
        if (window.matchMedia('(min-width: 1280px)').matches) {
            window.scrollTo({top: 695, behavior: 'smooth'});
        }
    }
    return (
        <div className='Home-section'>
            <div className='Home-main-div'>
                <style>@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');</style>
                <h1 className='Home-header'>Welcome to Jesus' Portfolio</h1>
                <button className='Home-btn' id='Home-btn'><h1 id='Home-btn-text' onClick={HomeButton}>Explore</h1></button>
            </div>
        </div>
    )
};

export default Home;