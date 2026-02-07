import { Link, NavLink } from "react-router-dom";
import { Rotate3d, CircleUserRound, Moon, Sun, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../hooks/useTheme";
import Clock from "./Clock";
import { useState } from "react";

const Header = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  const navItems = [
    ["Dashboard", "/"],
    ["Contact", "contact"],
    ["Leads", "leads"],
    ["Projects", "projects"],
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Rotate3d size={36} className="opacity-90" />
          <span className="hidden sm:inline font-logo text-3xl tracking-wide select-none">
            ORBIT
          </span>
        </div>

        {user && (
          <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex gap-8 text-sm font-medium">
            {navItems.map(([label, path]) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `
                  relative pb-1 transition-all duration-200
                  opacity-80 hover:opacity-100
                  ${isActive ? "opacity-100" : ""}
                `
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`
                        absolute left-0 right-0 -bottom-0.5 mx-auto
                        h-[1.5px] bg-current opacity-40
                        transition-all duration-300
                        ${isActive ? "w-full" : "w-0 hover:w-full"}
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          {user && (
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}

          {user && (
            <>
              <div className="hidden lg:flex items-center gap-3">
                <CircleUserRound size={20} className="opacity-80" />
                <Clock />
              </div>

              <button
                onClick={toggleTheme}
                className="
                  flex items-center justify-center
                  rounded-full border
                  px-2.5 py-2
                  transition-all duration-200
                  hover:scale-105 hover:shadow-sm
                  border-(--border-color)
                  bg-(--bg-color)
                  hover:bg-black/5 dark:hover:bg-white/10
                "
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>

              <button
                onClick={handleLogout}
                className="
                  rounded-md border px-3 py-1.5
                  text-sm font-medium
                  transition-all duration-200
                  border-(--border-color)
                  hover:bg-red-500/10 hover:text-red-500
                "
              >
                Logout
              </button>
            </>
          )}
        </div>

        {menuOpen && user && (
          <div className="absolute left-0 right-0 top-full z-50 lg:hidden border-t bg-(--header-bg) shadow-lg">
            <div className="flex flex-col gap-4 px-6 py-4 text-sm font-medium">
              {navItems.map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="opacity-80 hover:opacity-100"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
