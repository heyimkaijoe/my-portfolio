import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { loc } from '../../data/basics';

export default function Intro() {
    return (
        <div>
            <h1 id="about-me" className="title">Kevin Hsu</h1>
            <h2 className="subtitle">Software Engineer & Web Developer</h2>

            <div className="flex justify-around">
                <img src="/images/avataaars.svg" alt="My Avatar" />
            </div>

            <ul className="list-none mt-4 text-lg md:text-2xl font-medium">
                <li className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faLocationDot} size="lg" className="mr-2 text-red-500 dark:text-red-600" />
                    <h2 className="subtitle">{loc}</h2>
                </li>
            </ul>
        </div>
    );
}
