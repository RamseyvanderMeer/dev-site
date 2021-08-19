import React from 'react';
import './Header.scss'
import Logo from '../img/Logo.svg'
import {Link} from 'react-scroll'

const Header = () => {

    const [expanded, setExpanded] = React.useState(false)

    const toggleDropdown = () => {
        setExpanded(!expanded);
    }

    
    function init() {
        setInterval(OnDraw, 15);
    }

    var time = 1000;
    var color = "#A6A6A6";

    function OnDraw() {
        time = time + 0.015;
        var canvas = document.getElementById("mycanvas");
        var dataLine = canvas.getContext("2d");

        dataLine.clearRect(0, 0, canvas.width, canvas.height);

        dataLine.beginPath();
        for (let i = -100; i <= canvas.width; i++) {
            let waveA = Math.sin(time + i * 0.0211)
            let waveB = Math.sin(time + i * 0.028)
            let waveC = Math.sin(time + i * 0.015)
            dataLine.lineTo(i * 2.5, canvas.height * 0.5 + waveA * waveB * waveC * 66);
        }
        dataLine.lineTo(document.documentElement.clientWidth, document.documentElement.clientHeight);
        dataLine.fillStyle = color;
        // dataLine.fillStyle = "red";
        // dataLine.fill();
        dataLine.fill();
        dataLine.closePath();
    }

    init()

    return (
        <header>
            <div className={`main-header ${expanded ? "expanded" : "collapsed"}`}>

                <div className="main-header__title">
                    <img className="main-header__title__img" src={Logo} alt="" />
                    <p>Ramsey van der Meer</p>
                </div>
                <nav className="main-header__nav">
                    {/* This is kind of jank but it works to help the flex-container center the nav links */}

                    <ul className="main-header__nav__links">
                        <li className="main-header__nav__link">
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-75} className="main-header__button" href="/about" >About Me</Link>
                        </li>
                        <li className="main-header__nav__link">
                            <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} offset={-75} className="main-header__button" href="/projects" >Projects</Link>
                        </li>
                        <li className="main-header__nav__link">
                            <Link activeClass="active" to="photography" spy={true} smooth={true} duration={500} offset={-75} className="main-header__button" href="/photography" >Photography</Link>
                        </li>
                        <li className="main-header__nav__link">
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-75} className="main-header__button" href="/contact" >Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={toggleDropdown} className="main-header__nav__menu-icon">
                    <div className={expanded ? "bar1 animateBar" : "bar bar1"}></div>
                    <div className={expanded ? "bar2 animateBar" : "bar bar2"}></div>
                    <div className={expanded ? "bar3 animateBar" : " bar3"}></div>
                </div>
            </div>
            <div className="spacing" />
            <canvas id="mycanvas" className="main-header__wave" width={document.documentElement.clientWidth} height="400"></canvas>
        </header>
    )
}

export default Header;