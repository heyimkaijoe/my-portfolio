import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard';

export default function Projects() {
    return (
        <ul className="projects">
            {/* TODO: add preview */}
            <ProjectCard name={projects[0].name} skills={projects[0].skills}/>
        </ul>
    );
}
