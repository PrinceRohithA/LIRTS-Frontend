import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import { INITIAL_ISSUES } from '../data/mockData';

const TrackIssues = () => {
    const [issues] = useState(INITIAL_ISSUES);

    return (
        <div className="page-container">
            <h2>Track Your Complaints</h2>
            <div className="issues-list">
                {issues.map(issue => (
                    <div key={issue.id} className="issue-card">
                        <div className="issue-header">
                            <span className="issue-id">#{issue.id}</span>
                            <StatusBadge status={issue.status} />
                        </div>
                        <h3 className="issue-title">{issue.type}</h3>
                        <p className="issue-desc">{issue.description}</p>
                        <div className="issue-meta">
                            <span>📍 {issue.location}</span>
                            <span>📅 {new Date(issue.timestamp).toLocaleDateString()}</span>
                        </div>
                        <Link to={`/issue/${issue.id}`} className="view-details-link">View Details &rarr;</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrackIssues;
