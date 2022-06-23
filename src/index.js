import React from "react";
import ReactDOM from "react-dom/client";
import Dropdown from "./lib/components/Dropdown";
import "./main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = [
  {
    name: "mango",
    key: "man",
  },
  {
    name: "banana",
    key: "ban",
  },
  {
    name: "apple",
    key: "app",
  },
  {
    name: "orange",
    key: "ora",
  },
];

const onChange = (value) => {
  return alert(value + " added to cart");
};

root.render(
  <React.StrictMode>
    <Dropdown
      options={options}
      defaultOption="Please select a fruit"
      onChange={onChange}
    ></Dropdown>
  </React.StrictMode>
);
