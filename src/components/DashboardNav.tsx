import { Link } from "react-router-dom"

const DashboardNav = () => {
    return (
        <nav>
            <Link to="about">About</Link>
            <Link to="projects">Projects</Link>
            <Link to="skills">Skills</Link>
        </nav>
    )
}

export default DashboardNav