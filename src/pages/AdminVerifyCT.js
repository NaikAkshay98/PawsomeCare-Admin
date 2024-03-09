import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
//import { useParams } from 'react-router-dom';
import '../css/AdminVerifyCT.css'; // Ensure you have the corresponding CSS file

const VerifyCT = () => {
  

  // Example data - in a real app, data would come from a database or API
  const initialCertificates = [
    { id: '558833', date: '26th Jan 2024', status: 'Uploaded' },
    { id: '558834', date: '26th Jan 2024', status: 'Uploaded' },
    // ... other certificates
  ];

  const [certificates, setCertificates] = useState(initialCertificates);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredCertificates = initialCertificates.filter((certificate) => 
      certificate.id.includes(searchTerm) // Assuming searching by ID
    );
    setCertificates(filteredCertificates);
  };

  const handlePreview = (certificateId) => {
    console.log(`Navigating to certificate with ID: ${certificateId}`);
    navigate(`admincertificatepreview/${certificateId}`);
  };
  

  return (
    <div className="verify-ct-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search CareTaker Name or ID"
          value={searchTerm}
          onChange={handleSearchChange}
        />
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
              <button
              type="button"
              onClick={() => handlePreview(certificate.id)}
              className="status-button preview"
            >
              Preview Certificate
            </button>
            )}
            {/* Include other buttons and logic for 'Declined' or 'Verified' statuses if necessary */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerifyCT;
