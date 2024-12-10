import React, { useState } from 'react';
import './Buttons.css'; 
import Icon from '../Icon/index.js'; 

const Buttons = ({
  type = 'button',
  size = 'medium',
  variant = 'primary',
  onClick,
  disabled = false,
  loading = false,
  icon: iconName,  // The icon prop now accepts a string representing the icon name
  iconPosition = 'left',
  label,  // Use label for button text
  iconSize = 20,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(loading);

  // Handle the button click and simulate loading
  const handleClick = async (e) => {
    if (isLoading || disabled) return;
    setIsLoading(true);
    await onClick(e);
    setTimeout(() => setIsLoading(false), 2000); // Simulate a loading state
  };

  // Button class string to apply appropriate styles
  const buttonClass = `btn ${size} ${variant} ${isLoading ? 'loading' : ''} ${disabled ? 'disabled' : ''} ${iconName ? 'icon-button' : ''}`;

  // Only allow loading functionality if it's a submit button
  const isSubmitButton = type === 'submit';

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled || (isSubmitButton && isLoading)}
      {...props}
    >
      <div className="button-content">
        {isLoading && isSubmitButton && (
          // Show the spinner beside the text only for "submit" button
          <span className="spinners"></span>
        )}

        {/* Render the icon to the left if specified */}
        {iconName && iconPosition === 'left' && <Icon name={iconName} size={iconSize} className="icon-left" />}
        
        {/* Render the label text (always visible) */}
        {label && <span>{label}</span>}
        
        {/* Render the icon to the right if specified */}
        {iconName && iconPosition === 'right' && <Icon name={iconName} size={iconSize} className="icon-right" />}
      </div>
    </button>
  );
};

export default Buttons;


