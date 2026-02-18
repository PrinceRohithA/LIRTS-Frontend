import React from 'react';
import { useParams, Link } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import { INITIAL_ISSUES } from '../data/mockData';

const IssueDetails = () => {
    const { id } = useParams();
    // In a real app, fetch from API. Here find in mock data.
    const issue = INITIAL_ISSUES.find(i => i.id === id);

    if (!issue) {
        return <div className="page-container error-page">Issue not found. <Link to="/track">Go back</Link></div>;
    }

    return (
        <div className="page-container">
            <Link to="/track" className="back-link">&larr; Back to Tracking</Link>
            
            <div className="details-header">
                <h2>Issue Details <span className="text-muted">#{issue.id}</span></h2>
                <StatusBadge status={issue.status} />
            </div>

            <div className="details-grid">
                <div className="details-main">
                    <div className="detail-section">
                        <h4>Description</h4>
                        <p>{issue.description}</p>
                    </div>
                    <div className="detail-section">
                        <h4>Location</h4>
                        <p>{issue.location}</p>
                    </div>
                     <div className="detail-section">
                        <h4>AI Analysis</h4>
                        <div className="ai-box">
                            <p><strong>Category:</strong> {issue.aiAnalysis.category}</p>
                            <p><strong>Confidence:</strong> {(issue.aiAnalysis.confidence * 100).toFixed(0)}%</p>
                        </div>
                    </div>
                </div>

                <div className="details-sidebar">
                    <div className="timeline">
                        <h4>History</h4>
                        <ul className="timeline-list">
                            <li className="timeline-item">
                                <span className="dot dot-active"></span>
                                <div className="timeline-content">
                                    <p className="timeline-status">Submitted</p>
                                    <span className="timeline-date">{new Date(issue.timestamp).toLocaleString()}</span>
                                </div>
                            </li>
                            {/* Mocking progress based on current status */}
                            {(issue.status === 'In Progress' || issue.status === 'Resolved') && (
                                <li className="timeline-item">
                                    <span className="dot dot-active"></span>
                                    <div className="timeline-content">
                                        <p className="timeline-status">In Progress</p>
                                        <span className="timeline-date">Oct 26, 2023, 10:00 AM</span>
                                    </div>
                                </li>
                            )}
                             {issue.status === 'Resolved' && (
                                <li className="timeline-item">
                                    <span className="dot dot-completed"></span>
                                    <div className="timeline-content">
                                        <p className="timeline-status">Resolved</p>
                                        <span className="timeline-date">Oct 27, 2023, 2:30 PM</span>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueDetails;
