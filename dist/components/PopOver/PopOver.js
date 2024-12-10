"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Popover.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useState, useRef, useEffect } from 'react';
// import './PopOver.css';  // Styling for Popover
// const PopOver = ({
//   content,
//   position = 'top', // 'top', 'bottom', 'left', 'right'
//   trigger = 'click', // 'click', 'hover'
//   children,
//   closeOnClickOutside = true,
//   offset = 10,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const popoverRef = useRef(null);
//   const triggerRef = useRef(null);
//   const handleClickOutside = (e) => {
//     if (popoverRef.current && !popoverRef.current.contains(e.target) && !triggerRef.current.contains(e.target)) {
//       setIsOpen(false);
//     }
//   };
//   const handleTrigger = () => {
//     setIsOpen((prev) => !prev);
//   };
//   const handleMouseEnter = () => {
//     if (trigger === 'hover') {
//       setIsOpen(true);
//     }
//   };
//   const handleMouseLeave = () => {
//     if (trigger === 'hover') {
//       setIsOpen(false);
//     }
//   };
//   useEffect(() => {
//     if (closeOnClickOutside) {
//       document.addEventListener('click', handleClickOutside);
//       return () => document.removeEventListener('click', handleClickOutside);
//     }
//   }, [closeOnClickOutside]);
//   const popoverPosition = {
//     top: position === 'top' ? `calc(-100% - ${offset}px)` : 'auto',
//     bottom: position === 'bottom' ? `calc(100% + ${offset}px)` : 'auto',
//     left: position === 'left' ? `calc(-100% - ${offset}px)` : 'auto',
//     right: position === 'right' ? `calc(100% + ${offset}px)` : 'auto',
//   };
//   return (
//     <div
//       ref={triggerRef}
//       onClick={trigger === 'click' ? handleTrigger : null}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="popover-trigger"
//     >
//       {children}
//       {isOpen && (
//         <div
//           ref={popoverRef}
//           className="popover"
//           style={{ position: 'absolute', ...popoverPosition }}
//         >
//           {content}
//         </div>
//       )}
//     </div>
//   );
// };
// export default PopOver;
// Include the relevant styles

var Popover = function Popover(_ref) {
  var content = _ref.content,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'top' : _ref$position,
    _ref$trigger = _ref.trigger,
    trigger = _ref$trigger === void 0 ? 'click' : _ref$trigger,
    children = _ref.children,
    _ref$closeOnClickOuts = _ref.closeOnClickOutside,
    closeOnClickOutside = _ref$closeOnClickOuts === void 0 ? true : _ref$closeOnClickOuts,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 10 : _ref$offset;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    popoverPosition = _useState4[0],
    setPopoverPosition = _useState4[1];
  var popoverRef = (0, _react.useRef)(null);
  var triggerRef = (0, _react.useRef)(null);

  // Close the popover if clicked outside
  var handleClickOutside = function handleClickOutside(e) {
    if (popoverRef.current && !popoverRef.current.contains(e.target) && !triggerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // Toggles popover visibility on click (or hover)
  var handleTrigger = function handleTrigger() {
    setIsOpen(function (prev) {
      return !prev;
    });
  };

  // Set popover position dynamically based on trigger position and desired position
  var calculatePosition = function calculatePosition() {
    if (triggerRef.current && popoverRef.current) {
      var triggerRect = triggerRef.current.getBoundingClientRect();
      var popoverRect = popoverRef.current.getBoundingClientRect();
      var positionStyles = {};
      switch (position) {
        case 'top':
          positionStyles = {
            bottom: "calc(100% + ".concat(offset, "px)"),
            left: "".concat(triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2, "px")
          };
          break;
        case 'bottom':
          positionStyles = {
            top: "calc(100% + ".concat(offset, "px)"),
            left: "".concat(triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2, "px")
          };
          break;
        case 'left':
          positionStyles = {
            right: "calc(100% + ".concat(offset, "px)"),
            top: "".concat(triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2, "px")
          };
          break;
        case 'right':
          positionStyles = {
            left: "calc(100% + ".concat(offset, "px)"),
            top: "".concat(triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2, "px")
          };
          break;
        default:
          break;
      }
      setPopoverPosition(positionStyles);
    }
  };
  (0, _react.useEffect)(function () {
    if (isOpen) {
      calculatePosition();
    }
  }, [isOpen, position]);
  (0, _react.useEffect)(function () {
    if (closeOnClickOutside) {
      document.addEventListener('click', handleClickOutside);
      return function () {
        return document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [closeOnClickOutside]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: triggerRef,
    onClick: trigger === 'click' ? handleTrigger : null,
    onMouseEnter: trigger === 'hover' ? function () {
      return setIsOpen(true);
    } : null,
    onMouseLeave: trigger === 'hover' ? function () {
      return setIsOpen(false);
    } : null,
    className: "popover-trigger"
  }, children, isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    ref: popoverRef,
    className: "popover",
    style: _objectSpread({
      position: 'absolute',
      zIndex: 10
    }, popoverPosition)
  }, content));
};
var _default = exports["default"] = Popover;