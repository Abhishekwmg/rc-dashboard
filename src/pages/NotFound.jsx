import { Link } from "react-router-dom";
import errorPage from "../assets/404error.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <img src={errorPage} alt="Page not found" className="w-64 mb-8" />
      <p className="text-lg mb-6 max-w-md">
        Oops! The page you are looking for does not exist. It might have been
        moved, deleted, or never existed.
      </p>
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/"
          className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
        >
          Go to Dashboard
        </Link>
        <Link
          to="/help"
          className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
        >
          Visit Help Center
        </Link>
      </div>
      <p className="text-sm text-gray-500">
        If you think this is a mistake, contact support.
      </p>
    </div>
  );
};

export default NotFound;
