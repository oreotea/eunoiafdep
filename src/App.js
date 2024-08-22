import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserInfoPage from './pages/UserInfoPage';
import TermsPage from './pages/TermsPage';
import ReasonPage from './pages/ReasonPage';
import SessionPage from './pages/SessionPage';
import TherapyToolsPage from './pages/TherapyToolsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />  {/* Set the default route to LoginPage */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/userinfo" element={<UserInfoPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/reason" element={<ReasonPage />} />
      <Route path="/session/start" element={<SessionPage />} />
      <Route path="/therapy-tools" element={<TherapyToolsPage />} />
    </Routes>
  </Router>
);

export default App;
