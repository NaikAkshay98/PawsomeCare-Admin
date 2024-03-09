// CertificatePreview.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/AdminCertificatePreview.css'; // Create this CSS file for styling

const CertificatePreview = () => {
  const { certificateId } = useParams();
  const navigate = useNavigate();

  // Mock function to simulate fetching certificate data
  const fetchCertificateData = (id) => {
    // In a real app, you would fetch the data from a backend using the id
    // For this example, we're just creating a mock object
    return {
      id: certificateId,
      dogName: 'Buddy',
      trainerName: 'Jane Doe',
      courseProvider: 'SuperDog Training',
      date: '26th Jan 2024'
    };
  };

  // Fetch the certificate data using the ID
  const certificateData = fetchCertificateData(certificateId);

  const handleAccept = () => {
    // Logic for accepting the certificate
    //updateCertificateStatus(certificateId, 'Verified');
    navigate('/admin/adminverifyCT');
  };

  const handleDecline = () => {
    // Logic for declining the certificate
    //updateCertificateStatus(certificateId, 'Declined');
    navigate('/admin/adminverifyCT');
  };

  return (
    <div className="certificate-preview">
      <h2>Certificate of Completion</h2>
      <p>This Dog Training Course Recognition is awarded to</p>
      <p><strong>{certificateData.dogName}</strong></p>
      <p>for outstanding performance & achievement in obedience training</p>
      <p>Presented by</p>
      <p><strong>{certificateData.trainerName}</strong></p>
      <p>Course Provider: {certificateData.courseProvider}</p>
      <p>Certificate Date: {certificateData.date}</p>
      <div className="certificate-actions">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default CertificatePreview;
