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
        <ul id="projects" className="projects">
            {projectCards}
        </ul>
    );
}
