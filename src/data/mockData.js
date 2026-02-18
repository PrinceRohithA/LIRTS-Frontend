export const ISSUE_TYPES = [
  "Pothole",
  "Street Light",
  "Garbage",
  "Water Leak",
  "Graffiti",
  "Noise Complaint",
  "Other"
];

export const STATUS_COLORS = {
  "Submitted": "bg-gray-100 text-gray-800",
  "Under Review": "bg-yellow-100 text-yellow-800",
  "Assigned": "bg-blue-100 text-blue-800",
  "In Progress": "bg-purple-100 text-purple-800",
  "Resolved": "bg-green-100 text-green-800"
};

export const INITIAL_ISSUES = [
  {
    id: "ISS-1001",
    type: "Pothole",
    description: "Large pothole on Main St near the post office.",
    location: "123 Main St",
    status: "Submitted",
    timestamp: "2023-10-25T10:30:00Z",
    priority: "Medium",
    aiAnalysis: {
      category: "Road Maintenance",
      confidence: 0.95
    }
  },
  {
    id: "ISS-1002",
    type: "Street Light",
    description: "Street light flickering constantly.",
    location: "45 Elm Ave",
    status: "In Progress",
    timestamp: "2023-10-24T18:15:00Z",
    priority: "Low",
    aiAnalysis: {
      category: "Electrical",
      confidence: 0.88
    }
  },
  {
    id: "ISS-1003",
    type: "Water Leak",
    description: "Water gushing from hydrant.",
    location: "789 Oak Ln",
    status: "Resolved",
    timestamp: "2023-10-20T09:00:00Z",
    priority: "Critical",
    aiAnalysis: {
      category: "Water Supply",
      confidence: 0.99
    }
  }
];

export const MOCK_ADMIN_STATS = {
    totalIssues: 125,
    resolved: 89,
    pending: 36,
    critical: 5
};
