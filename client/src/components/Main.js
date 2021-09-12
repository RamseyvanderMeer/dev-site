import React from 'react';
import './Main.scss'

const Main = () => {
    return (
        <div className="main">
        <body className="z">
            <ul className="main__list-container">
                <li data-text="About"><a className="main__box" href="/about">About Me</a></li>
                <li data-text="Projects"><a className="main__box" href="/projects">Projects</a></li>
                <li data-text="Photography"><a className="main__box" href="/photography">Photography</a></li>
                <li data-text="Contact"><a className="main__box" href="/contact">contact</a></li>
            </ul>
        </body>
        </div>
    )
}

export default Main;