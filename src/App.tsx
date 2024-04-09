import './App.css';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Languages from '../components/Languages';
import GitHub from '../components/GitHub';
import { useState, useEffect } from 'react';

export default function App() {
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
        <>
            <Navbar isDarkTheme={isDarkTheme} handleThemeToggle={handleThemeToggle} />
            <Intro />
            <Projects />
            <Languages />
            <GitHub isDarkTheme={isDarkTheme} />
            <Contact />
            <Footer />
        </>
    );
}
