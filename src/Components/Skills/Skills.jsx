import React, {useState} from 'react';
import './css/skills.css';
import html from '../img/html.png';
import css from '../img/css.png';
import javascript from '../img/javascript.png';
import bootstrap from '../img/bootstrap.png';
import react from '../img/react.png';
import node from '../img/node.png';
import express from '../img/express.png';
import mysql from '../img/mysql.png';
import mongodb from '../img/mongodb.png';
import firebase from '../img/firebase.png';
import git from '../img/git.png';
import rwd from '../img/rwd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    // State for spinning boolean
    const [spinning, setSpin] = useState(true);
    // State for Width to control carousel width
    const [currentWidth, setCurrentWidth] = useState();

    // Hook to add update to width state
    React.useEffect(() => {
        setCurrentWidth(window.innderWidth)
    }, [window.innerWidth])

    // Z axis translate distance variable
    let tranZ;
    if (currentWidth < 599) {
        tranZ = 200;
    } else if (currentWidth >= 599 && currentWidth < 901) {
        tranZ = 429;
    } else if (currentWidth >= 901 && currentWidth < 1301) {
        tranZ = 522
    } else {
        tranZ = 746;
    }

    // An array to store all skill logo's
    const skills = [
        {name: 'HTML', img: html},
        {name: 'CSS', img: css},
        {name: 'JAVASCRIPT', img: javascript},
        {name: 'BOOTSTRAP', img: bootstrap},
        {name: 'REACT', img: react},
        {name: 'NODE', img: node},
        {name: 'EXPRESS', img: express},
        {name: 'MONGODB', img: mongodb},
        {name: 'MYSQL', img: mysql},
        {name: 'FIREBASE', img: firebase},
        {name: 'GIT', img: git},
        {name: 'RWD', img: rwd},
    ]

    // Assigning icons to variables from FontAwesome
    const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} size='2x' />
    const chevronRight = <FontAwesomeIcon icon={faChevronRight} size='2x' />

    // Iterating through the skills array
    const skillsMapped = skills.map((skill, i) => {
        return (
            <div className='carousel_cell' key={i}>
                <img className='Skills-img' src={skill.img} alt={skill.name} />
                <p>{skills.name}</p>
            </div>
        )
    })

    // selectedIndex used to spin carousel correctly in manual mode
    let selectedIndex = 0;
    const rotateCarousel = () => {
        let carousel = document.getElementById('skills-carousel');
        // Number of cells for carousel
        let cellCount = 12;
        let angle = selectedIndex / cellCount * -360;
        carousel.style.transform = `translateZ(-${tranZ}px) rotateY(${angle}deg)`;
    }

    // Function to stop carousel
    const stopCarousel = () => {
        let carousel = document.getElementById('skills-carousel');
        carousel.style.transform = `translateZ(-${tranZ}px)`;
        carousel.style.animation = 'none';
        setSpin(false)
    }

    // Function to start carousel
    const startCarousel = () => {
        let carousel = document.getElementById('skills-carousel');
        carousel.style.transform = `translateZ(-${tranZ}px)`;
        carousel.style.animation = 'spin 18s infinite linear';
        setSpin(true)
    }

    // Function for right arrow
    const next = () => {
        selectedIndex++;
        rotateCarousel();
    }

    // Function for left arrow
    const previous = () => {
        selectedIndex--;
        rotateCarousel();
    }

    return (
        <section id='skills' className='Skills-section'>
            <style>@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');</style>
            <h1 className='Skills-header'>SKILLS</h1>
            <div className='carousel-flex'>
                {spinning?
                <></>
                :
                <button className="Skills-left-arrow" onClick={previous}>{chevronLeft}</button>}
                <div className="stage">
                    <div id='skills-carousel'>
                        {skillsMapped}
                    </div>
                </div>
                {spinning?
                <></>
                :
                <button className="Skills-right-arrow" onClick={next}>{chevronRight}</button>}
            </div>
            {spinning?
            <button className='btnr btn-two' id='Skills-btn' onClick={stopCarousel}>STOP SPIN</button>
            :
            <button className='btnr btn-three' id='Skills-btn' onClick={startCarousel}>START SPIN</button>
            }
        </section>
    )
}

export default Skills;