import React from 'react';
import { MOCK_ADMIN_STATS, INITIAL_ISSUES } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';

const AdminDashboard = () => {
    return (
        <div className="page-container dashboard-page">
            <div className="dashboard-header">
                <h2>Authority Dashboard</h2>
                <button className="btn btn-outline">Export Reports</button>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Issues</h3>
                    <div className="stat-value">{MOCK_ADMIN_STATS.totalIssues}</div>
                </div>
                <div className="stat-card">
                    <h3>Resolved</h3>
                    <div className="stat-value text-green">{MOCK_ADMIN_STATS.resolved}</div>
                </div>
                <div className="stat-card">
                    <h3>Pending</h3>
                    <div className="stat-value text-yellow">{MOCK_ADMIN_STATS.pending}</div>
                </div>
                <div className="stat-card">
                    <h3>Critical</h3>
                    <div className="stat-value text-red">{MOCK_ADMIN_STATS.critical}</div>
                </div>
            </div>

            <div className="dashboard-content">
                <h3>Recent Submissions</h3>
                <div className="table-responsive">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Type</th>
                                <th>Location</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {INITIAL_ISSUES.map(issue => (
                                <tr key={issue.id}>
                                    <td>{issue.id}</td>
                                    <td>{issue.type}</td>
                                    <td>{issue.location}</td>
                                    <td>
                                        <span className={`priority-indicator priority-${issue.priority.toLowerCase()}`}>
                                            {issue.priority}
                                        </span>
                                    </td>
                                    <td><StatusBadge status={issue.status} /></td>
                                    <td>
                                        <button className="btn-sm btn-link">Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
