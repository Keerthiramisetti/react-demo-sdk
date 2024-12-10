"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Tooltip.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // src/Tooltip.js
// const Tooltip = ({ text, position = 'top', delay = 500, trigger = 'hover', children }) => {
//   const [visible, setVisible] = useState(false);
//   const [tooltipPosition, setTooltipPosition] = useState(position);
//   const tooltipRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // Show the tooltip on hover
//   const handleMouseEnter = () => {
//     if (trigger === 'hover') {
//       timeoutRef.current = setTimeout(() => {
//         setVisible(true);
//       }, delay);
//     }
//   };

//   // Hide the tooltip on mouse leave
//   const handleMouseLeave = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     if (trigger === 'hover') {
//       setVisible(false);
//     }
//   };

//   // Toggle visibility when clicking (if trigger is 'click')
//   const handleClick = () => {
//     if (trigger === 'click') {
//       setVisible((prevVisible) => !prevVisible);
//     }
//   };

//   // Calculate the tooltip position dynamically
//   const calculatePosition = (tooltip) => {
//     if (!tooltip) return;

//     const rect = tooltip.getBoundingClientRect();
//     const offset = 8; // Adjust the offset for positioning

//     if (tooltipPosition === 'top') {
//       tooltip.style.top = `${-rect.height - offset}px`;
//       tooltip.style.left = `50%`;
//       tooltip.style.transform = 'translateX(-50%)';
//     } else if (tooltipPosition === 'right') {
//       tooltip.style.top = `50%`;
//       tooltip.style.left = `${rect.width + offset}px`;
//       tooltip.style.transform = 'translateY(-50%)';
//     } else if (tooltipPosition === 'bottom') {
//       tooltip.style.top = `${rect.height + offset}px`;
//       tooltip.style.left = `50%`;
//       tooltip.style.transform = 'translateX(-50%)';
//     } else if (tooltipPosition === 'left') {
//       tooltip.style.top = `50%`;
//       tooltip.style.left = `${-rect.width - offset}px`;
//       tooltip.style.transform = 'translateY(-50%)';
//     }
//   };

//   useEffect(() => {
//     if (tooltipRef.current) {
//       calculatePosition(tooltipRef.current);
//     }
//   }, [tooltipPosition]);

//   return (
//     <div
//       className="tooltip-container"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       onClick={handleClick} // Handle click event for 'click' trigger
//     >
//       {children}
//       {visible && (
//         <div ref={tooltipRef} className={`tooltip tooltip-${tooltipPosition}`}>
//           {text}
//         </div>
//       )}
//     </div>
//   );
// };

var Tooltip = function Tooltip(_ref) {
  var text = _ref.text,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'top' : _ref$position,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 500 : _ref$delay,
    _ref$trigger = _ref.trigger,
    trigger = _ref$trigger === void 0 ? 'hover' : _ref$trigger,
    children = _ref.children;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(position),
    _useState4 = _slicedToArray(_useState3, 2),
    tooltipPosition = _useState4[0],
    setTooltipPosition = _useState4[1];
  var tooltipRef = (0, _react.useRef)(null);
  var timeoutRef = (0, _react.useRef)(null);

  // Show the tooltip on hover
  var handleMouseEnter = function handleMouseEnter() {
    if (trigger === 'hover') {
      timeoutRef.current = setTimeout(function () {
        setVisible(true);
      }, delay);
    }
  };

  // Hide the tooltip on mouse leave
  var handleMouseLeave = function handleMouseLeave() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (trigger === 'hover') {
      setVisible(false);
    }
  };

  // Toggle visibility when clicking (if trigger is 'click')
  var handleClick = function handleClick() {
    if (trigger === 'click') {
      setVisible(function (prevVisible) {
        return !prevVisible;
      });
    }
  };

  // Calculate the tooltip position dynamically
  var calculatePosition = function calculatePosition(tooltip) {
    if (!tooltip) return;
    var rect = tooltip.getBoundingClientRect();
    var offset = 10; // Adjust offset for positioning

    if (tooltipPosition === 'top') {
      tooltip.style.top = "".concat(-rect.height - offset, "px");
      tooltip.style.left = "50%";
      tooltip.style.transform = 'translateX(-50%)';
    } else if (tooltipPosition === 'right') {
      tooltip.style.top = "50%";
      tooltip.style.left = "".concat(rect.width + offset, "px");
      tooltip.style.transform = 'translateY(-50%)';
    } else if (tooltipPosition === 'bottom') {
      tooltip.style.top = "".concat(rect.height + offset, "px");
      tooltip.style.left = "50%";
      tooltip.style.transform = 'translateX(-50%)';
    } else if (tooltipPosition === 'left') {
      tooltip.style.top = "50%";
      tooltip.style.left = "".concat(-rect.width - offset, "px");
      tooltip.style.transform = 'translateY(-50%)';
    }
  };
  (0, _react.useEffect)(function () {
    if (tooltipRef.current) {
      calculatePosition(tooltipRef.current);
    }
  }, [tooltipPosition]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "tooltip-container",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick // Handle click event for 'click' trigger
  }, children, visible && /*#__PURE__*/_react["default"].createElement("div", {
    ref: tooltipRef,
    className: "tooltip tooltip-".concat(tooltipPosition)
  }, text));
};
var _default = exports["default"] = Tooltip;