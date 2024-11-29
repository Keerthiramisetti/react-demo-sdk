import React, { useState } from 'react';
import './Input.css';

const Input = ({
    type = 'text',
    placeholder = 'Enter value',
    label,
    validation,
    errorMessage,
    maxLength = 255,
    showPasswordToggle = false, // Enables toggle for password visibility
}) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);

        // Validate the input if a validation function is provided
        if (validation && !validation(newValue)) {
            setError(errorMessage || 'Invalid input');
        } else {
            setError('');
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const inputType = type === 'password' && showPasswordToggle ? (isPasswordVisible ? 'text' : 'password') : type;

    return (
        <div className="custom-input">
            {label && <label className="input-label">{label}</label>}
            <div className="input-wrapper">
                <input
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    maxLength={maxLength}
                    className={`input-field ${error ? 'input-error' : ''}`}
                />
                {type === 'password' && showPasswordToggle && (
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? 'Hide' : 'Show'}
                    </button>
                )}
            </div>
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default Input;
