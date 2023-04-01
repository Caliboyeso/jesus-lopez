import React from 'react';
import './css/about.css';
import Spike from '../assets/img/chuy-spike.jpeg';

const About = () => {
    return (
        <div className='About-section'>
            <style>@import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');</style>
            <h1 className='About-header'>About</h1>
                <img className='About-pic' src={Spike} />
                <div className='About-contact' id='About-contact'>
                    <div className='About-contact-main'>
                        <h2 className='About-contact-header'>Connect with me</h2>
                        <hr/>
                        <h2 className='About-cell'>(510)363-4975</h2>
                        <h2 className='About-email'><a id='About-link' href='mailto:jesus.blopez97@gmail.com' target='_blank'>Email me!</a></h2>
                    </div> 
                </div>
                <div className='About-me-main'>
                    <p className='About-me-message'>
                        Hello, my name is Jesus Lopez and I am a self-taught 
                        web developer located in Antioch, CA. I attend
                         Diablo Valley College where I'm currently in the process 
                         of getting my Associate of Science in Computer Information 
                         Systems. 
                    </p>
                </div>
        </div>
    )
}

export default About;