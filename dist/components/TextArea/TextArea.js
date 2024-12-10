"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./TextArea.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TextArea = function TextArea(_ref) {
  var value = _ref.value,
    _onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 4 : _ref$rows,
    maxLength = _ref.maxLength,
    disabled = _ref.disabled,
    _ref$resize = _ref.resize,
    resize = _ref$resize === void 0 ? 'vertical' : _ref$resize;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "textarea-container ".concat(disabled ? 'disabled' : '')
  }, /*#__PURE__*/_react["default"].createElement("textarea", {
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    placeholder: placeholder,
    rows: rows,
    maxLength: maxLength,
    disabled: disabled,
    className: "textarea-input ".concat(resize)
  }), maxLength && /*#__PURE__*/_react["default"].createElement("div", {
    className: "char-count"
  }, value.length, " / ", maxLength));
};
var _default = exports["default"] = TextArea;