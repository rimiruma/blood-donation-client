import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const CreateDonation = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(false);

    const navigate = useNavigate();
    const [districts, setDistricts] = useState([]);
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);
    const [upazilas, setUpazilas] = useState([]);

    const [formData, setFormData] = useState({
        recipientName: '',
        recipientDistrict: '',
        recipientUpazila: '',
        hospitalName: '',
        fullAddress: '',
        bloodGroup: '',
        donationDate: '',
        donationTime: '',
        requestMessage: ''
    });

    // Fetch upazilas
    useEffect(() => {
        fetch("/upazilas.json")
            .then((res) => res.json())
            .then((data) => setUpazilas(data))
            .catch((err) => console.error("Error fetching upazilas:", err));
    }, []);

    // Fetch districts
    useEffect(() => {
        fetch("/districts.json")
            .then((res) => res.json())
            .then((data) => {
                setDistricts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching districts:", err);
                setError("Failed to load districts.");
                setLoading(false);
            });
    }, []);

    // Blocked users
    useEffect(() => {
        if (user?.status === 'blocked') {
            alert('Blocked users cannot create donation requests.');
            navigate('/');
        }
    }, [user, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "recipientDistrict") {
            const selectedDistrict = districts.find((d) => d.name === value);
            if (selectedDistrict) {
                const filtered = upazilas.filter(
                    (u) => u.district_id.toString() === selectedDistrict.id.toString()
                );
                setFilteredUpazilas(filtered);
            } else {
                setFilteredUpazilas([]);
            }
            setFormData({ ...formData, recipientDistrict: value, recipientUpazila: "" });
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/${user?.email}`);
                setUserInfo(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserData();
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            alert('Please log in to create a donation request.');
            return;
        }

        const requestData = {
            requesterName: user?.displayName,
            requesterEmail: user.email,
            ...formData,
            donationStatus: 'pending',
        };

        try {
            const response = await axios.post('http://localhost:3000/donation-requests', requestData);
            if (response.status === 201) {
                Swal.fire({
                    title: "Donation request created successfully!",
                    icon: "success",
                    draggable: true
                });
                navigate('/dashboard/dashboard-Home');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to create donation request. Please try again later.');
        }
    };

    if (loading) return <div className="text-center py-10 dark:text-gray-300">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 dark:text-gray-100 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Create Donation Request</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Requester Info */}
                <div>
                    <label className="block font-medium">Requester Name</label>
                    <input type="text" value={userInfo?.name || ''} readOnly className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100" />
                </div>
                <div>
                    <label className="block font-medium">Requester Email</label>
                    <input type="email" value={userInfo?.email || ''} readOnly className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100" />
                </div>

                {/* Recipient Info */}
                <div>
                    <label className="block font-medium">Recipient Name</label>
                    <input type="text" name="recipientName" value={formData.recipientName} onChange={handleChange} className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100" required />
                </div>
                <div>
                    <label className="block font-medium">Recipient District</label>
                    <select
                        name="recipientDistrict"
                        value={formData.recipientDistrict}
                        onChange={handleChange}
                        className="select select-bordered w-full dark:bg-gray-800 dark:text-gray-100"
                        required
                    >
                        <option value="" disabled>Select District</option>
                        {districts.map((district) => (
                            <option key={district.id} value={district.name}>{district.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Recipient Upazila</label>
                    <select
                        name="recipientUpazila"
                        value={formData.recipientUpazila}
                        onChange={handleChange}
                        className="select select-bordered w-full dark:bg-gray-800 dark:text-gray-100"
                        required
                    >
                        <option value="">Select Upazila</option>
                        {filteredUpazilas.length > 0 ? filteredUpazilas.map((upazila) => (
                            <option key={upazila.id} value={upazila.name}>{upazila.name}</option>
                        )) : <option value="" disabled>No Upazilas Found</option>}
                    </select>
                </div>

                {/* Hospital & Address */}
                <div>
                    <label className="block font-medium">Hospital Name</label>
                    <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100" required />
                </div>
                <div>
                    <label className="block font-medium">Full Address</label>
                    <input type="text" name="fullAddress" value={formData.fullAddress} onChange={handleChange} className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100" required />
                </div>

                {/* Blood Group */}
                <div>
                    <label className="block font-medium">Blood Group</label>
                    <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="select select-bordered w-full dark:bg-gray-800 dark:text-gray-100" required>
                        <option value="">Select Blood Group</option>
                        {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map((g) => (
                            <option key={g} value={g}>{g}</option>
                        ))}
                    </select>
                </div>

                {/* Date & Time */}
                <div>
                    <label className="block font-medium">Donation Date</label>
                    <input type="date" name="donationDate" value={formData.donationDate} onChange={handleChange} className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100" required />
                </div>
                <div>
                    <label className="block font-medium">Donation Time</label>
                    <input type="time" name="donationTime" value={formData.donationTime} onChange={handleChange} className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100" required />
                </div>

                {/* Request Message */}
                <div>
                    <label className="block font-medium">Request Message</label>
                    <textarea name="requestMessage" value={formData.requestMessage} onChange={handleChange} className="textarea textarea-bordered w-full dark:bg-gray-800 dark:text-gray-100" required />
                </div>

                <button type="submit" className="bg-red-700 hover:bg-red-800 text-white p-3 w-full rounded">Submit Request</button>
            </form>
        </div>
    );
};

export default CreateDonation;
