import React, { useState } from 'react';
import './Checkbox.css';

const Checkbox = ({ label = 'Check me', onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
        if (onChange) onChange(!isChecked);
    };

    return (
        <label className="custom-checkbox">
            <input type="checkbox" checked={isChecked} onChange={handleChange} />
            <span className="checkbox-label">{label}</span>
        </label>
    );
};

export default Checkbox;
