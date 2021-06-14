import React, { useState } from 'react';
import './main.scss'
import Logo from '../img/Logo.svg'

const Header = () => {

    const [expanded, setExpanded] = React.useState(false)
    const [toggle, setToggle] = useState(false);

    const toggleDropdown = () => {
        setExpanded(!expanded);
    }

    const actToggle = () => {
        setToggle(!toggle)
    }

    return (
        <header>
            <div className={`main-header ${expanded ? "expanded" : "collapsed"} `}>
                <div class="main-header__branding">
                    <img className="main-header__branding__logo" src={Logo} alt="" />
                    <p className="main-header__branding__title">Ramsey van der Meer</p>
                </div>

                <nav className="main-header__nav">
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
            </div>
        </header>
    )
}

export default Header;