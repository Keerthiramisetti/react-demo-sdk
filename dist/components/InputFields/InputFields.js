"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./InputFields.css");
var _excluded = ["type", "value", "onChange", "label", "id", "placeholder", "disabled", "readonly", "error", "loading", "size", "helperText", "maxLength", "showCounter", "icon", "iconPosition", "dark", "autoFocus"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var InputFields = function InputFields(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    value = _ref.value,
    onChange = _ref.onChange,
    label = _ref.label,
    id = _ref.id,
    placeholder = _ref.placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readonly = _ref.readonly,
    readonly = _ref$readonly === void 0 ? false : _ref$readonly,
    error = _ref.error,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'default' : _ref$size,
    helperText = _ref.helperText,
    maxLength = _ref.maxLength,
    _ref$showCounter = _ref.showCounter,
    showCounter = _ref$showCounter === void 0 ? false : _ref$showCounter,
    icon = _ref.icon,
    _ref$iconPosition = _ref.iconPosition,
    iconPosition = _ref$iconPosition === void 0 ? 'left' : _ref$iconPosition,
    _ref$dark = _ref.dark,
    dark = _ref$dark === void 0 ? false : _ref$dark,
    _ref$autoFocus = _ref.autoFocus,
    autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(value || ''),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFocused = _useState4[0],
    setIsFocused = _useState4[1];

  // Handle value changes for controlled input
  var handleChange = function handleChange(e) {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };

  // Handle input focus and blur for styles
  var handleFocus = function handleFocus() {
    setIsFocused(true);
  };
  var handleBlur = function handleBlur() {
    setIsFocused(false);
  };
  var inputClass = "input ".concat(size, " ").concat(isFocused ? 'focused' : '', " ").concat(error ? 'error' : '', " ").concat(disabled ? 'disabled' : '', " ").concat(dark ? 'dark-bg' : '');
  var containerClass = "input-container ".concat(icon ? 'with-icon' : '', " ").concat(iconPosition === 'right' ? 'icon-right' : '');
  var renderCounter = function renderCounter() {
    if (showCounter && maxLength) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "char-counter"
      }, inputValue.length, " / ", maxLength);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: containerClass
  }, props), icon && iconPosition === 'left' && /*#__PURE__*/_react["default"].createElement("i", {
    className: "input-icon-left ".concat(icon)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-outline"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id,
    className: "input-label"
  }, label), /*#__PURE__*/_react["default"].createElement("input", _extends({
    id: id,
    type: type,
    value: inputValue,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    placeholder: placeholder,
    disabled: disabled,
    readOnly: readonly,
    maxLength: maxLength,
    className: inputClass,
    autoFocus: autoFocus
  }, props))), loading && /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-loading"
  }, "Loading..."), " ", helperText && /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-helper"
  }, helperText), error && /*#__PURE__*/_react["default"].createElement("span", {
    className: "error-message"
  }, error), renderCounter());
};
var _default = exports["default"] = InputFields; // this input fields supports all these input types
// text
// password
// email
// number
// tel
// url
// search
// date
// time
// datetime-local
// month
// week
// color
// range
// checkbox
// radio
// file
// hidden
// image
// submit
// reset