import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { loc, languages } from '../../data/basics';
import LanguageCard from '../LanguageCard';

export default function Intro() {
    const languageCards = languages.map((language) => {
        const { name, proficiency, cert } = language;

        if (typeof cert === "undefined") {
            return (
                <LanguageCard
                    key={name}
                    name={name}
                    proficiency={proficiency}
                />
            );
        } else {
            return (
                <LanguageCard
                    key={name}
                    name={name}
                    proficiency={proficiency}
                    toeic={cert.toeic}
                />
            );
        };
    });

    return (
        <div>
            <h1 id="about-me" className="title">Kevin Hsu</h1>
            <h2 className="md:text-2xl text-prheart-900 dark:text-prheart-100 font-medium">Software Engineer & Web Developer</h2>

            <div className="flex justify-around">
                <img src="/images/avataaars.svg" alt="My Avatar" />
            </div>

            <ul className="list-none mt-4 text-lg md:text-2xl font-medium">
                <li className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faLocationDot} size="lg" className="mr-2 text-red-500 dark:text-red-600" />
                    <span className="md:text-2xl text-prheart-900 dark:text-prheart-100">{loc}</span>
                </li>

                <li className="mt-4 p-4 md:p-16 mx-4 md:mx-16">
                    <ul className="grid grid-cols-2 gap-4 md:gap-8 mt-4">
                        {languageCards}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
