import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Moon, Sun, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hoverEffect } from "../../animations";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const [themeIcon, setThemeIcon] = useState("dark");
  const navigate = useNavigate();
  const toggleTheme = () => {
    themeIcon === "dark" ? setThemeIcon("light") : setThemeIcon("dark");
  };

  const [linkClicked, setLinkClicked] = useState("Explore");
  const handleLinkClick = (link) => {
    setLinkClicked(link);
    handleHomeClick();
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignupClick = () => {
    navigate("/signup");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleCategoriesClick = () => {
    navigate("/categories");
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
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
      <ScrollLink
        to="explore"
        smooth={true}
        duration={500}
        onClick={() => handleLinkClick("Explore")}
      >
        <motion.div
          {...hoverEffect}
          className="flex items-center gap-5 cursor-pointer"
        >
      
          <h1 className="text-3xl">RecyConnect</h1>
        </motion.div>
      </ScrollLink>
      <div className="lg:flex gap-10 px-4 ml-17 py-2 hidden lg:visible text-primary ">
        <ScrollLink
          to="explore"
          smooth={true}
          duration={500}
          className={`hover:text-third border-b-2  cursor-pointer
            ${
              linkClicked === "Explore"
                ? "  border-third"
                : "border-background"
            }`}
          onClick={() => handleLinkClick("Explore")}
        >
          Explore
        </ScrollLink>

        <ScrollLink
          to="categories"
          smooth={true}
          duration={500}
          className={`hover:text-third border-b-2  cursor-pointer
            ${
              linkClicked === "Categories"
                ? "  border-third"
                : "border-background"
            }`}
          onClick={() => {
            handleLinkClick("Categories");
            handleCategoriesClick();
          }}
        >
          Categories
        </ScrollLink>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          className={`hover:text-third border-b-2  cursor-pointer
            ${
              linkClicked === "Services"
                ? "  border-third"
                : "border-background"
            }`}
          onClick={() => handleLinkClick("Services")}
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="contactus"
          smooth={true}
          duration={500}
          className={`hover:text-third border-b-2  cursor-pointer
            ${
              linkClicked === "Contact Us"
                ? "  border-third"
                : "border-background"
            }`}
          onClick={() => handleLinkClick("Contact Us")}
        >
          Contact Us
        </ScrollLink>
      </div>
      <div className="flex justify-around items-center gap-8">
        <div className="lg:flex gap-7 hidden">
          <motion.button
            className={`border-1 border-background hover:border-primary px-4 py-1 rounded-[10px] cursor-pointer  ${
              linkClicked === "Login" ? "  border-primary" : "border-background"
            }`}
            {...hoverEffect}
            onClick={() => {
              handleLoginClick();
              setLinkClicked("Login");
            }}
          >
            Login
          </motion.button>
          <motion.button
            className={`border-1 bg-secondary text-background  border-background hover:border-primary px-4 py-1 rounded-[10px] cursor-pointer ${
              linkClicked === "Signup"
                ? "  border-primary"
                : "border-background"
            }`}
            {...hoverEffect}
            onClick={() => {
              handleSignupClick();
              setLinkClicked("Signup");
            }}
          >
            Sign Up
          </motion.button>
        </div>
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
