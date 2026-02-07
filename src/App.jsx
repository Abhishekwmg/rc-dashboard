import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import Activities from "./pages/Activities";
import Customer from "./pages/Customer";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Projects from "./pages/Projects";
import Vendors from "./pages/Vendors";
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
            path: "activities",
            element: <Activities />,
          },
          {
            path: "customer",
            element: <Customer />,
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
            path: "vendors",
            element: <Vendors />,
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
