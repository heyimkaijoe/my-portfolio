export default function ProjectCard({ name, skills }: { name: string, skills: Array<string> }) {
    return (
        <li className="border-2 border-slate-200 rounded-md p-4">
            <div className="mb-3 text-left">{name}</div>
            <div className="flex gap-2">
                {skills.map((skill) => <div key={skill} className="card-sm">{skill}</div>)}
            </div>
        </li>
    );
}
