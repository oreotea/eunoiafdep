
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage'; 
import UserInfoPage from './pages/UserInfoPage';
import TermsPage from './pages/TermsPage';
import ReasonPage from './pages/ReasonPage';

const App = () => (
  <Router>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/userinfo" element={<UserInfoPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/reason" element={<ReasonPage />} />
    </Routes>
  </Router>
);

export default App;
