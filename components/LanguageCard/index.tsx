import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function LanguageCard({ name, proficiency, toeic }: {
    name: string;
    proficiency: string;
    toeic?: string;
}) {
    return (
        <li>
            <div className="group/lang">
                <FontAwesomeIcon icon={faCheck} size="xl" className="mr-2 text-green-500 dark:text-green-600 group-hover/lang:text-green-600" />
                <span className="text-prheart-900 dark:text-prheart-100 group-hover/lang:text-prheart-950">{name}</span>
            </div>

            <ul>
                <li className="my-2 card-sm">{proficiency}</li>
                {toeic && 
                <li className="my-2 card-sm">TOEIC: {toeic}</li>}
            </ul>
        </li>
    );
}
