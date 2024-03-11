import React, { useState } from 'react';
import '../css/CTAppointmentRequests.css'; // Ensure you have a CSS file for styling

const mockRequests = [
  { id: 1, name: 'Request A', status: 'Pending', statusDate: 'Expires in 60 mins' },
  { id: 2, name: 'Request B', status: 'Declined', statusDate: 'Declined on 23th Jan 2024' },
  { id: 3, name: 'Request C', status: 'Accepted', statusDate: 'Accepted on 30th Jan 2024' },
  // ... other requests
];

const statusFilters = ['All', 'Accepted', 'Declined', 'Pending'];

const AppointmentRequests = () => {
    const [filter, setFilter] = useState('All');
  
  const filteredRequests = filter === 'All' ? mockRequests : mockRequests.filter(request => request.status === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };



  const handlePreviewRequest = (requestId) => {
    // Logic to preview request
    console.log('Previewing request:', requestId);
  };

  return (
    <div>
      <div className="filters">
        {statusFilters.map(status => (
          <button
            key={status}
            onClick={() => handleFilterChange(status)}
            className={`filter-button ${filter === status ? 'active' : ''}`}
          >
            {status}
          </button>
        ))}
      </div>
  
      <div className="appointment-requests-container">
        {filteredRequests.map(request => ( // Here you should use 'filteredRequests' instead of 'mockRequests'
          <div key={request.id} className="request-card">
            <span className="request-name">{request.name}</span>
            <span className={`request-status ${request.status.toLowerCase()}`}>{request.status}</span>
            <span className="request-date">{request.statusDate}</span>
            <button onClick={() => handlePreviewRequest(request.id)} className="preview-request-button">
              Preview Request
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default AppointmentRequests;
