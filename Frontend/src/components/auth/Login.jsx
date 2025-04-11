import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios"; // Import Axios

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const nav = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      console.log("Logged in successfully", response.data);

      localStorage.setItem("authToken", response.data.token);
      nav("/items")

    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 w-full max-w-md text-primary">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-primary">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-primary">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-secondary hover:bg-third text-white font-semibold rounded-lg transition duration-300"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>

          <p className="mt-4 text-sm text-center text-primary">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-secondary hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
