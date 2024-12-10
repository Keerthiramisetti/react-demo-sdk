import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({
  options,  // Array of options [{ label, value }]
  selectedValue = "", // Single value for single select dropdown
  selectedValues = [], // Array of selected values for multi-select dropdown
  onChange,  // Callback for value change
  isMultiple = false,  // Flag to enable multiple selection
  placeholder = "Select...",  // Placeholder text
  searchable = false,  // Flag to enable search functionality
  disabled = false,  // Disable the dropdown
}) => {
  const [isOpen, setIsOpen] = useState(false);  // To control dropdown open/close state
  const [searchQuery, setSearchQuery] = useState('');  // To control the search query input

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  // Handle value change in single select mode
  const handleSelectSingle = (value) => {
    onChange(value);  // Call the onChange with the selected value
    setIsOpen(false);  // Close the dropdown after selection
  };

  // Handle value change in multiple select mode
  const handleSelectMultiple = (value) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)  // Deselect if already selected
      : [...selectedValues, value];  // Select if not already selected

    onChange(newSelectedValues);  // Call onChange with the updated selected values
  };

  // Filter options based on search query
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`dropdown ${disabled ? 'disabled' : ''}`}>

      {/* Dropdown Header */}
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>
          {isMultiple
            ? `${selectedValues.length} selected` // For multiple select
            : selectedValue || placeholder // For single select
          }
        </span>
        <span className="dropdown-arrow">&#9660;</span>
      </div>

      {/* Dropdown Body */}
      {isOpen && (
        <div className="dropdown-body">
          {/* Searchable dropdown input */}
          {searchable && (
            <input
              type="text"
              className="dropdown-search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}

          {/* Dropdown Options */}
          <div className="dropdown-options">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`dropdown-option ${isMultiple && selectedValues.includes(option.value) ? 'selected' : ''}`}
                onClick={() => {
                  isMultiple ? handleSelectMultiple(option.value) : handleSelectSingle(option.value);
                }}
              >
                {/* For multiple selection, show checkboxes */}
                {isMultiple && <input
                  type="checkbox"
                  checked={selectedValues.includes(option.value)}
                  readOnly
                />}
                <span>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
