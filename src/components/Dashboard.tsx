import { Outlet } from "react-router-dom"
import DashboardNav from "./DashboardNav"

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