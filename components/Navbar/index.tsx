import { useState } from 'react';
import Hamburger from '../Hamburger';

export default function Navbar() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const toggleBurger = () => setBurgerOpen(!burgerOpen);

    return (
        <nav>
            <div className="bg-prheart-200 w-full">
                <ul className={(burgerOpen ? "top-12" : "-top-[120px]") + " nav-list"}>
                    <a href="#about-me" className="link">About Me</a>
                    <a href="#projects" className="link">Projects</a>
                    <a href="#contact" className="link">Contacts</a>
                </ul>

                <button className="md:hidden ml-2 py-3 size-12 flex flex-col flex-nowrap justify-between" onClick={toggleBurger}>
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
