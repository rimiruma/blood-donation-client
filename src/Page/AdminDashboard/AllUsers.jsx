import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../../components/Modal';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Fetch users
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`https://assinment12server.vercel.app/users`, {
        params: {
          status: filter === 'all' ? '' : filter,
          page,
          limit: 10
        }
      });
      setUsers(data.users);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filter, page]);

  // Handle status update
  const handleStatusUpdate = async (newStatus) => {
    try {
      await axios.patch(`https://assinment12server.vercel.app/users/${selectedUser._id}/status`, {
        status: newStatus
      });
      setShowStatusModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Handle role update
  const handleRoleUpdate = async (newRole) => {
    try {
      await axios.patch(`https://assinment12server.vercel.app/users/${selectedUser._id}/role`, {
        role: newRole
      });
      setShowRoleModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">

        {/* Filter */}
        <div className="mb-4 flex justify-end">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-700 
            text-gray-800 dark:text-gray-200
            px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="all">All Users</option>
            <option value="active">Active Users</option>
            <option value="blocked">Blocked Users</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-blue-600 dark:bg-blue-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Avatar</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b dark:border-gray-700 
                  hover:bg-blue-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="px-4 py-3">
                    <img
                      src={user.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full border dark:border-gray-600"
                    />
                  </td>

                  <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200">
                    {user.name}
                  </td>

                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                    {user.email}
                  </td>

                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full text-sm 
                    bg-purple-100 dark:bg-purple-900 
                    text-purple-700 dark:text-purple-300">
                      {user.role}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center relative">
                    <button
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === user._id ? null : user._id)
                      }
                      className="px-2 py-1 rounded 
                      hover:bg-gray-200 dark:hover:bg-gray-600 
                      text-gray-700 dark:text-gray-200"
                    >
                      •••
                    </button>

                    {dropdownOpen === user._id && (
                      <div className="absolute right-0 mt-2 w-48 
                      bg-white dark:bg-gray-700 
                      border dark:border-gray-600 
                      rounded-lg shadow-lg z-10">
                        <button
                          onClick={() => {
                            setSelectedUser(user);
                            setShowStatusModal(true);
                            setDropdownOpen(null);
                          }}
                          className="block w-full text-left px-4 py-2 
                          hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          Edit Status
                        </button>
                        <button
                          onClick={() => {
                            setSelectedUser(user);
                            setShowRoleModal(true);
                            setDropdownOpen(null);
                          }}
                          className="block w-full text-left px-4 py-2 
                          hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          Edit Role
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 
            text-white rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="font-medium text-gray-600 dark:text-gray-300">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 
            text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Status Modal */}
      {showStatusModal && (
        <Modal onClose={() => setShowStatusModal(false)}>
          <h3 className="text-lg font-bold mb-4">Update User Status</h3>
          <select
            className="w-full p-2 border rounded mb-4"
            defaultValue={selectedUser?.status}
            onChange={(e) => handleStatusUpdate(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="blocked">Blocked</option>
          </select>
        </Modal>
      )}

      {/* Role Modal */}
      {showRoleModal && (
        <Modal onClose={() => setShowRoleModal(false)}>
          <h3 className="text-lg font-bold mb-4">Update User Role</h3>
          <select
            className="w-full p-2 border rounded mb-4"
            defaultValue={selectedUser?.role}
            onChange={(e) => handleRoleUpdate(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="volunteer">Volunteer</option>
            <option value="donor">Donor</option>
          </select>
        </Modal>
      )}
    </div>
  );
};

export default AllUsers;
