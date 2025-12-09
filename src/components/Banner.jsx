import React from "react";
import { FaHeartbeat, FaTint, FaPhoneAlt } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#600000] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* ----------- Left Text Section ----------- */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Save Lives. <span className="text-yellow-400">Donate Blood</span> Today.
          </h1>

          <p className="text-lg mt-4">
            Your donation can give someone a second chance at life. Join thousands
            of heroes making a difference every day in Bangladesh.
          </p>

          <p className="mt-4 text-xl font-semibold">
            Call Us: <span className="text-yellow-300">01977-514635</span>
          </p>

          {/* --- Icon Boxes --- */}
          <div className="flex gap-4 mt-8">
            <div className="bg-white/10 w-20 h-20 rounded-xl flex items-center justify-center">
              <FaTint className="text-3xl text-red-400" />
            </div>
            <div className="bg-white/10 w-20 h-20 rounded-xl flex items-center justify-center">
              <MdHealthAndSafety className="text-3xl text-yellow-400" />
            </div>
            <div className="bg-white/10 w-20 h-20 rounded-xl flex items-center justify-center">
              <FaHeartbeat className="text-3xl text-cyan-300" />
            </div>
            <div className="bg-white/10 w-20 h-20 rounded-xl flex items-center justify-center">
              <FaTint className="text-3xl text-red-300" />
            </div>
          </div>

          {/* --- Buttons --- */}
          <div className="flex gap-4 mt-8">
            <button className="bg-transparent border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              <Link to="/register">Join as a donor</Link>
            </button>
            <button className="bg-transparent border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              <Link to='/search'> Search Donors</Link>
            </button>
          </div>
        </div>

        {/* ----------- Right Side Image ----------- */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
            src="https://i.ibb.co.com/YTpgX3gX/bannerimg.png"
            alt="blood donation"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
