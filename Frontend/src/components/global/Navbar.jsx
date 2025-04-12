import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun, User } from "lucide-react";
import { motion } from "framer-motion";
import { hoverEffect } from "../../animations";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const [themeIcon, setThemeIcon] = useState("dark");
  const [linkClicked, setLinkClicked] = useState("Explore");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setThemeIcon((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".user-dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background lg:font-display text-secondary p-4 flex justify-around items-center gap-25 lg:gap-0 z-50">
      {/* App Logo - Navigate to / */}
      <Link to="/" onClick={() => setLinkClicked("Explore")}>
        <motion.div
          {...hoverEffect}
          className="flex items-center gap-5 cursor-pointer"
        >
          <h1 className="text-3xl">RecyConnect</h1>
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <div className="lg:flex gap-10 px-4 ml-17 py-2 hidden lg:visible text-primary">
        <Link
          to="/"
          className={`hover:text-secondary border-b-2 cursor-pointer ${linkClicked === "Home" ? "border-secondary" : "border-background"
            }`}
          onClick={() => setLinkClicked("Home")}
        >
          Home
        </Link>

        <Link
          to="/overview"
          className={`hover:text-secondary border-b-2 cursor-pointer ${linkClicked === "Explore" ? "border-secondary" : "border-background"
            }`}
          onClick={() => setLinkClicked("Explore")}
        >
          Explore
        </Link>
      </div>

      {/* Right Side Buttons and Theme/User Controls */}
      <div className="flex justify-around items-center gap-8">
        <div className="lg:flex gap-7 hidden">
          <motion.button
            className={`border-1 border-background hover:border-primary px-4 py-1 rounded-[10px] cursor-pointer ${linkClicked === "Login" ? "border-primary" : "border-background"
              }`}
            {...hoverEffect}
            onClick={() => {
              navigate("/login");
              setLinkClicked("Login");
            }}
          >
            Login
          </motion.button>

          <motion.button
            className={`border-1 bg-secondary text-background border-background hover:border-primary px-4 py-1 rounded-[10px] cursor-pointer ${linkClicked === "Signup" ? "border-primary" : "border-background"
              }`}
            {...hoverEffect}
            onClick={() => {
              navigate("/signup");
              setLinkClicked("Signup");
            }}
          >
            Sign Up
          </motion.button>
        </div>

        {/* User Dropdown & Theme Toggle */}
        <div className="flex gap-4">
          <div className="relative user-dropdown-container">
            <User onClick={toggleDropdown} className="w-6 h-6 cursor-pointer" />
            {isDropdownOpen && (
              <div className="absolute -left-45 md:-left-15 lg:-left-45 mt-5 bg-white shadow-md rounded-lg">
                <UserDropdown />
              </div>
            )}
          </div>

          <div onClick={toggleTheme}>
            {themeIcon === "dark" ? (
              <Moon className="w-6 h-6 cursor-pointer" />
            ) : (
              <Sun className="w-6 h-6 cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
