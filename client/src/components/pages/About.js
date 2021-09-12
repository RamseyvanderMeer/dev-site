import './About.scss'
import React, { useContext } from 'react'
import { DataContext } from '../Context/GlobalContext'

import ramseyHead from '../../img/ramseyHead.jpg'
import ramsey from '../../img/ramsey.jpg'
import instagram from '../../img/instagram.png'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'


const About = () => {
    const state = useContext(DataContext)
    const [about] = state.about
    console.log(about)

    return (
        <div className="background">
            <div class="background__container">
                <img alt="profile" className="background__image" src={ramsey} />
            </div>
            <div className="background__card">
                <p className="background__card__name" >Ramsey van der Meer</p>
                <img alt="ramsey" className="background__card__profile" src={ramseyHead} />
                {about.map(item => (
                    <div className="background__card__body" key={item._id}>
                        <p>
                            {item.about}
                        </p>
                    </div>
                ))}
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