import React from 'react';
import '../Projects.scss'
import github from '../../../img/github.png'

export default function Project(props) {
    return (
        <div className="project-container">
            <div className="project__card">
                <div className="project__text">
                    <a className="project__title" >{props.title}</a>
                    <a className="project__description">{props.description}</a>
                    <a alt="github" className="project__icon-padding" href="https://github.com/RamseyvanderMeer"><img src={github} className="project__icon" /></a>
                </div>
                <div className="project__container">
                    <img className="project__image" src={require('../../../img/project/' + props.imgPath + '.jpg')} alt="image" />
                </div>
            </div>
        </div>
    )
}
