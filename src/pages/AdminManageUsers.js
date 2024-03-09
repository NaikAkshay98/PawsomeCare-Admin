import React, { useState } from 'react';
import '../css/AdminManageUsers.css'; // Ensure you have the corresponding CSS file

const AdminManageUsers = () => {
  const [users, setUsers] = useState([
    { id: '558833', status: 'Active' },
  { id: '558834', status: 'Inactive' },
  { id: '558835', status: 'Active' },
  { id: '558836', status: 'Inactive' },
  // ... more users
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Mock search logic, in a real app you would perform an API call
    const filteredUsers = users.filter(user => 
      user.id.includes(searchTerm)
    );
    // For demonstration purposes, we'll just log the filtered users
    console.log(filteredUsers);
  };

  const handleModify = (userId) => {
    // In a real app, this would navigate to a user edit page
    console.log(`Modify user with ID: ${userId}`);
  };

  const handleActivate = (userId) => {
    // In a real app, you'd make an API call to activate the user
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, status: 'Active' } : user
    );
    setUsers(updatedUsers);
  };

  const handleDeactivate = (userId) => {
    // In a real app, you'd make an API call to deactivate the user
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, status: 'Inactive' } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="admin-manage-users">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search User"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {users.map((user) => (
        <div key={user.id} className="user-management">
          <span>User ID {user.id}</span>
          <button onClick={() => handleModify(user.id)}>Modify</button>
          <button onClick={() => handleActivate(user.id)} disabled={user.status === 'Active'}>
            Activate
          </button>
          <button onClick={() => handleDeactivate(user.id)} disabled={user.status === 'Inactive'}>
            Deactivate
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminManageUsers;
