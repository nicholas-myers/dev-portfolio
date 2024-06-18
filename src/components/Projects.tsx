import projectList from "../data/project-list"
import ProjectCard from "./ProjectCard"

const Projects = () => {

    return (
        <div className="project-container">
            <div className="project-list">
                {projectList.map(p => <ProjectCard project={p} />)}
            </div>
        </div>
    )
}

export default Projects