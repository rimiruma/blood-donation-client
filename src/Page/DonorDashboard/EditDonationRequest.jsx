import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditDonationRequest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    recipientName: "",
    recipientDistrict: "",
    recipientUpazila: "",
    donationDate: "",
    donationTime: "",
    bloodGroup: "",
  });

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await axios.get(`https://assinment12server.vercel.app/donation-requests/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching donation request:", error);
      }
    };
    fetchRequest();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://assinment12server.vercel.app/donation-requests/${id}`, formData);
      navigate("/dashboard/dashboard-Home");
    } catch (error) {
      console.error("Error updating donation request:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Edit Donation Request
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Recipient Name", name: "recipientName", type: "text" },
          { label: "District", name: "recipientDistrict", type: "text" },
          { label: "Upazila", name: "recipientUpazila", type: "text" },
          { label: "Date", name: "donationDate", type: "date" },
          { label: "Time", name: "donationTime", type: "time" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
            />
          </div>
        ))}

        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300 mb-2">
            Blood Group
          </label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          >
            <option value="" disabled>
              Select Blood Group
            </option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
        >
          Update Request
        </button>
      </form>
    </div>
  );
};

export default EditDonationRequest;
