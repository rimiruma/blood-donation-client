import React, { useState } from "react";

const ProfileForm = ({ user, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow p-4 rounded">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Profile</h2>
        <button
          className="btn btn-primary"
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleChange}
            disabled={!isEditing}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData?.email}
            disabled
            className="input input-bordered w-full bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-700"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">District</label>
          <input
            type="text"
            name="district"
            value={formData?.district}
            onChange={handleChange}
            disabled={!isEditing}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">Upazila</label>
          <input
            type="text"
            name="upazila"
            value={formData?.upazila}
            onChange={handleChange}
            disabled={!isEditing}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">Blood Group</label>
          <input
            type="text"
            name="bloodGroup"
            value={formData?.bloodGroup}
            onChange={handleChange}
            disabled={!isEditing}
            className="input input-bordered w-full dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
