import React, { useState } from "react";
import logo from "../../../public/logo.png";
import { useAuth } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import useTheme from "../../hook/useTheme";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  console.log("Current Theme:", theme);

  // Handle Logout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        setDropdownOpen(false);
        navigate("/login");
      })
      .catch((error) => console.error("Logout Error:", error.message));
  };

  return (
    <nav className="fixed top-0 left-0 w-full  shadow-md z-50">
      <div className="container dark:bg-gray-900 bg-[#8A0000] text-white dark:text-black mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <a href="/" className="text-2xl font-bold text-white">
            Blood
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li>
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/donation-requests" className="text-white">
              Donation Requests
            </a>
          </li>
          <li>
            <a href="/blog" className="text-white">
              Blog
            </a>
          </li>
          <li>
            <a href="/funding-links" className="text-white">
              Funding Links
            </a>
          </li>

          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="synthwave" onChange={(e) => toggleTheme(e.target.checked)} checked={theme === "dark"} />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* User Avatar with Dropdown */}
          {user ? (
            <li className="relative">
              <img
                src={user?.photoURL}
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer border-2 border-white"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              />

              {isDropdownOpen && (
                <ul
                  className=" absolute right-0 mt-2 w-48 dark:bg-gray-900 text-white border rounded shadow-md"
                  style={{ zIndex: 30 }}
                >
                  <li>
                    <a
                      href="/dashboard"
                      className="block px-4 py-2 text-gray-600 dark:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left px-4 py-2 text-gray-600 dark:text-white"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <li>
              <a href="/login" className="hover:text-gray-800">
                Login
              </a>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pink-50 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-600">
            <li>
              <a href="/" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/donation-requests" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                Donation Requests
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                Blog
              </a>
            </li>
            <li>
              <a href="/funding-links" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                Funding Links
              </a>
            </li>

            {user ? (
              <>
                <li>
                  <a href="/dashboard" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                    Dashboard
                  </a>
                </li>
                <li>
                  <button onClick={handleLogOut} className="text-gray-600 hover:text-gray-800">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <a href="/login" className="text-white" onClick={() => setMenuOpen(false)}>
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
