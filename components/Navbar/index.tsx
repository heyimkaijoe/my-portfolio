import { useState, useEffect } from 'react';
import Hamburger from '../Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser, faFlaskVial, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const toggleBurger = () => setBurgerOpen(!burgerOpen);

    type Theme = null | "dark" | "light";
    const [theme, setTheme] = useState<Theme>(null);
    const isDarkTheme = theme === "dark";
    const handleThemeToggle = () => setTheme(isDarkTheme ? "light" : "dark");

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").matches ? setTheme("dark") : setTheme("light");
    }, []);
    useEffect(() => {
        isDarkTheme ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, [theme]);

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
            
            <button onClick={handleThemeToggle} className="z-10 w-8 md:w-[44px] flex justify-center md:py-2 md:px-3">
                <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} size="2xl" className="text-prheart-600 dark:text-prheart-300 dark:hover:text-prheart-200 hover:text-prheart-700" />
            </button>
        </nav>
    );
}
