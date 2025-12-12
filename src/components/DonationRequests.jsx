import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DonationRequests = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate(); // <-- useNavigate হুক

  useEffect(() => {
    axios.get("http://localhost:3000/requests")
      .then(res => setRequests(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Blood Donation Requests (Pending)</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">

          <thead>
            <tr>
              <th>#</th>
              <th>Recipient</th>
              <th>Location</th>
              <th>Blood Group</th>
              <th>Date</th>
              <th>Time</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req, index) => (
              <tr key={req._id}>
                <td>{index + 1}</td>
                <td>{req.recipientName}</td>
                <td>{req.fullAddress}</td>
                <td>{req.bloodGroup}</td>
                <td>{req.donationDate}</td>
                <td>{req.donationTime}</td>

                <td>
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => navigate(`/donation-requests-details/${req._id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default DonationRequests;
