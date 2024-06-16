import App from "./App";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "skills",
        element: <Skills />
      }
    ]
  }
]