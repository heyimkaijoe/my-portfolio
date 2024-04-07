import './App.css';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function App() {

    return (
        <>
            <Navbar />
            <Intro />
            {/* TODO: prob. put Projects component higher? */}
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}
