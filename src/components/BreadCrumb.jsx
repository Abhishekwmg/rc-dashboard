import { Link, useLocation } from "react-router-dom";

const routeNames = {
  dashboard: "Dashboard",
  activities: "Activities",
  customer: "Customer",
  leads: "Leads",
  projects: "Projects",
  vendors: "Vendors",
  login: "Login",
};

const Breadcrumb = () => {
  const location = useLocation();

  // Split path into segments
  const pathnames = location.pathname.split("/").filter((x) => x);

  // If path is root "/", show Dashboard
  const isRoot = location.pathname === "/" || location.pathname === "";
  if (isRoot) pathnames.push("dashboard"); // treat root as Dashboard

  return (
    <nav className="text-sm text-gray-600 dark:text-gray-300 mb-4 px-6 md:px-12">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((segment, index) => {
          const path = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          // Get display name from mapping or capitalize
          const name =
            routeNames[segment] ||
            (typeof segment === "string"
              ? segment.charAt(0).toUpperCase() + segment.slice(1)
              : ""); // make sure it's a string

          return (
            <li key={path} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500 dark:text-gray-400">{name}</span>
              ) : (
                <Link to={path} className="hover:underline">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
