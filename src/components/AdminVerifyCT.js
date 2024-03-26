import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'; 
import '../assets/Admin.css'; 

const VerifyCT = () => {
  const initialCertificates = [
    { id: '558833', date: '26th Jan 2024', status: 'Uploaded' },
    { id: '558834', date: '26th Jan 2024', status: 'Uploaded' },
  ];

  const [certificates, setCertificates] = useState(initialCertificates);
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory(); 

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredCertificates = initialCertificates.filter(certificate => certificate.id.includes(searchTerm));
    setCertificates(filteredCertificates);
  };

  const handlePreview = (certificateId) => {
    history.push(`/AdminCertificatePreview/${certificateId}`); 
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
          <input type="text" placeholder="Search CareTaker Name or ID" value={searchTerm} onChange={handleSearchChange} />
          <button onClick={handleSearch}>Search</button>
        </div>
        <ul className="certificates-list">
          {certificates.map((certificate) => (
            <li key={certificate.id} className="certificate">
              <span className="certificate-id">CT id {certificate.id}</span>
              <span className="certificate-date">
                {certificate.status === 'Uploaded' ? `Uploaded on ${certificate.date}` : `Verified on ${certificate.date}`}
              </span>
              {certificate.status === 'Uploaded' && (
                <button type="button" onClick={() => handlePreview(certificate.id)} className="admin-button">
                  Preview Certificate
                </button>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default VerifyCT;
