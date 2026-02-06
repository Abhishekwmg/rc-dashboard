import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Rotate3d,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  FingerprintPattern,
} from "lucide-react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const footerSocial = [
    { Icon: Github, label: "GitHub" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Facebook, label: "Facebook" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    // <div
    //   className="min-h-screen flex"
    //   style={{
    //     backgroundImage: "url('./src/assets/loginbgg.jpg')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="flex-1 flex items-center justify-center p-12">
    //     <form
    //       onSubmit={handleSubmit}
    //       className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm shadow-lg rounded-xl p-8 w-full max-w-md"
    //     >
    //       <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
    //         Login
    //       </h2>

    //       {error && (
    //         <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
    //       )}

    //       <div className="flex flex-col gap-4">
    //         <input
    //           type="email"
    //           placeholder="Email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
    //         />

    //         <input
    //           type="password"
    //           placeholder="Password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition-colors"
    //       >
    //         Login
    //       </button>

    //       <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
    //         Don't have an account?{" "}
    //         <a href="/signup" className="text-purple-600 hover:underline">
    //           Sign up
    //         </a>
    //       </p>
    //     </form>
    //   </div>

    //   {/* Right: CRM Logo + Text Content */}
    //   <div className="flex-1 flex flex-col justify-center p-12 bg-black bg-opacity-50 text-white">
    //     <div className="flex items-center gap-3">
    //       <Rotate3d size={36} className="opacity-90" />
    //       <span className="hidden sm:inline font-logo text-3xl tracking-wide select-none">
    //         ORBIT
    //       </span>
    //     </div>

    //     <h1 className="text-4xl font-bold mb-4">Welcome to Your CRM</h1>
    //     <p className="text-lg max-w-md">
    //       Manage your leads, track your sales, and grow your business—all in one
    //       place. Sign in to continue and start optimizing your workflow today.
    //     </p>
    //     <p className="mt-6 text-sm italic text-gray-300 dark:text-gray-400 max-w-sm">
    //       “Organize your leads. Close more deals. Grow smarter.”
    //     </p>
    //   </div>
    // </div>
    <div
      className="min-h-screen flex flex-col md:flex-row"
      style={{
        backgroundImage: "url('./src/assets/loginbgg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Side: Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 rounded-xl shadow-lg
            bg-white
            backdrop-blur-md border border-white/20 dark:border-gray-300/20 opacity-50"
        >
          <h2 className="text-3xl font-bold text-black-900 dark:text-black mb-6 text-center">
            Login
          </h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-semibold py-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Login
          </button>

          <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="underline">
              Sign up
            </a>
          </p>
        </form>
      </div>

      {/* Right Side: Logo + Content */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-12 bg-black/900 dark:bg-black/80 text-white rounded-l-4xl">
        <div className="flex items-center gap-3 mb-6">
          <Rotate3d size={36} className="opacity-90" />
          <span className="hidden sm:inline font-logo text-3xl tracking-wide select-none">
            ORBIT
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-white/90">
          Build digital products with:
        </h1>
        <h3 className="text-2xl max-w-md text-white/100 mt-4 mb-2">
          All-in-one tool
        </h3>
        <p className="text-sm max-w-md text-white/100">
          Manage your leads, track your sales, and grow your business—all in one
          place. Sign in to continue and start optimizing your workflow today.
        </p>
        <p className="mt-6 mb-6 text-sm italic text-white/100 max-w-sm">
          “Organize your leads. Close more deals. Grow smarter.”
        </p>
        <div className="flex gap-4">
          {footerSocial.map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full border
                  border-(--border-color)
                  opacity-80 transition-all
                  hover:opacity-100 hover:scale-110
                  hover:bg-black/50 dark:hover:bg-white/20
                "
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
