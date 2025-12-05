import React from "react";
import { FaTint, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaYoutube, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#530000] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaTint className="text-red-400" />
            <span>LifeSaver</span>
          </div>
          <p className="mt-4 text-gray-200 text-sm">
            Donate blood, save lives. Join thousands of donors who make
            a difference every single day.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-300 cursor-pointer">Find Donor</li>
            <li className="hover:text-red-300 cursor-pointer">Request Blood</li>
            <li className="hover:text-red-300 cursor-pointer">Donation Camps</li>
            <li className="hover:text-red-300 cursor-pointer">Health Tips</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-300" />
              +880 1900-000000
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-300" />
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-red-300" />
            <FaYoutube className="cursor-pointer hover:text-red-300" />
            <FaHeart className="cursor-pointer hover:text-red-300" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-sm text-gray-300">
        © {new Date().getFullYear()} LifeSaver — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
