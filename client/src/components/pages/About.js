import React from 'react';
import './About.scss'
import { useSpring, animated, config } from 'react-spring';
import ramseyHead from '../../img/ramseyHead.jpg'
import ramsey from '../../img/ramsey.jpg'
import instagram from '../../img/instagram.png'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'


const About = () => {

    return (
        <div className="background">
        <div class="background__container">
            <img alt="profile" className="background__image" src={ramsey} />
        </div>
        <div className="background__card">
            <p className="background__card__name" >Ramsey van der Meer</p>
            <img alt="ramsey" className="background__card__profile" src={ramseyHead} />
            <p className="background__card__body">
            Hello! My name is Ramsey van der Meer, and I am a Freshman at University of Illinois Urbana Champaign. I am majoring in electrical engineering and am hoping to develop the necessary skills to be successful in this field while also learning about different career paths. I have always had a passion for creating things since I was little and am excited to be at college. These past few years I have spent dedicating myself to improving my coding and electronic skills. Some of the projects I have to show for my effort are my personal website in which I challenged myself to use advanced javascript features and my lidar science fair project which maps a 3D space. I am excited to be at school and hope to learn a lot in the coming years.
            </p>
            <div className="background__icon-container">
                <a alt="linkedin" className="background__icon-padding" href="http://www.linkedin.com/in/ramseyvandermeer"><img src={linkedin} className="background__icon" /></a>
                <a alt="instagram" className="background__icon-padding" href="https://www.instagram.com/ramsey_photos/"><img src={instagram} className="background__icon" /></a>
                <a alt="github" className="background__icon-padding" href="https://github.com/RamseyvanderMeer"><img src={github} className="background__icon" /></a>
            </div>

        </div>
    </div>
    )
}

export default About;