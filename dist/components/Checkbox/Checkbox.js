"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Checkbox.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import React, { useState } from 'react';
// import './Checkbox.css';

// const Checkbox = ({ label = 'Check me', onChange }) => {
//     const [isChecked, setIsChecked] = useState(false);

//     const handleChange = () => {
//         setIsChecked(!isChecked);
//         if (onChange) onChange(!isChecked);
//     };

//     return (
//         <label className="custom-checkbox">
//             <input type="checkbox" checked={isChecked} onChange={handleChange} />
//             <span className="checkbox-label">{label}</span>
//         </label>
//     );
// };

// export default Checkbox;

/////////////// new one ////////////////////

// import React, { useState } from 'react';
// import './Checkbox.css';

// const Checkbox = ({
//   options, // Array of options [{ label, value }]
//   selectedValues = [], // For multiple selections or single selection
//   onChange, // Callback function to handle value change
//   isMultiple = true, // Flag to enable multiple selections
//   disabled = false, // Flag to disable checkboxes
//   label, // Optional custom label for the whole checkbox group
// }) => {

//   // Toggle selection for multiple checkboxes
//   const handleCheckboxChange = (value) => {
//     let updatedValues;
//     if (selectedValues.includes(value)) {
//       updatedValues = selectedValues.filter(item => item !== value); // Deselect the value
//     } else {
//       updatedValues = [...selectedValues, value]; // Select the value
//     }
//     onChange(updatedValues); // Call onChange with the updated selected values
//   };

//   // For single checkbox state (checked or unchecked)
//   const handleSingleCheckboxChange = (e) => {
//     const value = e.target.value;
//     const isChecked = e.target.checked;
//     onChange(isChecked ? value : null); // Set selected value to null if deselected
//   };

//   return (
//     <div className={`checkbox-group ${disabled ? 'disabled' : ''}`}>
//       {label && <label className="checkbox-group-label">{label}</label>}

//       {/* Render individual checkboxes */}
//       {options.map((option) => (
//         <div key={option.value} className="checkbox-item">
//           <input
//             type="checkbox"
//             id={`checkbox-${option.value}`}
//             value={option.value}
//             checked={isMultiple 
//               ? selectedValues.includes(option.value) // For multi-select
//               : selectedValues === option.value // For single-select
//             }
//             onChange={isMultiple 
//               ? () => handleCheckboxChange(option.value) // For multi-select
//               : handleSingleCheckboxChange // For single-select
//             }
//             disabled={disabled} // Disable checkbox if the parent is disabled
//           />
//           <label htmlFor={`checkbox-${option.value}`}>{option.label}</label>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Checkbox;

var Checkbox = function Checkbox(_ref) {
  var options = _ref.options,
    _ref$selectedValues = _ref.selectedValues,
    selectedValues = _ref$selectedValues === void 0 ? [] : _ref$selectedValues,
    onChange = _ref.onChange,
    _ref$isMultiple = _ref.isMultiple,
    isMultiple = _ref$isMultiple === void 0 ? true : _ref$isMultiple,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    label = _ref.label;
  // Ensure selectedValues is always an array for multiple selection
  var getSelectedValues = function getSelectedValues() {
    return Array.isArray(selectedValues) ? selectedValues : [selectedValues];
  };

  // Handle selection for multiple checkboxes (when isMultiple is true)
  var handleCheckboxChange = function handleCheckboxChange(value) {
    var updatedValues = getSelectedValues(); // Ensure selectedValues is an array

    // Check if the value is already in the array for multiple selection
    var index = updatedValues.indexOf(value);
    if (index !== -1) {
      updatedValues.splice(index, 1); // Deselect the value
    } else {
      updatedValues.push(value); // Select the value
    }
    onChange(updatedValues); // Call onChange with the updated selected values
  };

  // Handle selection for single checkbox (when isMultiple is false)
  var handleSingleCheckboxChange = function handleSingleCheckboxChange(e) {
    var value = e.target.value;
    var isChecked = e.target.checked;
    onChange(isChecked ? value : null); // If checked, set value, else set null
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "checkbox-group ".concat(disabled ? 'disabled' : '')
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: "checkbox-group-label"
  }, label), options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: option.value,
      className: "checkbox-item"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "checkbox",
      id: "checkbox-".concat(option.value),
      value: option.value,
      checked: isMultiple ? getSelectedValues().indexOf(option.value) !== -1 // For multi-select, check if value exists in the array
      : selectedValues === option.value // For single-select, compare directly with the value
      ,
      onChange: isMultiple ? function () {
        return handleCheckboxChange(option.value);
      } // For multi-select
      : handleSingleCheckboxChange // For single-select
      ,
      disabled: disabled // Disable checkbox if the parent is disabled
    }), /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: "checkbox-".concat(option.value)
    }, option.label));
  }));
};
var _default = exports["default"] = Checkbox;