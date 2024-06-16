import { useRouteError } from "react-router-dom"
import Header from "./Header";
import DashboardNav from "./DashboardNav";

const ErrorPage = () => {
    const error: any = useRouteError();
    console.log(error)
    return (
        <div>
            <Header />
            <DashboardNav />
            <main>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>Status: {error.status} : {error.statusText || error.message} : {error.data}</i>
                </p>
            </main>

        </div>
    )
}

export default ErrorPage