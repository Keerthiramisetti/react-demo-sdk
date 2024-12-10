"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Avatar.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import React from 'react';
// import './Avatar.css';  // Styling for Avatar component

// const Avatar = ({ src, alt, size = 'medium', initials, border = false }) => {
//   const avatarSize = {
//     small: '40px',
//     medium: '60px',
//     large: '80px',
//   };

//   return (
//     <div
//       className={`avatar ${border ? 'avatar-border' : ''}`}
//       style={{
//         width: avatarSize[size],
//         height: avatarSize[size],
//         fontSize: size === 'small' ? '14px' : size === 'medium' ? '18px' : '22px',
//       }}
//     >
//       {src ? (
//         <img src={src} alt={alt} className="avatar-image" />
//       ) : (
//         <span className="avatar-initials">{initials}</span>
//       )}
//     </div>
//   );
// };

// export default Avatar;

// Ensure the correct path based on your project structure

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    initials = _ref.initials,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? false : _ref$border,
    _ref$shape = _ref.shape,
    shape = _ref$shape === void 0 ? 'circle' : _ref$shape,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#007bff' : _ref$color,
    _ref$fontColor = _ref.fontColor,
    fontColor = _ref$fontColor === void 0 ? 'white' : _ref$fontColor;
  // Define sizes for small, medium, and large avatars, and support for custom sizes
  var avatarSize = {
    small: '40px',
    medium: '60px',
    large: '80px'
  };

  // If size is custom (like '100px'), we use it directly
  var avatarWidthHeight = avatarSize[size] || size; // Handle custom size directly

  // Determine the appropriate class based on shape (circle or square)
  var avatarShapeClass = shape === 'square' ? 'avatar-square' : 'avatar-circle';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "avatar ".concat(avatarShapeClass, " ").concat(border ? 'avatar-border' : ''),
    style: {
      width: avatarWidthHeight,
      // Custom or predefined size
      height: avatarWidthHeight,
      // Custom or predefined size
      backgroundColor: color,
      // Background color (dynamic)
      color: fontColor,
      // Text color for initials
      fontSize: size === 'small' ? '14px' : size === 'medium' ? '18px' : '22px' // Font size based on avatar size
    }
  }, src ?
  /*#__PURE__*/
  // If image src is provided, render the image inside the avatar
  _react["default"].createElement("img", {
    src: src,
    alt: alt,
    className: "avatar-image"
  }) :
  /*#__PURE__*/
  // Otherwise, show the initials if no image is provided
  _react["default"].createElement("span", {
    className: "avatar-initials"
  }, initials));
};
var _default = exports["default"] = Avatar;