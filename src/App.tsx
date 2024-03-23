import './App.css'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

export default function App() {

    return (
        <>
            <Navbar />
            <Intro />
            <Projects />
            <Contacts />
            <Footer />
        </>
    );
}
