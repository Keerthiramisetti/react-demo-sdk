"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _badge = require("primereact/badge");
require("./CustomBadge.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CustomBadge = function CustomBadge(_ref) {
  var label = _ref.label,
    severity = _ref.severity,
    size = _ref.size,
    style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-badge-container",
    style: style
  }, /*#__PURE__*/_react["default"].createElement(_badge.Badge, {
    value: label,
    severity: severity,
    size: size,
    className: "custom-badge"
  }));
};
var _default = exports["default"] = CustomBadge;