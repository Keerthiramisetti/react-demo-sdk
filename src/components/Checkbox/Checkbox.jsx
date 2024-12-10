import React from 'react';
import './Checkbox.css';

const Checkbox = ({
  options, // Array of options [{ label, value }]
  selectedValues = [], // For multiple selections (array), or a single value for single selection
  onChange, // Callback function to handle value change
  isMultiple = true, // Flag to enable multiple selections
  disabled = false, // Flag to disable checkboxes
  label, // Optional custom label for the whole checkbox group
}) => {

  // Ensure selectedValues is always an array for multiple selection
  const getSelectedValues = () => {
    return Array.isArray(selectedValues) ? selectedValues : [selectedValues];
  };

  // Handle selection for multiple checkboxes (when isMultiple is true)
  const handleCheckboxChange = (value) => {
    let updatedValues = getSelectedValues(); // Ensure selectedValues is an array

    // Check if the value is already in the array for multiple selection
    const index = updatedValues.indexOf(value);
    if (index !== -1) {
      updatedValues.splice(index, 1); // Deselect the value
    } else {
      updatedValues.push(value); // Select the value
    }

    onChange(updatedValues); // Call onChange with the updated selected values
  };

  // Handle selection for single checkbox (when isMultiple is false)
  const handleSingleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    onChange(isChecked ? value : null); // If checked, set value, else set null
  };

  return (
    <div className={`checkbox-group ${disabled ? 'disabled' : ''}`}>
      {label && <label className="checkbox-group-label">{label}</label>}

      {/* Render individual checkboxes */}
      {options.map((option) => (
        <div key={option.value} className="checkbox-item">
          <input
            type="checkbox"
            id={`checkbox-${option.value}`}
            value={option.value}
            checked={isMultiple
              ? getSelectedValues().indexOf(option.value) !== -1 // For multi-select, check if value exists in the array
              : selectedValues === option.value // For single-select, compare directly with the value
            }
            onChange={isMultiple
              ? () => handleCheckboxChange(option.value) // For multi-select
              : handleSingleCheckboxChange // For single-select
            }
            disabled={disabled} // Disable checkbox if the parent is disabled
          />
          <label htmlFor={`checkbox-${option.value}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;








