import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DonationRequests = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://assinment12server.vercel.app/requests")
      .then((res) => setRequests(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-red-600 text-center">
        🩸 Blood Donation Requests (Pending)
      </h2>

      <div className="overflow-x-auto rounded-xl border border-red-200 dark:border-gray-700 shadow-lg">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="p-3 border border-red-500">#</th>
              <th className="p-3 border border-red-500">Recipient</th>
              <th className="p-3 border border-red-500">Location</th>
              <th className="p-3 border border-red-500">Blood Group</th>
              <th className="p-3 border border-red-500">Date</th>
              <th className="p-3 border border-red-500">Time</th>
              <th className="p-3 border border-red-500">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white dark:bg-gray-800">
            {requests.map((req, index) => (
              <tr
                key={req._id}
                className="text-center hover:bg-red-50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-3 border">{index + 1}</td>
                <td className="p-3 border font-medium">
                  {req.recipientName}
                </td>
                <td className="p-3 border">{req.fullAddress}</td>

                <td className="p-3 border">
                  <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 font-semibold">
                    {req.bloodGroup}
                  </span>
                </td>

                <td className="p-3 border">{req.donationDate}</td>
                <td className="p-3 border">{req.donationTime}</td>

                <td className="p-3 border">
                  <button
                    onClick={() =>
                      navigate(`/donation-requests-details/${req._id}`)
                    }
                    className="px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}

            {/* Empty State */}
            {requests.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="p-6 text-center text-gray-500"
                >
                  No donation requests available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationRequests;
