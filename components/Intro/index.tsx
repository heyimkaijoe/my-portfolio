import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { loc, languages } from '../../data/basics';
import LanguageCard from '../LanguageCard';

export default function Intro() {
    return (
        <div className="">
            <h1 className="name">Kevin Hsu</h1>
            <h2 className="position-title">Software Engineer & Web Developer</h2>

            <div className="avatar">
                <img src="/src/assets/images/avataaars.svg" alt="My Avatar" />
            </div>

            <ul className="basics">
                <li className="location">
                    <FontAwesomeIcon icon={faLocationDot} size="lg" className="mr-2 text-red-600" />
                    {loc}
                </li>

                <li className="languages">
                    Languages
                    <ul className="grid grid-cols-2 gap-4 mt-4">
                        <LanguageCard
                            name={languages[0].name}
                            proficiency={languages[0].proficiency}
                            toeic={languages[0].cert!.toeic}
                        />
                        <LanguageCard
                            name={languages[1].name}
                            proficiency={languages[1].proficiency}
                        />
                    </ul>
                </li>
            </ul>
        </div>
    );
}
