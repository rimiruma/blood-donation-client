import React, { useState } from "react";
import logo from "../../../public/logo.png";
import { useAuth } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaMix } from "react-icons/fa";
// import { FiMenu, FiX } from "react-icons/fi"; // Import icons for hamburger and close button
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import ThemeToggle from "../../components/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
    <nav className="fixed top-0 left-0 w-full bg-[#8A0000] shadow-md z-50">
      <div className="container text-white mx-auto px-4 py-4 flex justify-between items-center">
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

          {user && (
            <li>
              <a href="/funding-links" className="text-white">
                Funding Links
              </a>
            </li>
          )}

          <ThemeToggle></ThemeToggle>

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
                  className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md"
                  style={{ zIndex: 30 }}
                >
                  <li>
                    <a
                      href="/dashboard"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
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
          {isMenuOpen ? <FiX size={28} /> : <FiMenu  size={28} />}
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
            {user && (
              <li>
                <a href="/funding-links" className="hover:text-gray-800" onClick={() => setMenuOpen(false)}>
                  Funding Links
                </a>
              </li>
            )}

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
