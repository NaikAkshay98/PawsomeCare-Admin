import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage'; 
import AboutUs from '../pages/AboutUs';
import AdminHomePage from '../pages/AdminHomePage';
import SignInPage from '../pages/SignInPage';
import ForgotPassword from '../pages/ForgotPassword';
import Registration from '../pages/Registration';

import CTHomePage from '../pages/CTHomePage';
import CTAppointmentRequests from '../pages/CTAppointmentRequests';
import CTSchedule from '../pages/CTSchedule';
import CTProfile from '../pages/CTProfile';

import AdminProfile from '../pages/AdminProfile';
import AdminEmailSupport from '../pages/AdminEmailSupport';
import AdminVerifyCT from '../pages/AdminVerifyCT';
import AdminCertificatePreview from '../pages/AdminCertificatePreview';
import AdminReviews from '../pages/AdminReviews';
import AdminOpenReviews from '../pages/AdminOpenReviews';
import AdminManageUsers from '../pages/AdminManageUsers';
import AdminEventsDetails from '../pages/AdminEventsDetails';

import UserHomePage from '../pages/UserHomePage';
import UserEventsPage from '../pages/UserEventsPage';
import UserEventsDetails from '../pages/UserEventsDetails';
import Support from '../pages/Support';
import UserViewAppointments from '../pages/UserViewAppointments';
import UserViewCareTaker from '../pages/UserViewCareTaker';
import UserCareTakerDetails from '../pages/UserCareTakerDetails';
import UserBookAppointment from '../pages/UserBookAppointment';
import UserProfilePage from '../pages/UserProfilePage';
import '../css/App.css';

function App() {
  const [setIsLoggedIn] = useState(false);


  return (
    <Router>
      <div className="App">
        
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutuspage" element={<AboutUs />} />
            <Route path="/login" element={<SignInPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/registration" element={<Registration />} />

            <Route path="/caretaker" element={<CTHomePage />}>
              <Route path="appointment-request" element={<CTAppointmentRequests />} />
              <Route path="support" element={<Support />} />
              <Route path="schedule" element={<CTSchedule />} />
              <Route path="profile" element={<CTProfile />} />
            </Route>

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
            <Route path="/user" element={<UserHomePage />}>
              <Route path="events" element={<UserEventsPage />} />
                <Route path="events/eventdetails/:id" element={<UserEventsDetails />} />
              <Route path="support" element={<Support />} />
              <Route path="view-appointments" element={<UserViewAppointments />} />
              <Route path="view-caretakers" element={<UserViewCareTaker />} />
                <Route path="view-caretakers/view-caretakers-details/:caretakerId" element={<UserCareTakerDetails />} />
                  <Route path="view-caretakers/view-caretakers-details/:caretakerId/book-appointment" element={<UserBookAppointment />} />
              <Route path="profile" element={<UserProfilePage />} />
            </Route>
            
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
