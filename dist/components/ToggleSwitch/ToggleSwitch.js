"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./ToggleSwitch.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ToggleSwitch = function ToggleSwitch(_ref) {
  var checked = _ref.checked,
    _onChange = _ref.onChange,
    disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement("label", {
    className: "toggle-switch ".concat(disabled ? 'disabled' : '')
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: function onChange(e) {
      return _onChange(e.target.checked);
    },
    disabled: disabled
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "toggle-slider"
  }));
};
var _default = exports["default"] = ToggleSwitch;