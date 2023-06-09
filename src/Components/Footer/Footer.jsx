import React from 'react';
import './css/footer.css';
import Linkedin from '../img/linkedin4.png';
import Github from '../img/github.png';
import Resume from '../img/resume1.png';
import ChuyResume from '../img/chuy-resume.docx';

const Footer = () => {
    return (
        <div className='Footer-section'>
            <style>@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');</style>
            <h2 className='Footer-header'>Jesus Lopez 2023&copy;</h2>
            <div className='Footer-links'>
            <a className='Linkedin' href='https://www.linkedin.com/in/jesuslopez-dev/' target='_blank'><img className='Linkedin' alt='Linkedin' src={Linkedin} /></a>
            <a className='Github' href='https://github.com/Caliboyeso?tab=repositories' target='_blank'><img className='Github' alt='Github' src={Github} /></a>
            <a className='Resume' href={ChuyResume} target='_blank'><img className='Resume' alt='Resume' src={Resume} /></a>
            </div>
        </div>
    )
}

export default Footer;