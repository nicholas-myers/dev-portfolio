import About from "./About"
import DashboardNav from "./DashboardNav"
import Projects from "./Projects"
import Skills from "./Skills"

const Dashboard = () => {
    return (
        <div>
            <DashboardNav />
            <main>
                Content will go here.
                <About />
                <Projects />
                <Skills />
            </main>
        </div>
    )
}

export default Dashboard