import App from "../App";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import Projects from "../components/Projects";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "projects",
        element: <Projects />
      }
    ]
  }

]