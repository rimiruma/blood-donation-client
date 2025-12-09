// import React from "react";
// import { Link } from "react-router-dom";


// const Banner = () => {


//   return (
//     <div  style={{
//         backgroundImage: "url(https://i.ibb.co.com/rbgPvpm/blood-donation-guidelines-hero.jpg)",
//       }}  className="relative mt-20  text-white py-16 px-6">
//     {/* Background */}
//     <div className="absolute inset-0 bg-red-300 opacity-30"></div>

//     <div className="relative container mx-auto flex flex-col items-center text-center">
//       {/* Logo */}
//       <div className="flex items-center space-x-2 mb-4">
//         <img
//           src="https://i.ibb.co.com/rbgPvpm/blood-donation-guidelines-hero.jpg" // Replace with your logo URL
//           alt="Blood Bank Logo"
//           className="w-12 h-12 rounded-full"
//         />
//         <h2 className="text-2xl text-white  font-bold">Blood Bank</h2>
//       </div>

//       {/* Heading */}
//       <h1 className="text-5xl text-red-500  font-extrabold mb-4">
//         DONATE <span className="text-red-500 ">YOUR BLOOD</span>
//       </h1>

//       {/* Event Details */}
//       <p className="text-lg text-white  mb-6">
//         January 20<sup> Mo</sup>, 2025 - 11:00 PM
//       </p>

//       <p className="text-base text-white mb-8 max-w-md mx-auto">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
//         lorem eu libero feugiat aliquet volutpat habitant.
//       </p>

//       {/* Buttons */}
//       <div className="flex space-x-4">
//         <a
//           href="/register"
//           className="bg-white text-red-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
//         >
//           Join as a Donor
//         </a>
//        <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"><Link to='/search'> Search Donors</Link></button>
//       </div>
//     </div>

//     {/* Illustration */}
//     <div className="absolute bottom-0 right-0 w-1/2">
//       <img
//         src="https://i.ibb.co.com/rbgPvpm/blood-donation-guidelines-hero.jpg" // Replace with a blood bag or hand illustration URL
//         alt="Blood Donation Illustration"
//         className="w-12 h-12 rounded-full"
//       />
//     </div>
//   </div>
//   );
// };

// export default Banner;



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
