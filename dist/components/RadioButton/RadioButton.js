"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./RadioButton.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var RadioButton = function RadioButton(_ref) {
  var label = _ref.label,
    value = _ref.value,
    name = _ref.name,
    checked = _ref.checked,
    _onChange = _ref.onChange,
    disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "radio-button-container ".concat(disabled ? 'disabled' : '')
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "radio",
    id: value,
    name: name,
    value: value,
    checked: checked,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    disabled: disabled,
    className: "radio-button-input"
  }), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: value,
    className: "radio-button-label"
  }, label));
};
var _default = exports["default"] = RadioButton;