import React, { useState } from 'react';
import './Header.scss'
import Logo from '../img/Logo.svg'

const Header = () => {

    const [expanded, setExpanded] = React.useState(false)

    const toggleDropdown = () => {
        setExpanded(!expanded);
    }

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
                            <div href="/" className="main-header__button" href="/about" >About Me</div>
                        </li>
                        <li className="main-header__nav__link">
                            <div href="/" className="main-header__button" href="/projects" >Projects</div>
                        </li>
                        <li className="main-header__nav__link">
                            <div href="/" className="main-header__button" href="/photography" >Photography</div>
                        </li>
                        <li className="main-header__nav__link">
                            <div href="/" className="main-header__button" href="/contact" >Contact</div>
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
        </header>
    )
}

export default Header;