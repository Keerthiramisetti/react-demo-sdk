"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Tag.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React from 'react';
// import './Tag.css';  // Styling for the Tag component
// const Tag = ({ label, onDelete, color = 'blue', closable = true }) => {
//   return (
//     <div className={`tag tag-${color}`}>
//       <span>{label}</span>
//       {closable && (
//         <button onClick={onDelete} className="tag-close-btn">
//           &times;
//         </button>
//       )}
//     </div>
//   );
// };
// export default Tag;
///////////// no label ////////////////
// import React, { useState } from 'react';
// import './Tag.css'; // Include the corresponding styles
// const Tag = ({ initialTags = [], color = 'blue', closable = true, maxTags = 5 }) => {
//   const [tags, setTags] = useState(initialTags);
//   // Handle deleting a tag
//   const handleDelete = (tagToDelete) => {
//     setTags(tags.filter((tag) => tag !== tagToDelete));
//   };
//   // Handle adding a new tag
//   const handleAddTag = (e) => {
//     if (e.key === 'Enter' && e.target.value.trim() !== '') {
//       if (tags.length < maxTags) {
//         setTags([...tags, e.target.value.trim()]);
//         e.target.value = ''; // Clear input field after adding
//       } else {
//         alert(`You can only add up to ${maxTags} tags.`);
//       }
//     }
//   };
//   return (
//     <div className="tag-container">
//       <div className="tag-list">
//         {tags.map((tag, index) => (
//           <div key={index} className={`tag tag-${color}`}>
//             <span>{tag}</span>
//             {closable && (
//               <button onClick={() => handleDelete(tag)} className="tag-close-btn">
//                 &times;
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//       {/* Input field to add tags */}
//       <input
//         type="text"
//         placeholder="Add a tag"
//         onKeyDown={handleAddTag}
//         className="tag-input"
//         maxLength={20} // Optional: Max character length for tags
//       />
//     </div>
//   );
// };
// export default Tag;
// Include the corresponding styles

var Tag = function Tag(_ref) {
  var _ref$initialTags = _ref.initialTags,
    initialTags = _ref$initialTags === void 0 ? [] : _ref$initialTags,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'blue' : _ref$color,
    _ref$closable = _ref.closable,
    closable = _ref$closable === void 0 ? true : _ref$closable,
    _ref$maxTags = _ref.maxTags,
    maxTags = _ref$maxTags === void 0 ? 5 : _ref$maxTags;
  var _useState = (0, _react.useState)(initialTags),
    _useState2 = _slicedToArray(_useState, 2),
    tags = _useState2[0],
    setTags = _useState2[1];

  // Handle deleting a tag
  var handleDelete = function handleDelete(tagToDelete) {
    setTags(tags.filter(function (tag) {
      return tag !== tagToDelete;
    }));
  };

  // Handle adding a new tag
  var handleAddTag = function handleAddTag(e) {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      if (tags.length < maxTags) {
        setTags([].concat(_toConsumableArray(tags), [e.target.value.trim()]));
        e.target.value = ''; // Clear input field after adding
      } else {
        alert("You can only add up to ".concat(maxTags, " tags."));
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "tag-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tag-list"
  }, tags.map(function (tag, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "tag tag-".concat(color)
    }, /*#__PURE__*/_react["default"].createElement("span", null, tag), closable && /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return handleDelete(tag);
      },
      className: "tag-close-btn"
    }, "\xD7"));
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Add a tag",
    onKeyDown: handleAddTag,
    className: "tag-input",
    maxLength: 20 // Optional: Max character length for tags
  }));
};
var _default = exports["default"] = Tag;