import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Admin.css'; 

const AdminEmailSupport = () => {
  const initialCases = [
    { id: '558834', date: '27th Jan 2024', status: 'Closed' },
    { id: '558835', date: '28th Jan 2024', status: 'Closed' },
    { id: '558836', date: '29th Jan 2024', status: 'Open' },
    { id: '558837', date: '30th Jan 2024', status: 'Closed' },
    { id: '558838', date: '31th Jan 2024', status: 'Solved' },
    { id: '558839', date: '01th Feb 2024', status: 'Closed' },
    { id: '558840', date: '02th Feb 2024', status: 'Closed' },
    { id: '558841', date: '03th Feb 2024', status: 'Closed' },
    { id: '558842', date: '04th Feb 2024', status: 'Closed' },
    { id: '558843', date: '05th Feb 2024', status: 'Closed' },
  ];

  const [cases, setCases] = useState(initialCases);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredCases = initialCases.filter(caseItem => caseItem.id.includes(searchTerm) || caseItem.status.toLowerCase().includes(searchTerm.toLowerCase()));
    setCases(filteredCases);
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <nav>
          <ul className="admin-menu">
            <li><Link to="/AdminHomePage">Home Page</Link></li>
            <li><Link to="/AdminVerifyCT">Verify Caretaker</Link></li>
            <li><Link to="/AdminReviews">Reviews</Link></li>
            <li><Link to="/AdminManageUsers">Manage Users</Link></li>
            <li><Link to="/AdminEventDetails">Event Details</Link></li>
            <li><Link to="/AdminEmailSupport">Email Support</Link></li>
            <li><Link to="/AdminProfile">LogOut</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="admin-main-content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Case ID or Status"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="admin-button" onClick={handleSearch}>Search</button>
        </div>
        <ul className="cases-list">
          {cases.map((caseItem) => (
            <li key={caseItem.id} className="case">
              <span>Case ID: {caseItem.id}</span>
              <span>Date: {caseItem.date}</span>
              <button className={`status-button ${caseItem.status.toLowerCase()}`}>
                {caseItem.status}
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default AdminEmailSupport;
