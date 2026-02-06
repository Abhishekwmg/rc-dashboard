import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { LayoutDashboard, CircleUserRound } from "lucide-react";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  console.log(user);

  return (
    <nav style={{ display: "flex", gap: "12px" }}>
      <p>
        <span>
          <LayoutDashboard size={25} />
        </span>
      </p>
      {user && (
        <>
          <Link to="/">Dashboard</Link>
          <Link to="activities">Activities</Link>
          <Link to="customer">Customer</Link>
          <Link to="leads">Leads</Link>
          <Link to="projects">Projects</Link>
          <Link to="vendors">Vendors</Link>
        </>
      )}

      <div style={{ marginLeft: "auto" }}>
        {!user && <Link to="/login">Login</Link>}
        <span>
          <CircleUserRound />
        </span>
        {user.email}
        {user && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Header;
