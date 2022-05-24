import { useState } from "react";

function Dropdown({ options, defaultOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
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
              <li onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
