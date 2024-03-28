export default function ProjectCard({ name, skills }: { name: string, skills: Array<string> }) {
    return (
        <li className="dark-box p-4">
            <div className="mb-3 text-left">{name}</div>
            <div className="flex gap-2">
                {skills.map((skill) => <div key={skill} className="card-sm">{skill}</div>)}
            </div>
        </li>
    );
}
