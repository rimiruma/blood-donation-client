import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hook/UseAxiosPublic";
import Swal from "sweetalert2";

const imgbb_api_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const Register = () => {
  const { createUser, updatUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    bloodGroup: "",
    district: "",
    upazila: "",
    password: "",
    confirmPassword: "",
    avatar: null,
  });

  // Fetch districts & upazilas
  useEffect(() => {
    fetch("/districts.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data))
      .catch((err) => console.error("Failed to load districts:", err));

    fetch("/upazilas.json")
      .then((res) => res.json())
      .then((data) => setUpazilas(data))
      .catch((err) => console.error("Failed to load upazilas:", err));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "avatar") {
      setFormData({ ...formData, avatar: files[0] });
      return;
    }

    if (name === "district") {
      const selectedDistrict = districts.find((d) => d.name === value);

      const filtered = selectedDistrict
        ? upazilas.filter(
            (u) => u.district_id.toString() === selectedDistrict.id.toString()
          )
        : [];

      setFilteredUpazilas(filtered);

      setFormData({ ...formData, district: value, upazila: "" });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // Upload avatar to imgbb
  const uploadImageToImgbb = async (image) => {
    const data = new FormData();
    data.append("image", image);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`,
      { method: "POST", body: data }
    );
    const result = await res.json();

    if (!result.success) throw new Error("Image upload failed");
    return result.data.display_url;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name, district, upazila, bloodGroup, avatar } = formData;

    if (password !== confirmPassword) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }

    try {
      let avatarURL = "";
      if (avatar) avatarURL = await uploadImageToImgbb(avatar);

      await createUser(email, password);
      await updatUserProfile(name, avatarURL);

      const userInfo = { name, email, district, upazila, bloodGroup, avatar: avatarURL, role: "donor", status: "active" };
      const res = await axiosPublic.post("/register", userInfo);

      if (res.data.userId) {
        Swal.fire("Success", "Registration successful", "success");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-lg mx-auto py-20 bg-white dark:bg-gray-900 p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Please Register
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="avatar"
          accept="image/*"
          className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
          onChange={handleChange}
        />

        <select
          name="bloodGroup"
          className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
          onChange={handleChange}
          required
        >
          <option value="">Select Blood Group</option>
          {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        <select
          name="district"
          className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
          onChange={handleChange}
          required
        >
          <option value="">Select District</option>
          {districts.map((d) => <option key={d.id} value={d.name}>{d.name}</option>)}
        </select>

        <select
          name="upazila"
          className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
          onChange={handleChange}
          required
          disabled={!formData.district}
        >
          <option value="">Select Upazila</option>
          {filteredUpazilas.map((u) => <option key={u.id} value={u.name}>{u.name}</option>)}
        </select>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
          onChange={handleChange}
          required
        />

        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition">
          Register
        </button>

        <p className="text-center text-sm text-gray-700 dark:text-gray-300">
          Already have an account? <Link to="/login" className="text-blue-500 dark:text-blue-400">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
