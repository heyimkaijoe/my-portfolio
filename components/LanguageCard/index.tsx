import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function LanguageCard({ name, proficiency, toeic }: {
    name: string;
    proficiency: string;
    toeic?: string;
}) {
    return (
        <li>
            <div>
                <FontAwesomeIcon icon={faCheck} size="xl" className="mr-2" />
                {name}
            </div>

            <ul>
                <li className="my-2 card-sm">{proficiency}</li>
                {toeic && 
                <li className="my-2 card-sm">TOEIC: {toeic}</li>}
            </ul>
        </li>
    );
}
