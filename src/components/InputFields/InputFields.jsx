import React, { useState } from 'react';
import './InputFields.css';

const InputFields = ({
  type = 'text',
  value,
  onChange,
  label,
  id,
  placeholder,
  disabled = false,
  readonly = false,
  error,
  loading = false,  // Show loading state outside the input
  size = 'default', // 'sm', 'lg', or 'default'
  helperText,
  maxLength,
  showCounter = false,
  icon,
  iconPosition = 'left',
  dark = false, // dark background
  autoFocus = false, // Auto-focus on the input field
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  // Handle value changes for controlled input
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  // Handle input focus and blur for styles
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputClass = `input ${size} ${isFocused ? 'focused' : ''} ${error ? 'error' : ''} ${disabled ? 'disabled' : ''} ${dark ? 'dark-bg' : ''}`;
  const containerClass = `input-container ${icon ? 'with-icon' : ''} ${iconPosition === 'right' ? 'icon-right' : ''}`;

  const renderCounter = () => {
    if (showCounter && maxLength) {
      return (
        <div className="char-counter">
          {inputValue.length} / {maxLength}
        </div>
      );
    }
  };

  return (
    <div className={containerClass} {...props}>
      {icon && iconPosition === 'left' && <i className={`input-icon-left ${icon}`} />}
      
      <div className="form-outline">
        {label && <label htmlFor={id} className="input-label">{label}</label>}
        <input
          id={id}
          type={type}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          maxLength={maxLength}
          className={inputClass}
          autoFocus={autoFocus}
          {...props}
        />
      </div>

      {loading && <div className="input-loading">Loading...</div>} {/* Show loading indicator outside input */}
      {helperText && <div className="form-helper">{helperText}</div>}
      {error && <span className="error-message">{error}</span>}
      {renderCounter()}
    </div>
  );
};

export default InputFields;


// this input fields supports all these input types
// text
// password
// email
// number
// tel
// url
// search
// date
// time
// datetime-local
// month
// week
// color
// range
// checkbox
// radio
// file
// hidden
// image
// submit
// reset