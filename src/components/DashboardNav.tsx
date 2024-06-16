import { Link, NavLink } from "react-router-dom"

const DashboardNav = () => {
    return (
        <nav>
            <NavLink to="about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
            <NavLink to="projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink>
            <NavLink to="skills" className={({ isActive }) => isActive ? "active-link" : ""}>Skills</NavLink>
        </nav>
    )
}

export default DashboardNav