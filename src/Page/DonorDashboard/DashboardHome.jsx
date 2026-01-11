import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TbViewfinder } from "react-icons/tb";
import { VscEdit } from "react-icons/vsc";



import { useAuth } from '../../Provider/AuthProvider';

const DashboardHome = () => {

  const {user} = useAuth();
console.log("user fffe", user)

  const [donationRequests, setDonationRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch 3 Recent Donation Requests
    const fetchRecentRequests = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/recent-donation-requests?email=${user?.email}`
        );
        setDonationRequests(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecentRequests();
  }, [user]);

  const handleStatusUpdate = async (id, status) => {
    try {
      await axios.patch(`http://localhost:3000/donation-requests/${id}/status`, { status });
      setDonationRequests((prev) =>
        prev.map((req) => (req._id === id ? { ...req, donationStatus: status } : req))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      try {
        await axios.delete(`http://localhost:3000/donation-requests/${id}`);
        setDonationRequests((prev) => prev.filter((req) => req._id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6">
       <h1 className="text-2xl font-bold mb-4">
      Welcome, {user?.displayName || user?.name || 'User'}!
    </h1>

      {donationRequests.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Recent Donation Requests</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Recipient</th>
                <th className="border border-gray-300 px-4 py-2">Location</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Time</th>
                <th className="border border-gray-300 px-4 py-2">Blood Group</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {donationRequests.map((request) => (
                <tr key={request._id}>
                  <td className="border border-gray-300 px-4 py-2">{request.recipientName}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.recipientDistrict}, {request.recipientUpazila}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{request.donationDate}</td>
                  <td className="border border-gray-300 px-4 py-2">{request.donationTime}</td>
                  <td className="border border-gray-300 px-4 py-2">{request.bloodGroup}</td>
                  <td className="border border-gray-300 px-4 py-2">{request.donationStatus}</td>
                  <td className="border border-gray-300 px-4 py-2 space-x-2">
                    {request.donationStatus === 'inprogress' && (
                      <>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => handleStatusUpdate(request._id, 'done')}
                        >
                          Done
                        </button>
                        <button
                          className="btn btn-sm btn-error"
                          onClick={() => handleStatusUpdate(request._id, 'canceled')}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                    <div className='flex gap-2'>
                    <button
                      className="btn-square p-4 bg-orange-600 text-white"
                      onClick={() => navigate(`/dashboard/donation-requests-edit/${request._id}`)}
                    >
                      <VscEdit />
                    </button>
                    <button
                      className="btn-square p-4 bg-red-600 text-white"
                      onClick={() => handleDelete(request._id)}
                    >
                      <RiDeleteBin5Fill />
                    </button>
                    <button
                      className="btn-square p-4 bg-yellow-600 text-white"
                      onClick={() => navigate(`/dashboard/donation-requests-details/${request._id}`)}
                    >
                      <TbViewfinder />
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {donationRequests.length === 0 && (
        <p className="text-gray-500">You have no recent donation requests.</p>
      )}

      <Link
        className="btn btn-primary mt-4"
        to='/dashboard/my-donation-requests'
      >
        View My All Requests
      </Link>
    </div>
  );
};

export default DashboardHome;
