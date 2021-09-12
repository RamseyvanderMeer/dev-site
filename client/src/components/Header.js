import React from 'react';
import './Header.scss'
import Logo from '../img/Logo.svg'

const Header = () => {

    const [expanded, setExpanded] = React.useState(false)
    const waveClairity = 15

    const toggleDropdown = () => {
        setExpanded(!expanded);
    }


    const init = () => {
        setInterval(OnDraw, waveClairity);
    }

    var time = 1000;


    const OnDraw = () => {
        time = time + 0.0075;
        var canvas = document.getElementById("mycanvas");
        var dataLine = canvas.getContext("2d");
            window.onresize = function (event) {
                canvas = document.getElementById('mycanvas');
                canvas.width = window.innerWidth;
            }
        dataLine.clearRect(0, 0, canvas.width, canvas.height);

        dataLine.beginPath();
        for (let i = -1000; i <= canvas.width; i++) {

            let waveA = Math.sin(time + i * 0.0211)
            let waveB = Math.sin(time + i * 0.028)
            let waveC = Math.sin(time + i * 0.015)
            dataLine.lineTo(i * 3, canvas.height * 0.5 + waveA * waveB * waveC * 66);
        }
        dataLine.lineTo(canvas.width, canvas.height);
        var my_gradient = dataLine.createLinearGradient(0, 0, canvas.width * .5, 0);
        my_gradient.addColorStop(0, "#C9D6FF");
        my_gradient.addColorStop(1, "#E2E2E2");
        dataLine.fillStyle = my_gradient;
        dataLine.fill();
        // dataLine.fillStyle = "red";
        // dataLine.fill();
        // dataLine.fill();
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
                            <a className="main-header__button" href="/about" >About Me</a>
                        </li>
                        <li className="main-header__nav__link">
                            <a className="main-header__button" href="/projects" >Projects</a>
                        </li>
                        <li className="main-header__nav__link">
                            <a className="main-header__button" href="/photography" >Photography</a>
                        </li>
                        <li className="main-header__nav__link">
                            <a className="main-header__button" href="/contact" >Contact</a>
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