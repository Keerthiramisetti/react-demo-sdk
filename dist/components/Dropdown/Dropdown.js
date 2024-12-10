"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Dropdown.css");
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Dropdown = function Dropdown(_ref) {
  var options = _ref.options,
    _ref$selectedValue = _ref.selectedValue,
    selectedValue = _ref$selectedValue === void 0 ? "" : _ref$selectedValue,
    _ref$selectedValues = _ref.selectedValues,
    selectedValues = _ref$selectedValues === void 0 ? [] : _ref$selectedValues,
    onChange = _ref.onChange,
    _ref$isMultiple = _ref.isMultiple,
    isMultiple = _ref$isMultiple === void 0 ? false : _ref$isMultiple,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Select..." : _ref$placeholder,
    _ref$searchable = _ref.searchable,
    searchable = _ref$searchable === void 0 ? false : _ref$searchable,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1]; // To control dropdown open/close state
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    searchQuery = _useState4[0],
    setSearchQuery = _useState4[1]; // To control the search query input

  // Toggle dropdown open/close
  var toggleDropdown = function toggleDropdown() {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  // Handle value change in single select mode
  var handleSelectSingle = function handleSelectSingle(value) {
    onChange(value); // Call the onChange with the selected value
    setIsOpen(false); // Close the dropdown after selection
  };

  // Handle value change in multiple select mode
  var handleSelectMultiple = function handleSelectMultiple(value) {
    var newSelectedValues = selectedValues.includes(value) ? selectedValues.filter(function (item) {
      return item !== value;
    }) // Deselect if already selected
    : [].concat(_toConsumableArray(selectedValues), [value]); // Select if not already selected

    onChange(newSelectedValues); // Call onChange with the updated selected values
  };

  // Filter options based on search query
  var filteredOptions = options.filter(function (option) {
    return option.label.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown ".concat(disabled ? 'disabled' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-header",
    onClick: toggleDropdown
  }, /*#__PURE__*/_react["default"].createElement("span", null, isMultiple ? "".concat(selectedValues.length, " selected") // For multiple select
  : selectedValue || placeholder // For single select
  ), /*#__PURE__*/_react["default"].createElement("span", {
    className: "dropdown-arrow"
  }, "\u25BC")), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-body"
  }, searchable && /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "dropdown-search",
    placeholder: "Search...",
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-options"
  }, filteredOptions.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: option.value,
      className: "dropdown-option ".concat(isMultiple && selectedValues.includes(option.value) ? 'selected' : ''),
      onClick: function onClick() {
        isMultiple ? handleSelectMultiple(option.value) : handleSelectSingle(option.value);
      }
    }, isMultiple && /*#__PURE__*/_react["default"].createElement("input", {
      type: "checkbox",
      checked: selectedValues.includes(option.value),
      readOnly: true
    }), /*#__PURE__*/_react["default"].createElement("span", null, option.label));
  }))));
};
var _default = exports["default"] = Dropdown;