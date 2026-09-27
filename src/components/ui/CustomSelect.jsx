import React, { useState, useRef, useEffect } from 'react';
import './CustomSelect.css';

const CustomSelect = ({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (optionValue) => {
    // Simulate a change event object for the parent's handleChange
    const simulatedEvent = {
      target: {
        name: name,
        value: optionValue
      }
    };
    onChange(simulatedEvent);
    setIsOpen(false);
  };

  const selectedLabel = value
    ? options.find(opt => opt.value === value)?.label || value
    : placeholder;

  return (
    <div className={`custom-select-container ${className}`} ref={selectRef}>
      {/* Hidden native input for form submission/validation if needed, though parent handles state */}
      <input
        type="hidden"
        id={id}
        name={name}
        value={value}
        required={required}
      />

      <div
        className={`custom-select-trigger ${!value ? 'placeholder-selected' : ''} ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <span>{selectedLabel}</span>
        <div className={`custom-select-arrow ${isOpen ? 'open' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20px" height="20px">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>
      </div>

      {isOpen && (
        <ul className="custom-select-options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`custom-select-option ${value === option.value ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;