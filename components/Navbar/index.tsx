import { useState } from 'react';
import Hamburger from '../Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faFlaskVial, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ isDarkTheme, handleThemeToggle }: { isDarkTheme: boolean, handleThemeToggle: () => void }) {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const toggleBurger = () => setBurgerOpen(!burgerOpen);

    return (
        <nav className="md:fixed md:top-0 px-4 bg-prheart-200 dark:bg-prheart-700 w-full flex justify-between items-center drop-shadow">
            <div>
                <ul className={(burgerOpen ? "top-12 md:top-0" : "-top-36 md:top-0") + " nav-list"} onClick={toggleBurger}>
                    <li>
                        <a href="#about-me" className="link">
                            <FontAwesomeIcon icon={faUser} />
                            About Me
                        </a>
                    </li>
                    
                    <li>
                        <a href="#projects" className="link">
                            <FontAwesomeIcon icon={faFlaskVial} />
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="link">
                            <FontAwesomeIcon icon={faHandshake} />
                            Contact
                        </a>
                    </li>
                </ul>

                <button className="md:hidden py-3 size-12 flex flex-col flex-nowrap justify-between" onClick={toggleBurger}>
                    <Hamburger isOpen={burgerOpen} />
                </button>
            </div>
            
            <button onClick={handleThemeToggle} className="group/theme z-10 w-8 md:w-12 flex justify-center md:py-2 md:px-3">
                <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} size="2xl" className="theme-icon" />
            </button>
        </nav>
    );
}
