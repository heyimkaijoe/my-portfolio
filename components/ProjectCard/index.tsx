export default function ProjectCard({ name, skills, imgUrl, link }: {
    name: string,
    skills: Array<string>,
    imgUrl: string,
    link?: string,
}) {
    return (
        <li className="dark-box">
            <a href={link} className="overflow-hidden hover:opacity-80">
                <img src={imgUrl} alt={name} className="object-cover h-[360px]" />
                <div className="md:text-2xl text-left my-3 px-4">{name}</div>
                <div className="flex gap-2 px-4 pb-4">
                    {skills.map((skill) => <div key={skill} className="card-sm">{skill}</div>)}
                </div>
            </a>
        </li>
    );
}
