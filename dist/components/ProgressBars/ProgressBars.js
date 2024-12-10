"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LinearProgressBar = exports.CircularProgressBar = exports.AnimatedProgressBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./ProgressBars.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import './ProgressBars.css'; // Ensure to include the correct CSS file
// // Linear Progress Bar
// export const LinearProgressBar = ({ progress, color, height }) => {
//   return (
//     <div className="linear-progress-bar" style={{ height: height || '10px' }}>
//       <div
//         className="linear-progress"
//         style={{
//           width: `${progress}%`,
//           backgroundColor: color || '#4caf50',
//         }}
//       />
//       <div className="progress-text" style={{ left: `${progress}%` }}>
//         {progress}%
//       </div>
//     </div>
//   );
// };
// // Circular Progress Bar
// export const CircularProgressBar = ({ progress, size, strokeWidth, color }) => {
//   const [dashoffset, setDashoffset] = useState(0);
//   useEffect(() => {
//     const radius = (size - strokeWidth) / 2;
//     const circumference = 2 * Math.PI * radius;
//     const offset = circumference - (progress / 100) * circumference;
//     setDashoffset(offset);
//   }, [progress, size, strokeWidth]);
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;
//   return (
//     <div className="circular-progress-bar">
//       <svg
//         width={size || '100px'}
//         height={size || '100px'}
//         viewBox={`0 0 ${size || 100} ${size || 100}`}
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke="#e6e6e6"
//           strokeWidth={strokeWidth || 10}
//           fill="none"
//         />
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke={color || '#4caf50'}
//           strokeWidth={strokeWidth || 10}
//           fill="none"
//           strokeDasharray={circumference}
//           strokeDashoffset={dashoffset}
//           transform={`rotate(-90 ${size / 2} ${size / 2})`}
//         />
//       </svg>
//       <div className="circular-progress-text">
//         {progress}%
//       </div>
//     </div>
//   );
// };
// // Animated Progress Bar (Simulate Progress Animation)
// export const AnimatedProgressBar = ({ color, size, animationDuration }) => {
//   const [progress, setProgress] = useState(0);
//   useEffect(() => {
//     if (progress < 100) {
//       const timer = setInterval(() => {
//         setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
//       }, animationDuration || 50); // Update every 50ms
//       return () => clearInterval(timer);
//     }
//   }, [progress, animationDuration]);
//   return (
//     <div className="animated-progress-bar" style={{ width: size || '100%' }}>
//       <div
//         className="animated-progress"
//         style={{
//           width: `${progress}%`,
//           backgroundColor: color || '#4caf50',
//         }}
//       />
//       <div className="progress-text">{progress}%</div>
//     </div>
//   );
// };
// // PropTypes validation for each progress bar component
// LinearProgressBar.propTypes = {
//   progress: PropTypes.number.isRequired,
//   color: PropTypes.string,
//   height: PropTypes.string,
// };
// CircularProgressBar.propTypes = {
//   progress: PropTypes.number.isRequired,
//   size: PropTypes.number,
//   strokeWidth: PropTypes.number,
//   color: PropTypes.string,
// };
// AnimatedProgressBar.propTypes = {
//   color: PropTypes.string,
//   size: PropTypes.string,
//   animationDuration: PropTypes.number,
// };
// // Exporting all progress bars in one object for easy import
// const ProgressBars = {
//   LinearProgressBar,
//   CircularProgressBar,
//   AnimatedProgressBar,
// };
// export default ProgressBars;
// Ensure to include the correct CSS file

// Linear Progress Bar
var LinearProgressBar = exports.LinearProgressBar = function LinearProgressBar(_ref) {
  var progress = _ref.progress,
    color = _ref.color,
    height = _ref.height;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "linear-progress-bar",
    style: {
      height: height || '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "linear-progress",
    style: {
      width: "".concat(progress, "%"),
      backgroundColor: color || '#4caf50'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-text",
    style: {
      left: "".concat(progress, "%")
    }
  }, progress, "%"));
};

// Circular Progress Bar
// export const CircularProgressBar = ({ progress, size, strokeWidth, color }) => {
//   const [dashoffset, setDashoffset] = useState(0);

//   useEffect(() => {
//     const radius = (size - strokeWidth) / 2;
//     const circumference = 2 * Math.PI * radius;
//     const offset = circumference - (progress / 100) * circumference;
//     setDashoffset(offset);
//   }, [progress, size, strokeWidth]);

//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;

//   return (
//     <div className="circular-progress-bar">
//       <svg
//         width={size || '100px'}
//         height={size || '100px'}
//         viewBox={`0 0 ${size || 100} ${size || 100}`}
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke="#e6e6e6"
//           strokeWidth={strokeWidth || 10}
//           fill="none"
//         />
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           stroke={color || '#4caf50'}
//           strokeWidth={strokeWidth || 10}
//           fill="none"
//           strokeDasharray={circumference}
//           strokeDashoffset={dashoffset}
//           transform={`rotate(-90 ${size / 2} ${size / 2})`}
//         />
//       </svg>
//       <div className="circular-progress-text">
//         {progress}%
//       </div>
//     </div>
//   );
// };

var CircularProgressBar = exports.CircularProgressBar = function CircularProgressBar(_ref2) {
  var progress = _ref2.progress,
    size = _ref2.size,
    strokeWidth = _ref2.strokeWidth,
    color = _ref2.color;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    dashoffset = _useState2[0],
    setDashoffset = _useState2[1];
  (0, _react.useEffect)(function () {
    var radius = (size - strokeWidth) / 2; // Calculate the radius
    var circumference = 2 * Math.PI * radius; // Circumference of the circle
    var offset = circumference - progress / 100 * circumference; // Calculate the stroke dash offset
    setDashoffset(offset); // Set the dash offset to show progress
  }, [progress, size, strokeWidth]);
  var radius = (size - strokeWidth) / 2; // Calculate the radius again
  var circumference = 2 * Math.PI * radius; // Circumference of the circle

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "circular-progress-bar"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: size || '100px',
    height: size || '100px',
    viewBox: "0 0 ".concat(size || 100, " ").concat(size || 100),
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    stroke: "#e6e6e6" // Grey background circle
    ,
    strokeWidth: strokeWidth || 10,
    fill: "none"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: radius,
    stroke: color || '#4caf50' // Green color for progress
    ,
    strokeWidth: strokeWidth || 10,
    fill: "none",
    strokeDasharray: circumference // Set the dash array to the full circumference
    ,
    strokeDashoffset: dashoffset // Set the dash offset to represent the progress
    ,
    transform: "rotate(-90 ".concat(size / 2, " ").concat(size / 2, ")") // Rotate so the progress starts from the top
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "circular-progress-text"
  }, progress, "% "));
};

// Animated Progress Bar (Simulate Progress Animation)
// export const AnimatedProgressBar = ({ color, size, animationDuration }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     if (progress < 100) {
//       const timer = setInterval(() => {
//         setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
//       }, animationDuration || 50); // Update every 50ms
//       return () => clearInterval(timer);
//     }
//   }, [progress, animationDuration]);

//   return (
//     <div className="animated-progress-bar" style={{ width: size || '100%' }}>
//       <div
//         className="animated-progress"
//         style={{
//           width: `${progress}%`,
//           backgroundColor: color || '#4caf50',
//         }}
//       />
//       <div className="progress-text">{progress}%</div>
//     </div>
//   );
// };

var AnimatedProgressBar = exports.AnimatedProgressBar = function AnimatedProgressBar(_ref3) {
  var color = _ref3.color,
    size = _ref3.size,
    animationDuration = _ref3.animationDuration;
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    progress = _useState4[0],
    setProgress = _useState4[1];
  (0, _react.useEffect)(function () {
    if (progress < 100) {
      var timer = setInterval(function () {
        setProgress(function (prevProgress) {
          return Math.min(prevProgress + 1, 100);
        });
      }, animationDuration || 50); // Update every 50ms
      return function () {
        return clearInterval(timer);
      }; // Cleanup interval when progress reaches 100
    }
  }, [progress, animationDuration]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "animated-progress-bar",
    style: {
      width: size || '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "animated-progress",
    style: {
      width: "".concat(progress, "%"),
      backgroundColor: color || '#4caf50',
      transition: 'width 0.25s ease-in-out' // Smooth transition
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-text"
  }, progress, "%"));
};

// PropTypes validation for each progress bar component
LinearProgressBar.propTypes = {
  progress: _propTypes["default"].number.isRequired,
  color: _propTypes["default"].string,
  height: _propTypes["default"].string
};
CircularProgressBar.propTypes = {
  progress: _propTypes["default"].number.isRequired,
  size: _propTypes["default"].number,
  strokeWidth: _propTypes["default"].number,
  color: _propTypes["default"].string
};
AnimatedProgressBar.propTypes = {
  color: _propTypes["default"].string,
  size: _propTypes["default"].string,
  animationDuration: _propTypes["default"].number
};

// Exporting all progress bars in one object for easy import
var ProgressBars = {
  LinearProgressBar: LinearProgressBar,
  CircularProgressBar: CircularProgressBar,
  AnimatedProgressBar: AnimatedProgressBar
};
var _default = exports["default"] = ProgressBars;