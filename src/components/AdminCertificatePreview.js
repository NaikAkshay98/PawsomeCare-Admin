import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import '../assets/Admin.css'; 

const AdminCertificatePreview = () => {
  const { certificateId } = useParams();
  const history = useHistory();

  const fetchCertificateData = (id) => {
    return {
      id: certificateId,
      dogName: 'Buddy',
      trainerName: 'Jane Doe',
      courseProvider: 'SuperDog Training',
      date: '26th Jan 2024'
    };
  };

  const certificateData = fetchCertificateData(certificateId);

  const handleAccept = () => {
    history.push('/AdminVerifyCt');
  };

  const handleDecline = () => {
    history.push('/AdminVerifyCt');
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
        <div className='certificate-text'>
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
      </main>
    </div>
  );
};

export default AdminCertificatePreview;
