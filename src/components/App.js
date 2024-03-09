import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import AdminHomePage from '../pages/AdminHomePage';
import SignInPage from '../pages/SignInPage'; // Ensure the path is correct based on your project structure
import AdminProfile from '../pages/AdminProfile';
import AdminEmailSupport from '../pages/AdminEmailSupport';
import AdminVerifyCT from '../pages/AdminVerifyCT';
import AdminCertificatePreview from '../pages/AdminCertificatePreview';
import AdminReviews from '../pages/AdminReviews';
import AdminOpenReviews from '../pages/AdminOpenReviews';
import AdminManageUsers from '../pages/AdminManageUsers';
import AdminEventsDetails from '../pages/AdminEventsDetails';
import '../css/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <Router>
      <div className="App">
        
        <div className="content">
          <Routes>
            <Route path="/adminlogin" element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/admin" element={<AdminHomePage />}>
              {/*<Route index element={<h2>Welcome to the Admin Dashboard</h2>} />*/}
              <Route path="adminprofile" element={<AdminProfile />} />
              <Route path="adminemailsupport" element={<AdminEmailSupport />} />
              <Route path="adminverifyCT" element={<AdminVerifyCT />} />
                <Route path="adminverifyCT/admincertificatepreview/:certificateId" element={<AdminCertificatePreview />} />
              <Route path="adminreviews" element={<AdminReviews />} />
                <Route path="adminreviews/adminopenreviews/:caretakerId" element={<AdminOpenReviews />} />
              <Route path="adminmanageusers" element={<AdminManageUsers />} />
              <Route path="admineventsdetails" element={<AdminEventsDetails />} />
            </Route>
            
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
