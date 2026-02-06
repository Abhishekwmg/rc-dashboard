import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Rotate3d, Github, Linkedin, Twitter, Facebook } from "lucide-react";

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
    <div
      className="min-h-screen flex flex-col md:flex-row"
      style={{
        backgroundImage: "url('./src/assets/loginbgg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-1 flex items-center justify-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 rounded-xl shadow-lg
            bg-white
            backdrop-blur-md border border-white/20 dark:border-gray-300/20 opacity-80"
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
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-white-700/70 text-gray-900 dark:text-black placeholder-white-100 focus:outline-none focus:ring-2 focus:ring-black-900"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-white-700/70 text-gray-900 dark:text-black placeholder-white-100 focus:outline-none focus:ring-2 focus:ring-black-900"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer mt-6 w-full bg-gray-900 dark:bg-black-900 text-white dark:text-white hover:text-black font-semibold py-3 rounded-md hover:bg-black-900 dark:hover:bg-gray-400 transition-colors"
          >
            Login
          </button>

          <p className="mt-4 text-sm text-gray-700 dark:text-black-300 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="underline bold">
              Sign up
            </a>
          </p>
        </form>
      </div>

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
        <h3 className="text-2xl max-w-md text-white mt-4 mb-2">
          All-in-one tool
        </h3>
        <p className="text-sm max-w-md text-white">
          Manage your leads, track your sales, and grow your business—all in one
          place. Sign in to continue and start optimizing your workflow today.
        </p>
        <p className="mt-6 mb-6 text-sm italic text-white max-w-sm">
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
