import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard';

export default function Projects() {
    const projectCards = projects.map((project) => {
        const { name, skills, imgUrl, link } = project;

        return (
            <ProjectCard
                key={name}
                name={name}
                skills={skills}
                imgUrl={imgUrl}
                link={link}
            />
        );
    });

    return (
        <ul id="projects" className="pt-8 md:pt-16 mx-8 md:mx-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-lg font-semibold">
            {projectCards}
        </ul>
    );
}
