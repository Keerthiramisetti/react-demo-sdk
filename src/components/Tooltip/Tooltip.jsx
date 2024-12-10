import React, { useState, useRef, useEffect } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, position = 'top', delay = 500, trigger = 'hover', children }) => {
  const [visible, setVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(position);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  // Show the tooltip on hover
  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, delay);
    }
  };

  // Hide the tooltip on mouse leave
  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (trigger === 'hover') {
      setVisible(false);
    }
  };

  // Toggle visibility when clicking (if trigger is 'click')
  const handleClick = () => {
    if (trigger === 'click') {
      setVisible((prevVisible) => !prevVisible);
    }
  };

  // Calculate the tooltip position dynamically
  const calculatePosition = (tooltip) => {
    if (!tooltip) return;

    const rect = tooltip.getBoundingClientRect();
    const offset = 10; // Adjust offset for positioning

    if (tooltipPosition === 'top') {
      tooltip.style.top = `${-rect.height - offset}px`;
      tooltip.style.left = `50%`;
      tooltip.style.transform = 'translateX(-50%)';
    } else if (tooltipPosition === 'right') {
      tooltip.style.top = `50%`;
      tooltip.style.left = `${rect.width + offset}px`;
      tooltip.style.transform = 'translateY(-50%)';
    } else if (tooltipPosition === 'bottom') {
      tooltip.style.top = `${rect.height + offset}px`;
      tooltip.style.left = `50%`;
      tooltip.style.transform = 'translateX(-50%)';
    } else if (tooltipPosition === 'left') {
      tooltip.style.top = `50%`;
      tooltip.style.left = `${-rect.width - offset}px`;
      tooltip.style.transform = 'translateY(-50%)';
    }
  };

  useEffect(() => {
    if (tooltipRef.current) {
      calculatePosition(tooltipRef.current);
    }
  }, [tooltipPosition]);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // Handle click event for 'click' trigger
    >
      {children}
      {visible && (
        <div ref={tooltipRef} className={`tooltip tooltip-${tooltipPosition}`}>
          {text}
        </div>
      )}
    </div>
  );
};
export default Tooltip;
