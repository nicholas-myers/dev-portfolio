import { Outlet } from "react-router-dom"
import About from "./About"
import DashboardNav from "./DashboardNav"
import Projects from "./Projects"
import Skills from "./Skills"

const Dashboard = () => {
    return (
        <div>
            <DashboardNav />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard