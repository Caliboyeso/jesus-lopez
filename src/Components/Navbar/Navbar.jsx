import React from 'react';
import './css/navbar.css';

const NavBar = () => {

    // Home Navbar
    const goHome = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // About Navbar
    const AboutNavbar = () => {
        if (window.matchMedia("(min-width: 1920px)").matches) {
            window.scrollTo({top: 905, behavior: "smooth"});
        } else if (window.matchMedia("(min-width: 1280px)").matches) {
            window.scrollTo({top: 695, behavior: "smooth"});
        } else {
            window.scrollTo({top: 695, behavior: "smooth"});
        }
    };

    // Skills Navbar
    const SkillsNavbar = () => {
        if (window.matchMedia('(min-width: 1920px)').matches) {
            window.scrollTo({top: 905, behavior: 'smooth'});
        } else if (window.matchMedia('(min-width: 1280px)').matches) {
            window.scrollTo({top: 1380, behavior: 'smooth'});
        }
    }

    // Projects Navbar
    const ProjectsNavbar = () => {
        if (window.matchMedia('(min-width: 1920px)').matches) {
            window.scrollTo({top: 905, behavior: 'smooth'});
        } else if (window.matchMedia('(min-width: 1280px)').matches) {
            window.scrollTo({top: 2010, behavior: 'smooth'});
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