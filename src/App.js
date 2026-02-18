import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubmitIssue from './pages/SubmitIssue';
import TrackIssues from './pages/TrackIssues';
import IssueDetails from './pages/IssueDetails';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<SubmitIssue />} />
            <Route path="/track" element={<TrackIssues />} />
            <Route path="/issue/:id" element={<IssueDetails />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <footer className="footer" style={{ textAlign: 'center', padding: '20px', color: '#64748b', fontSize: '0.9rem' }}>
            <p>&copy; 2026 LIRTS - Local Issue Reporting & Resolution Tracking System</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
