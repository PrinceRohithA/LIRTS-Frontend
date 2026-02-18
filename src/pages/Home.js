import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, Camera, Activity } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Local Issue Reporting & Resolution</h1>
        <p>Empowering citizens to improve their community one report at a time.</p>
        <div className="hero-buttons">
          <Link to="/submit" className="btn btn-primary">Report an Issue</Link>
          <Link to="/track" className="btn btn-secondary">Track Reports</Link>
        </div>
      </header>
      
      <section className="features-section">
        <div className="feature-card">
            <Camera size={40} className="feature-icon" />
            <h3>Capture</h3>
            <p>Take a photo or short video of the issue you see.</p>
        </div>
        <div className="feature-card">
            <ClipboardList size={40} className="feature-icon" />
            <h3>Report</h3>
            <p>Describe the location and details. We analyze it instantly.</p>
        </div>
        <div className="feature-card">
            <Activity size={40} className="feature-icon" />
            <h3>Track</h3>
            <p>Follow the progress from submission to resolution.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
