import ProjectViewModel from "../models/ProjectViewModel"

const ProjectCard = ({ project }: { project: ProjectViewModel }) => {
    return (
        <div className="project-card">
            <div className="project-card-header">
                <h2>{project.name}</h2>
            </div>
            <div className="project-card-content">{project.description}</div>
            <div className="project-card-tags">{project.tags.map(t => <p className="tag">{t}</p>)}</div>
        </div>
    )
}

export default ProjectCard