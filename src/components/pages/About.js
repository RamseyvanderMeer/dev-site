import React from 'react';
import './About.scss'
import ear from '../../img/1.svg'
import eye from '../../img/2.svg'
import face from '../../img/3.svg'
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans1 = (x, y, s) => `perspective(1250px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const trans2 = (x, y, s) => `perspective(1750px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const trans3 = (x, y, s) => `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const About = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 25, tension: 500, friction: 350 } }))
    return (
        <div id="about" className="about-container">
            <div className="about-container__image"
                onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
            >
                <div className="about-container__image__container">
                    <animated.img style={{
                        transform: props.xys.interpolate(trans1)
                    }} className="about-container__image__ear" src={ear} alt="" />
                    <animated.img style={{
                        transform: props.xys.interpolate(trans2)
                    }} className="about-container__image__eye" src={eye} alt="" />
                    <animated.img style={{
                        transform: props.xys.interpolate(trans3)
                    }} className="about-container__image__face" src={face} alt="" />
                </div>

            </div>
            <div className="about-container__text">
                <p className="about-container__text__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eius numquam porro voluptates sint accusamus recusandae iusto voluptatum. Dolore quod doloribus, animi quos et non ad. Eligendi exercitationem doloremque sed.</p>
            </div>
        </div>
    )
}

export default About;