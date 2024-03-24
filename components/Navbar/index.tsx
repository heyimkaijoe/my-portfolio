import { useState } from 'react'
import Hamburger from '../Hamburger'

export default function Navbar() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const toggleBurger = () => setBurgerOpen(!burgerOpen);

    return (
        <nav className="navbar">
            <div className="nav">
                <ul className={(burgerOpen ? "top-12" : "-top-[120px]") + " nav-list"}>
                    <li className="about-me">About Me</li>
                    <li className="projects">Projects</li>
                    <li className="contacts">Contacts</li>
                </ul>

                <button className="hamburger" onClick={toggleBurger}>
                    <Hamburger isOpen={burgerOpen} />
                </button>
            </div>
            
            <div className="toggles">
                <div className="translate"></div>
                <div className="light-dark-theme"></div>
            </div>
        </nav>
    );
}
