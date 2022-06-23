import React, { useState } from "react";
import "../main.scss";
import PropTypes from "prop-types";

function Dropdown({ options, defaultOption, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  /**
   * Open and close the dropdown element
   */
  const toggling = () => setIsOpen(!isOpen);

  /**
   * Copy the option clicked in the dropdown header, call the custom onChange function and close the dropdown body
   * @param {string} value - The option clicked
   * @returns
   */
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown--header" onClick={toggling}>
        {selectedOption || defaultOption}
      </div>
      {isOpen && (
        <div className="dropdown--select">
          <ul>
            {options.map((option) => (
              <li onClick={onOptionClicked(option.name)} key={option.key}>
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func,
};

export default Dropdown;
