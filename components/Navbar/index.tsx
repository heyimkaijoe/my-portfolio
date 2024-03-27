import { useState } from 'react';
import Hamburger from '../Hamburger';

export default function Navbar() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const toggleBurger = () => setBurgerOpen(!burgerOpen);

    return (
        <nav className="navbar">
            <div className="nav">
                <ul className={(burgerOpen ? "top-12" : "-top-[120px]") + " nav-list"}>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contacts</li>
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
