import LanguageCard from '../LanguageCard';
import { languages } from '../../data/basics';

export default function Languages() {
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
        <div className="max-w-md md:max-w-screen-xl p-8 md:p-24 mx-auto">
            <ul className="grid grid-cols-2 gap-4 md:gap-8 mt-4">
                {languageCards}
            </ul>
        </div>
    );
}
