import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Provider/AuthProvider"; // যদি AuthProvider থাকে
import LoadingSpinner from "../../components/LoadingSpinner";

const DonationRequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [requestDetails, setRequestDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchRequestDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/donation-requests/${id}`);
        setRequestDetails(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch donation request details.");
        setLoading(false);
      }
    };

    fetchRequestDetails();
  }, [id]);

  const handleConfirmDonation = async () => {
    try {
      await axios.patch(`http://localhost:3000/donation-requests/${id}/status`, {
        status: "inprogress",
      });
      alert("Donation confirmed successfully!");
      setIsModalOpen(false);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to confirm donation.");
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="p-6">
        <p className="text-red-500 mb-4">{error}</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blood Donation Request Details</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 space-y-3">
        <p>
          <strong>Recipient Name:</strong> {requestDetails.recipientName}
        </p>
        <p>
          <strong>Location:</strong> {requestDetails.recipientDistrict}, {requestDetails.recipientUpazila}
        </p>
        <p>
          <strong>Blood Group:</strong> {requestDetails.bloodGroup}
        </p>
        <p>
          <strong>Hospital:</strong> {requestDetails.hospitalName || "N/A"}
        </p>
        <p>
          <strong>Date:</strong> {requestDetails.donationDate}
        </p>
        <p>
          <strong>Time:</strong> {requestDetails.donationTime}
        </p>
        <p>
          <strong>Additional Notes:</strong> {requestDetails.requestMessage || "N/A"}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={`font-bold ${requestDetails.donationStatus === "pending" ? "text-yellow-500" : "text-green-500"}`}>
            {requestDetails.donationStatus}
          </span>
        </p>

        <button
          className="btn btn-primary mt-4"
          onClick={() => setIsModalOpen(true)}
          disabled={requestDetails.donationStatus !== "pending"}
        >
          Donate
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Confirm Donation</h2>
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Donor Name</label>
                <input
                  type="text"
                  value={user?.name || ""}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block font-medium">Donor Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleConfirmDonation}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationRequestDetails;
