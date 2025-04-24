import React from 'react';
import './LoadingSpinner.css'; // Ensure this file is linked

const LoadingSpinner = ({ color = '#3498db' }) => { // Default color: blue
  return (
    <div className="loading-spinner">
      <div className="spinner" style={{ borderTopColor: color }}></div>
    </div>
  );
};

export default LoadingSpinner;
