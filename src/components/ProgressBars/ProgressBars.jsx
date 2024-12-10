import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProgressBars.css'; // Ensure to include the correct CSS file

// Linear Progress Bar
export const LinearProgressBar = ({ progress, color, height }) => {
  return (
    <div className="linear-progress-bar" style={{ height: height || '10px' }}>
      <div
        className="linear-progress"
        style={{
          width: `${progress}%`,
          backgroundColor: color || '#4caf50',
        }}
      />
      <div className="progress-text" style={{ left: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export const CircularProgressBar = ({ progress, size, strokeWidth, color }) => {
  const [dashoffset, setDashoffset] = useState(0);

  useEffect(() => {
    const radius = (size - strokeWidth) / 2; // Calculate the radius
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const offset = circumference - (progress / 100) * circumference; // Calculate the stroke dash offset
    setDashoffset(offset); // Set the dash offset to show progress
  }, [progress, size, strokeWidth]);

  const radius = (size - strokeWidth) / 2; // Calculate the radius again
  const circumference = 2 * Math.PI * radius; // Circumference of the circle

  return (
    <div className="circular-progress-bar">
      <svg
        width={size || '100px'}
        height={size || '100px'}
        viewBox={`0 0 ${size || 100} ${size || 100}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e6e6e6" // Grey background circle
          strokeWidth={strokeWidth || 10}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color || '#4caf50'} // Green color for progress
          strokeWidth={strokeWidth || 10}
          fill="none"
          strokeDasharray={circumference} // Set the dash array to the full circumference
          strokeDashoffset={dashoffset} // Set the dash offset to represent the progress
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate so the progress starts from the top
        />
      </svg>
      <div className="circular-progress-text">
        {progress}% {/* Show progress percentage */}
      </div>
    </div>
  );
};

export const AnimatedProgressBar = ({ color, size, animationDuration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
      }, animationDuration || 50); // Update every 50ms
      return () => clearInterval(timer); // Cleanup interval when progress reaches 100
    }
  }, [progress, animationDuration]);

  return (
    <div className="animated-progress-bar" style={{ width: size || '100%' }}>
      <div
        className="animated-progress"
        style={{
          width: `${progress}%`,
          backgroundColor: color || '#4caf50',
          transition: 'width 0.25s ease-in-out', // Smooth transition
        }}
      />
      <div className="progress-text">{progress}%</div>
    </div>
  );
};


// PropTypes validation for each progress bar component
LinearProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.string,
  height: PropTypes.string,
};

CircularProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
};

AnimatedProgressBar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  animationDuration: PropTypes.number,
};

// Exporting all progress bars in one object for easy import
const ProgressBars = {
  LinearProgressBar,
  CircularProgressBar,
  AnimatedProgressBar,
};

export default ProgressBars;


