import './App.css';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Languages from '../components/Languages';

export default function App() {

    return (
        <>
            <Navbar />
            <Intro />
            <Projects />
            <Languages />
            <Contact />
            <Footer />
        </>
    );
}
