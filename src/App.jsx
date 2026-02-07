import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "leads",
            element: <Leads />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "projects/:id",
            element: <ProjectDetails />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
