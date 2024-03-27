import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function LanguageCard({ name, proficiency, toeic }: {
    name: string;
    proficiency: string;
    toeic?: string;
}) {
    return (
        <li>
            <h3>
                <FontAwesomeIcon icon={faCheck} size="xl" className="mr-2" />
                {name}
            </h3>

            <ul className="text-sm">
                <li className="border-2 rounded-md border-slate-200 my-2 px-2 py-1 text-slate-700">{proficiency}</li>
                {toeic && 
                <li className="border-2 rounded-md border-slate-200 my-2 px-2 py-1 text-slate-700">TOEIC: {toeic}</li>}
            </ul>
        </li>
    );
}
