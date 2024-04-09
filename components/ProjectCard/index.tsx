export default function ProjectCard({ name, skills, imgUrl, link }: {
    name: string,
    skills: Array<string>,
    imgUrl: string,
    link: string,
}) {
    return (
        <li className="dark-box">
            <a href={link} className="hover:opacity-80">
                <div className="overflow-hidden pt-4 px-4">
                    <img src={imgUrl} alt={name} className="object-cover rounded-md w-full h-40 md:h-60 lg:h-80"/>
                </div>

                <h2 className="md:text-2xl text-left my-3 px-4">{name}</h2>

                <div className="flex gap-2 flex-wrap px-4 pb-4">
                    {skills.map((skill) => <div key={skill} className="card-sm">{skill}</div>)}
                </div>
            </a>
        </li>
    );
}
