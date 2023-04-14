import React from 'react';
import './css/navbar.css';

const NavBar = () => {

    // Home Navbar
    const goHome = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // About Navbar
    const AboutNavbar = () => {
        // Desktop - 1920px
        if (window.matchMedia("(min-width: 1920px)").matches) {
            window.scrollTo({top: 980, behavior: "smooth"});
        // Desktop - 1280px
        } else if (window.matchMedia("(min-width: 1280px)").matches) {
            window.scrollTo({top: 695, behavior: "smooth"});
        // iPhone 13 Pro - 390px
        } else {
            window.scrollTo({top: 745, behavior: "smooth"});
        }
    };

    // Skills Navbar
    const SkillsNavbar = () => {
        // Desktop - 1920px
        if (window.matchMedia('(min-width: 1920px)').matches) {
            window.scrollTo({top: 1900, behavior: 'smooth'});
            // Laptop - 1280px
        } else if (window.matchMedia('(min-width: 1280px)').matches) {
            window.scrollTo({top: 1380, behavior: 'smooth'});
            // iPhone 13 Pro - 390px
        } else {
            window.scrollTo({top: 1800, behavior: 'smooth'});
        }
    }

    // Projects Navbar
    const ProjectsNavbar = () => {
        // Desktop - 1920px
        if (window.matchMedia('(min-width: 1920px)').matches) {
            window.scrollTo({top: 2900, behavior: 'smooth'});
            // Laptop - 1280px
        } else if (window.matchMedia('(min-width: 1280px)').matches) {
            window.scrollTo({top: 2010, behavior: 'smooth'});
            // iPhone 13 Pro - 390px
        } else {
            window.scrollTo({top: 2480, behavior: 'smooth'});
        }
    
    }

    return (
        <div className='Navbar-section' id='Navbar-section'>
            <style>@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');</style>
            <div className='Navbar-links'>
                {/* Home */}
                <a id='Home' onClick={goHome}>Home</a>
                {/* About */}
                <a className='Nav-link' onClick={AboutNavbar}>About</a>
                {/* Skills */}
                <a className='Nav-link' onClick={SkillsNavbar}>Skills</a>
                {/* Projects */}
                <a className='Nav-link' onClick={ProjectsNavbar}>Projects</a>
            </div>  
        </div>
    )
}

export default NavBar;