import { useState, useEffect } from 'react';
import Hamburger from '../Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const toggleBurger = () => setBurgerOpen(!burgerOpen);

    type Theme = null | "dark" | "light";
    const [theme, setTheme] = useState<Theme>(null);
    const isDarkTheme = theme === "dark";
    const handleThemeToggle = () => setTheme(isDarkTheme ? "light" : "dark");

    useEffect(() => {
        window.matchMedia("prefers-color-theme: dark").matches ? setTheme("dark") : setTheme("light");
    }, []);
    useEffect(() => {
        isDarkTheme ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    }, [theme]);

    return (
        <nav className="px-4 bg-prheart-200 w-full flex justify-between">
            <div>
                <ul className={(burgerOpen ? "top-12" : "-top-[120px]") + " nav-list"}>
                    <a href="#about-me" className="link">About Me</a>
                    <a href="#projects" className="link">Projects</a>
                    <a href="#contact" className="link">Contacts</a>
                </ul>

                <button className="md:hidden py-3 size-12 flex flex-col flex-nowrap justify-between" onClick={toggleBurger}>
                    <Hamburger isOpen={burgerOpen} />
                </button>
            </div>
            
            <div className="flex items-center z-10">
                <div className="translate"></div>
                <button onClick={handleThemeToggle}>
                    <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} size="2xl" className="text-prheart-600" />
                </button>
                
            </div>
        </nav>
    );
}
