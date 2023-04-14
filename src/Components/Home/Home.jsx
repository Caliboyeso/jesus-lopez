import React from 'react';
import './css/home.css';

const Home = () => {
    const HomeButton = () => {
        // Desktop - 1920px
        if (window.matchMedia('(min-width: 1920px)').matches) {
            window.scrollTo({top: 975, behavior: 'smooth'});
        }  // Laptop - 1280px
        else if (window.matchMedia('(min-width: 1280px)').matches) {
            window.scrollTo({top: 695, behavior: 'smooth'});
            // iPhone 13 Pro - 390px
        } else if (window.matchMedia('(min-width: 430px)').matches){
            window.scrollTo({top: 850, behavior: 'smooth'});
        } else if (window.matchMedia('(min-width: 428px)').matches){
            window.scrollTo({top: 850, behavior: 'smooth'});  
        } else if (window.matchMedia('(min-width: 393px)').matches) {
            window.scrollTo({top: 850, behavior: 'smooth'});
        } else if (window.matchMedia('(min-width: 390px)').matches) {
            window.scrollTo({top: 745, behavior: 'smooth'});
        } else {
            window.scrollTo({top: 800, behavior: 'smooth'});
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