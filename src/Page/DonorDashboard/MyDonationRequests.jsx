import { useState, useEffect } from "react";
import { useAuth } from "../../Provider/AuthProvider";
import axios from "axios";

const MyDonationRequests = () => {
    const { user } = useAuth();
    const [requests, setRequests] = useState([]);
    const [statusFilter, setStatusFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDonationRequests();
    }, [statusFilter, currentPage, user.email]);

    const fetchDonationRequests = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/my-donation-requests', {
                params: {
                    email: user.email,
                    status: statusFilter,
                    page: currentPage,
                    limit: 10
                }
            });
            setRequests(response.data.donations);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching donations:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 dark:bg-gray-900 dark:text-gray-100">
            {/* Header & Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400">
                    My Donation Requests
                </h2>
                <select
                    value={statusFilter}
                    onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="select select-bordered dark:bg-gray-800 dark:text-gray-100 border-red-400 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                >
                    <option value="">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="canceled">Canceled</option>
                </select>
            </div>

            {/* Loading */}
            {loading ? (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400 animate-pulse">
                    Loading...
                </div>
            ) : (
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-red-600 text-white">
                            <tr>
                                <th className="p-3 text-left">Recipient Name</th>
                                <th className="p-3 text-left">Location</th>
                                <th className="p-3 text-left">Date</th>
                                <th className="p-3 text-left">Time</th>
                                <th className="p-3 text-left">Status</th>
                                <th className="p-3 text-left">Hospital Name</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
                            {requests.map((request) => (
                                <tr
                                    key={request._id}
                                    className="hover:bg-red-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <td className="p-2">{request.recipientName}</td>
                                    <td className="p-2">
                                        {request.recipientDistrict}, {request.recipientUpazila}
                                    </td>
                                    <td className="p-2">{request.donationDate}</td>
                                    <td className="p-2">{request.donationTime}</td>
                                    <td className="p-2">
                                        <span
                                            className={`px-2 py-1 rounded font-medium ${
                                                request.donationStatus === 'completed'
                                                    ? 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200'
                                                    : request.donationStatus === 'inprogress'
                                                    ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200'
                                                    : request.donationStatus === 'canceled'
                                                    ? 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200'
                                                    : 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200'
                                            }`}
                                        >
                                            {request.donationStatus}
                                        </span>
                                    </td>
                                    <td className="p-2">{request.hospitalName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Pagination */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="btn btn-sm bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="btn btn-sm bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MyDonationRequests;
