import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Upload from '../components/Upload'; // Ensure this path is correct
import LandingPage from '../components/LandingPage'; // Ensure this path is correct
import Signup from '../components/Signup'; // Ensure this path is correct
import Login from '../components/Login'; // Ensure this path is correct



function App() {
  return (
    <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Upload />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
