import React from 'react';
import './Avatar.css'; 

const Avatar = ({
  src, // supports PNG (.png), JPEG (.jpg, .jpeg), GIF (.gif), BMP (.bmp)
  alt,
  size = 'medium',
  initials,
  border = false,
  shape = 'circle',
  color = '#007bff', // Default color (blue) for background
  fontColor = 'white', // Default color for initials text
}) => {
  // Define sizes for small, medium, and large avatars, and support for custom sizes
  const avatarSize = {
    small: '40px',
    medium: '60px',
    large: '80px',
  };

  // If size is custom (like '100px'), we use it directly
  const avatarWidthHeight = avatarSize[size] || size; // Handle custom size directly

  // Determine the appropriate class based on shape (circle or square)
  const avatarShapeClass = shape === 'square' ? 'avatar-square' : 'avatar-circle';

  return (
    <div
      className={`avatar ${avatarShapeClass} ${border ? 'avatar-border' : ''}`}
      style={{
        width: avatarWidthHeight, // Custom or predefined size
        height: avatarWidthHeight, // Custom or predefined size
        backgroundColor: color, // Background color (dynamic)
        color: fontColor, // Text color for initials
        fontSize: size === 'small' ? '14px' : size === 'medium' ? '18px' : '22px', // Font size based on avatar size
      }}
    >
      {src ? (
        // If image src is provided, render the image inside the avatar
        <img src={src} alt={alt} className="avatar-image" />
      ) : (
        // Otherwise, show the initials if no image is provided
        <span className="avatar-initials">{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
