// AdminEmailSupport.js
import React, { useState } from 'react';
import '../css/AdminEmailSupport.css'; // Ensure you have the corresponding CSS file

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
    // ... more cases
  ];

  const [cases, setCases] = useState(initialCases);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredCases = initialCases.filter((caseItem) => 
      caseItem.id.includes(searchTerm)
    );
    setCases(filteredCases);
  };

  return (
    <div className="admin-email-support-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Case ID"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul className="cases-list">
        {cases.map((caseItem) => (
          <li key={caseItem.id} className="case">
            <span className="case-id">Case ID {caseItem.id}</span>
            <span className="case-date">{caseItem.date}</span>
            <button 
              className={`status-button ${caseItem.status.toLowerCase()}`}
              onClick={() => {/* logic to handle status change */}}
            >
              {caseItem.status}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminEmailSupport;
