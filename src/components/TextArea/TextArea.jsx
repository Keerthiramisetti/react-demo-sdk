import React from 'react';
import './TextArea.css';

const TextArea = ({
  value,
  onChange,
  placeholder,
  rows = 4,
  maxLength,
  disabled,
  resize = 'vertical', // Control resize option
}) => {
  return (
    <div className={`textarea-container ${disabled ? 'disabled' : ''}`}>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        disabled={disabled}
        className={`textarea-input ${resize}`}
      />
      {maxLength && (
        <div className="char-count">
          {value.length} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default TextArea;
