import React from "react";
import logo from "../../../assets/logo.png"; // আপনার লোগো path দিন

const Navbar = () => {
  return (
    <div className="bg-[#8A0000] shadow-md">
      <div className="navbar container mx-auto text-white py-2">

        {/* Left : Logo + Name */}
        <div className="navbar-start">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
            <span className="text-2xl font-bold">BloodBD</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="dropdown ml-4 lg:hidden navbar-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li><a>Home</a></li>
            <li><a>Find Donor</a></li>
            <li><a>About</a></li>
            <li><a>Privacy</a></li>

            <div className="mt-2 flex flex-col gap-2">
              <button className="px-4 py-2 border border-red-600 rounded-full text-red-600">Login</button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-full">Register</button>
            </div>
          </ul>
        </div>

        {/* Menu (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg font-medium gap-8">
            <li><a className="hover:text-gray-300">Home</a></li>
            <li><a className="hover:text-gray-300">Find Donor</a></li>
            <li><a className="hover:text-gray-300">About</a></li>
            <li><a className="hover:text-gray-300">Privacy</a></li>
          </ul>
        </div>

        {/* Right Buttons */}
        <div className="navbar-end hidden lg:flex gap-3">
          <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
            Login
          </button>
          <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
