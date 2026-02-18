import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MediaUploader from '../components/MediaUploader';
import Notification from '../components/Notification';
import { ISSUE_TYPES } from '../data/mockData';

const SubmitIssue = () => {
    const navigate = useNavigate();
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState(''); // Use Geolocation API ideally, simplified to text here
    const [media, setMedia] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [aiResult, setAiResult] = useState(null);
    const [notification, setNotification] = useState(null); // { message, type }

    const handleMediaChange = (mediaData) => {
        setMedia(mediaData);
        setAiResult(null); // Reset analysis if media changes
        if (mediaData) {
            simulateAIAnalysis();
        }
    };

    const simulateAIAnalysis = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setIsAnalyzing(false);
            setAiResult({
                type: ISSUE_TYPES[Math.floor(Math.random() * (ISSUE_TYPES.length - 1))], // Random type except Other
                severity: ['Low', 'Medium', 'High', 'Critical'][Math.floor(Math.random() * 4)],
                confidence: (0.7 + Math.random() * 0.29).toFixed(2)
            });
        }, 1500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!description || !location) {
            setNotification({ message: "Please fill in all details.", type: 'error' });
            return;
        }

        // Simulate submission
        const newIssue = {
            id: `ISS-${Math.floor(1000 + Math.random() * 9000)}`,
            description,
            location,
            media: media ? media.preview : null,
            aiAnalysis: aiResult,
            status: 'Submitted',
            timestamp: new Date().toISOString()
        };

        // In a real app, post to backend. 
        // Here we just notify and redirect.
        console.log("Submitted Issue:", newIssue);
        
        setNotification({ message: "Issue submitted successfully!", type: 'success' });
        
        setTimeout(() => {
            navigate('/track');
        }, 2000);
    };

    return (
        <div className="page-container">
            <h2>Report a Local Issue</h2>
            {notification && <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
            
            <form onSubmit={handleSubmit} className="issue-form">
                <div className="form-group">
                    <label>Upload Media (Optional)</label>
                    <MediaUploader onMediaChange={handleMediaChange} />
                </div>

                {isAnalyzing && <div className="ai-loading">AI is analyzing your upload...</div>}
                
                {aiResult && (
                    <div className="ai-result-card">
                        <h4>AI Analysis Result</h4>
                        <div className="ai-tags">
                            <span className="ai-tag">Detected: <strong>{aiResult.type}</strong></span>
                            <span className="ai-tag">Severity: <strong className={`severity-${aiResult.severity.toLowerCase()}`}>{aiResult.severity}</strong></span>
                        </div>
                    </div>
                )}

                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Describe the issue..." 
                        rows={4}
                    />
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input 
                        type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        placeholder="Enter address or landmark"
                    />
                    <button type="button" className="btn-small" onClick={() => setLocation("123 Mock Location, City Center")}>
                        📍 Use My Location
                    </button>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit Report</button>
            </form>
        </div>
    );
};

export default SubmitIssue;
