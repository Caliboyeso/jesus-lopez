import React from 'react';
import './css/projects.css';
import StaySharp from '../img/staysharp.jpeg';
import ElChilango from '../img/chilangos.jpeg';
import CoopersDrip from '../img/coopers-drip.jpeg';

const Projects = () => {
    return (
        <div className='Projects-section'>
            {/* Titl Prism */}
            <style>@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');</style>
            {/* Shadows Into Light */}
            <style>@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');</style>
            <h1 className='Projects-header'>Projects</h1>
            <div className='Projects-row1'>
                {/* Card #1 - 209 Stay Sharp Barbershop */}
                <div className='Projects-card1'>
                    <img className='Projects-card-pic' alt='stay-sharp' src={StaySharp} />
                    <h3 className='Projects-card-header' id='Card1-header'><a href="https://staysharp-barbershop.herokuapp.com/" target="_blank">Stay Sharp Barbershop</a></h3>
                    <h3 className='Projects-disabled'>In working progress...</h3>
                    {/* <button className='card-button' id='visit-btn'>Visit</button>
                    <button className='card-button' id='source-btn'>Source</button> */}
                </div>
                {/* Card #2 - El Chilango */}
                <div className='Projects-card1'>
                    <img className='Projects-card-pic' id='Chilangos-pic' alt='stay-sharp' src={ElChilango} />
                    <h3 className='Projects-card-header'>El Chilango</h3>
                    <h3 className='Projects-disabled'>In working progress...</h3>
                    {/* <button className='card-button' id='visit-btn'>Visit</button>
                    <button className='card-button' id='source-btn'>Source</button> */}
                </div>
                {/* Card #3 - Cooper's Drip */}
                <div className='Projects-card1'>
                    <img className='Projects-card-pic' alt='stay-sharp' src={CoopersDrip} />
                    <h3 className='Projects-card-header'>Cooper's Drip</h3>
                    <h3 className='Projects-disabled'>In working progress...</h3>
                    {/* <button className='card-button' id='visit-btn'>Visit</button>
                    <button className='card-button' id='source-btn'>Source</button> */}
                </div>
            </div>
        </div>
    )
}

export default Projects;