import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import useUserRole from "../hook/useUserRole";
import { FaBars, FaTimes, FaHome, FaSignOutAlt, FaUser, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [userRole] = useUserRole(user?.email);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch((error) => console.error("Logout Error:", error.message));
  };

  return (
    <div className="flex h-screen dark:bg-gray-900">

      {/* Sidebar */}
      <div className={`
        bg-blue-400 dark:bg-gray-800 text-white w-64 
        lg:static fixed h-full transition-transform transform
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 z-40
      `}>
        <div className="p-4 text-2xl font-bold border-b border-blue-500 dark:border-gray-700">
          Dashboard
        </div>

        <nav className="p-4">
          <ul className="space-y-2">

            {/* Donor Links */}
            {userRole === "donor" && (
              <>
                <div>
                  <h2 className="text-lg font-semibold">Donor Dashboard</h2>
                </div>
                <Link to="/dashboard/dashboard-Home" className="block py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">Dashboard Home</Link>
                <Link to="/dashboard/my-donation-requests" className="block py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">My Donation Requests</Link>
                <Link to="/dashboard/Create-Donation-Request" className="block py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">Create Donation Request</Link>
              </>
            )}

            {/* Admin Links */}
            {userRole === "admin" && (
              <>
                <div>
                  <h2 className="text-lg font-semibold">Admin Dashboard</h2>
                </div>
                <Link to="/dashboard/admin-Home" className="py-2 px-4 rounded flex items-center gap-1 hover:bg-blue-600 dark:hover:bg-blue-700 transition"><FaHome /> Admin Home</Link>
                <Link to="/dashboard/all-users" className="py-2 px-4 rounded flex items-center gap-1 hover:bg-blue-600 dark:hover:bg-blue-700 transition"><FaUsers /> All Users</Link>
                <Link to="/dashboard/all-blood-donation-requests" className="block py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">All Blood Donation Requests</Link>
              </>
            )}

            {/* Volunteer Links */}
            {userRole === "volunteer" && (
              <>
                <div>
                  <h2 className="text-lg font-semibold">Volunteer Dashboard</h2>
                </div>
                <Link to="/dashboard/volunteer-home" className="block py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">
                  Volunteer Home
                </Link>
                <Link to="/dashboard/volunteer-all-blood-donation-request" className="block py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">
                  All Blood Donation Request
                </Link>
              </>
            )}

            <div className="divider border-t border-blue-500 dark:border-gray-700 my-2"></div>

            {/* Common Links */}
            <li>
              <Link to="/" className="flex items-center gap-1 py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="profile" className="flex items-center gap-1 py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition">
                <FaUser /> Profile
              </Link>
            </li>
            <li>
              <button onClick={handleLogOut} className="flex items-center gap-1 py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition w-full text-left">
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900">
        <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <button className="lg:hidden text-gray-600 dark:text-gray-300 text-2xl" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100">Dashboard</h1>
        </div>

        <div className="p-4 overflow-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
