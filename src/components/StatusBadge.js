import React from 'react';
import { STATUS_COLORS } from '../data/mockData';

const StatusBadge = ({ status }) => {
  const colorClass = STATUS_COLORS[status] || "bg-gray-100 text-gray-800";
  // Since we are using standard CSS, we'll map these tailwind-like strings to actual CSS classes in App.css
  // Or simpler: just use a style object or specific class names. 
  // Let's use specific class names based on status.
  
  const getStatusClass = (status) => {
    switch(status) {
        case 'Resolved': return 'status-resolved';
        case 'In Progress': return 'status-inprogress';
        case 'Under Review': return 'status-review';
        case 'Assigned': return 'status-assigned';
        default: return 'status-submitted';
    }
  };

  return (
    <span className={`status-badge ${getStatusClass(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
