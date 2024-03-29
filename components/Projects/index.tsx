import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard';

export default function Projects() {
    return (
        <ul id="projects" className="pt-4 md:pt-16 mx-8 md:mx-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-lg font-semibold">
            {/* TODO: add preview */}
            <ProjectCard name={projects[0].name} skills={projects[0].skills}/>
            <ProjectCard name={projects[1].name} skills={projects[1].skills}/>
        </ul>
    );
}
