"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

require("../main.scss");

function Dropdown(_ref) {
  var options = _ref.options,
      defaultOption = _ref.defaultOption,
      onChange = _ref.onChange;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      selectedOption = _useState4[0],
      setSelectedOption = _useState4[1];
  /**
   * Open and close the dropdown element
   */


  var toggling = function toggling() {
    return setIsOpen(!isOpen);
  };
  /**
   * Copy the option clicked in the dropdown header, call the custom onChange function and close the dropdown body
   * @param {string} value - The option clicked
   * @returns
   */


  var onOptionClicked = function onOptionClicked(value) {
    return function () {
      setSelectedOption(value);
      onChange(value);
      setIsOpen(false);
    };
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown--header",
    onClick: toggling
  }, selectedOption || defaultOption), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown--select"
  }, /*#__PURE__*/_react.default.createElement("ul", null, options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement("li", {
      onClick: onOptionClicked(option.name),
      key: option.key
    }, option.name);
  }))));
}

var _default = Dropdown;
exports.default = _default;