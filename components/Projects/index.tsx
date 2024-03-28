import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard';

export default function Projects() {
    return (
        <ul className="mt-4 mx-8 grid grid-cols-1 text-lg font-semibold">
            {/* TODO: add preview */}
            <ProjectCard name={projects[0].name} skills={projects[0].skills}/>
        </ul>
    );
}
