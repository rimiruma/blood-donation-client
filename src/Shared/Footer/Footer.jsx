import React from "react";
import {
  FaTint,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#530000] dark:bg-gray-950 text-white dark:text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaTint className="text-red-400" />
            <span>LifeSaver</span>
          </div>
          <p className="mt-4 text-gray-200 dark:text-gray-400 text-sm">
            Donate blood, save lives. Join thousands of donors who make
            a difference every single day.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-300 dark:hover:text-red-400 cursor-pointer">
              Find Donor
            </li>
            <li className="hover:text-red-300 dark:hover:text-red-400 cursor-pointer">
              Request Blood
            </li>
            <li className="hover:text-red-300 dark:hover:text-red-400 cursor-pointer">
              Donation Camps
            </li>
            <li className="hover:text-red-300 dark:hover:text-red-400 cursor-pointer">
              Health Tips
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-gray-200 dark:text-gray-400">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-300 dark:text-red-400" />
              +880 1900-000000
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-300 dark:text-red-400" />
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-red-300 dark:hover:text-red-400" />
            <FaYoutube className="cursor-pointer hover:text-red-300 dark:hover:text-red-400" />
            <FaHeart className="cursor-pointer hover:text-red-300 dark:hover:text-red-400" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-sm text-gray-300 dark:text-gray-500">
        © {new Date().getFullYear()} LifeSaver — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
