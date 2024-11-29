import React, { useState } from 'react';
import './Button.css';

const Button = ({ initialColor = 'blue', alternateColor = 'red', label = 'Click me' }) => {
    const [color, setColor] = useState(initialColor);

    const changeColor = () => {
        setColor(color === initialColor ? alternateColor : initialColor);
    };

    return (
        <button className="custom-button" style={{ backgroundColor: color }} onClick={changeColor}>
            {label}
        </button>
    );
};

export default Button;
