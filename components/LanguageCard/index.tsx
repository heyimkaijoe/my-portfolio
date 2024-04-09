import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function LanguageCard({ name, proficiency, toeic }: {
    name: string;
    proficiency: string;
    toeic?: string;
}) {
    return (
        <li>
            <div className="flex justify-center items-center">
                <FontAwesomeIcon icon={faCheck} size="xl" className="mr-2 text-green-500 dark:text-green-600" />
                <h2 className="subtitle">{name}</h2>
            </div>

            <ul>
                <li className="my-3 md:my-6 card-sm min-h-[52px] md:min-h-0 md:px-4 py-2">{proficiency}</li>
                {toeic && 
                <li className="my-3 md:my-6 card-sm min-h-[52px] md:min-h-0 md:px-4 py-2">TOEIC: {toeic}</li>}
            </ul>
        </li>
    );
}
