// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link, NavLink } from "react-router-dom";
// import { LayoutDashboard, CircleUserRound } from "lucide-react";
// import Clock from "./Clock";
// import { useTheme } from "../hooks/useTheme";
// import { Sun, Moon } from "lucide-react";
// const Header = () => {
//   const { user, logout } = useAuth();
//   const { theme, toggleTheme } = useTheme();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate("/login");
//   };

//   const username = user.email.split("@")[0] || "Admin";

//   const navLinks = [
//     ["Dashboard", "/"],
//     ["Activities", "activities"],
//     ["Customer", "customer"],
//     ["Leads", "leads"],
//     ["Projects", "projects"],
//     ["Vendors", "vendors"],
//   ];

//   return (
//     // <nav style={{ display: "flex", gap: "12px" }}>
//     //   <p>
//     //     <span>
//     //       <LayoutDashboard size={25} />
//     //     </span>
//     //   </p>
//     //   {user && (
//     //     <>
//     //       <Link to="/">Dashboard</Link>
//     //       <Link to="activities">Activities</Link>
//     //       <Link to="customer">Customer</Link>
//     //       <Link to="leads">Leads</Link>
//     //       <Link to="projects">Projects</Link>
//     //       <Link to="vendors">Vendors</Link>
//     //     </>
//     //   )}

//     //   <div style={{ marginLeft: "auto" }}>
//     //     {!user && <Link to="/login">Login</Link>}
//     //     <span>
//     //       <CircleUserRound />
//     //     </span>
//     //     <Clock />
//     //     {username}
//     //     <button onClick={toggleTheme}>
//     //       {theme === "light" ? <Moon /> : <Sun />}
//     //     </button>

//     //     {user && <button onClick={handleLogout}>Logout</button>}
//     //   </div>
//     // </nav>
//     // <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
//     <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
//       <nav className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6">
//         {/* LEFT: Logo */}
//         <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
//           <LayoutDashboard size={22} />
//           <span className="hidden sm:block text-lg font-semibold">CRM</span>
//         </div>

//         {/* CENTER: Navigation */}
//         {user && (
//           <div className="ml-8 hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
//             {navLinks.map(([label, path]) => (
//               <NavLink
//                 key={label}
//                 to={path}
//                 className={({ isActive }) =>
//                   `transition-colors hover:text-slate-900 dark:hover:text-white ${
//                     isActive ? "text-slate-900 dark:text-white" : ""
//                   }`
//                 }
//               >
//                 {label}
//               </NavLink>
//             ))}
//           </div>
//         )}

//         {/* RIGHT: Utilities */}
//         <div className="ml-auto flex items-center gap-4 text-slate-600 dark:text-slate-300">
//           {!user && (
//             <Link
//               to="/login"
//               className="text-sm font-medium hover:text-slate-900 dark:hover:text-white"
//             >
//               Login
//             </Link>
//           )}

//           {user && (
//             <>
//               {/* Clock */}
//               <div className="hidden sm:block text-sm">
//                 <Clock />
//               </div>

//               {/* User */}
//               <div className="flex items-center gap-2 text-sm">
//                 <CircleUserRound size={18} />
//                 <span className="hidden sm:block">{username}</span>
//               </div>

//               {/* Theme Toggle */}
//               <button
//                 onClick={toggleTheme}
//                 className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
//                 aria-label="Toggle theme"
//               >
//                 {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
//               </button>

//               {/* Logout */}
//               <button
//                 onClick={handleLogout}
//                 className="rounded-md px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };
// export default Header;

import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Rotate3d,
  CircleUserRound,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
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
    ["Activities", "activities"],
    ["Customer", "customer"],
    ["Leads", "leads"],
    ["Projects", "projects"],
    ["Vendors", "vendors"],
  ];

  return (
    //   <header className="sticky top-0 z-50 backdrop-blur">
    //     <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
    //       {/* Logo */}
    //       <div className="flex items-center gap-2 font-semibold">
    //         <LayoutDashboard size={22} />
    //         <span className="hidden sm:inline">CRM</span>
    //       </div>

    //       {/* Desktop Navigation */}
    //       {user && (
    //         <div className="ml-8 hidden md:flex items-center gap-6 text-sm font-medium">
    //           {navItems.map(([label, path]) => (
    //             <NavLink
    //               key={label}
    //               to={path}
    //               className={({ isActive }) =>
    //                 `
    //                 transition-colors
    //                 hover:opacity-100
    //                 ${isActive ? "opacity-100 font-semibold" : "opacity-70"}
    //               `
    //               }
    //             >
    //               {label}
    //             </NavLink>
    //           ))}
    //         </div>
    //       )}

    //       {/* Spacer */}
    //       <div className="ml-auto flex items-center gap-3">
    //         {/* Mobile menu toggle */}
    //         {user && (
    //           <button
    //             onClick={() => setMenuOpen((prev) => !prev)}
    //             className="md:hidden rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
    //             aria-label="Toggle menu"
    //           >
    //             {menuOpen ? <X size={20} /> : <Menu size={20} />}
    //           </button>
    //         )}

    //         {!user && (
    //           <Link
    //             to="/login"
    //             className="text-sm font-medium opacity-80 hover:opacity-100"
    //           >
    //             Login
    //           </Link>
    //         )}

    //         {user && (
    //           <>
    //             <CircleUserRound size={20} />
    //             <Clock />

    //             <button
    //               onClick={toggleTheme}
    //               aria-label="Toggle theme"
    //               className="
    //   flex items-center justify-center
    //   rounded-full
    //   border
    //   px-2.5 py-2
    //   transition-all duration-200
    //   hover:scale-105
    //   hover:shadow-sm
    //   border-[var(--border-color)]
    //   bg-[var(--bg-color)]
    //   hover:bg-black/5
    //   dark:hover:bg-white/10
    // "
    //             >
    //               {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    //             </button>

    //             <button
    //               onClick={handleLogout}
    //               className="
    //   rounded-md
    //   border
    //   px-3 py-1.5
    //   text-sm font-medium
    //   transition-all duration-200
    //   border-[var(--border-color)]
    //   hover:bg-red-500/10
    //   hover:text-red-500
    // "
    //             >
    //               Logout
    //             </button>
    //           </>
    //         )}
    //       </div>
    //     </nav>

    //     {/* Mobile Navigation */}
    //     {menuOpen && user && (
    //       <div className="md:hidden border-t px-4 py-3">
    //         <div className="flex flex-col gap-3 text-sm font-medium">
    //           {navItems.map(([label, path]) => (
    //             <Link
    //               key={label}
    //               to={path}
    //               onClick={() => setMenuOpen(false)}
    //               className="opacity-80 hover:opacity-100"
    //             >
    //               {label}
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </header>
    <header className="sticky top-0 z-50 backdrop-blur">
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
        {/* Left: Logo */}
        {/* <div className="flex items-center gap-2 font-semibold">
          <Rotate3d size={35} />
          <span className="hidden sm:inline text-3xl ">ORBIT</span>
        </div> */}
        <div className="flex items-center gap-3">
          <Rotate3d size={36} className="opacity-90" />
          <span
            className="
      hidden sm:inline
      font-logo
      text-3xl
      tracking-wide
      select-none
    "
          >
            ORBIT
          </span>
        </div>

        {/* Center: Main Navigation */}
        {user && (
          <div className="hidden md:flex justify-center gap-8 text-sm font-medium">
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
                        absolute left-0 right-0 -bottom-0.5 mx-auto h-[1.5px] w-0
                        bg-current opacity-40
                        transition-all duration-300
                        ${isActive ? "w-full" : "group-hover:w-full"}
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
        )}

        {/* Right: Utilities */}
        <div className="ml-auto flex items-center justify-end gap-4">
          {/* Mobile menu */}
          {user && (
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}

          {!user && (
            <Link
              to="/login"
              className="text-sm font-medium opacity-80 hover:opacity-100"
            >
              Login
            </Link>
          )}

          {user && (
            <>
              <CircleUserRound size={20} className="opacity-80" />
              <Clock />

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="
                  flex items-center justify-center
                  rounded-full border
                  px-2.5 py-2
                  transition-all duration-200
                  hover:scale-105 hover:shadow-sm
                  border-[var(--border-color)]
                  bg-[var(--bg-color)]
                  hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer
                "
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="
                  rounded-md border px-3 py-1.5
                  text-sm font-medium
                  transition-all duration-200
                  border-[var(--border-color)]
                  hover:bg-red-500/10 hover:text-red-500 cursor-pointer
                "
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && user && (
        <div className="md:hidden border-t px-6 py-4">
          <div className="flex flex-col gap-4 text-sm font-medium">
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
    </header>
  );
};

export default Header;
