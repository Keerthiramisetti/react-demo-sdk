import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ checked, onChange, disabled }) => {
  return (
    <label className={`toggle-switch ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="toggle-slider"></span>
    </label>
  );
};

export default ToggleSwitch;
