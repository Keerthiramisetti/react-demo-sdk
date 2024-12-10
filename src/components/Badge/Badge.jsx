import React from 'react';
import { Badge } from 'primereact/badge';
import './CustomBadge.css';

const CustomBadge = ({ label, severity, size, style }) => {
  return (
    <div className="custom-badge-container" style={style}>
      <Badge value={label} severity={severity} size={size} className="custom-badge" />
    </div>
  );
};

export default CustomBadge;
