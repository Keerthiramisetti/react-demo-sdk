import React from 'react';
import './RadioButton.css';

const RadioButton = ({ label, value, name, checked, onChange, disabled }) => {
  return (
    <div className={`radio-button-container ${disabled ? 'disabled' : ''}`}>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="radio-button-input"
      />
      <label htmlFor={value} className="radio-button-label">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
