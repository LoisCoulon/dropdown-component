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
];

root.render(
  <React.StrictMode>
    <Dropdown
      options={options}
      defaultOption="Veuillez choisir un fruit"
      onChange={""}
    ></Dropdown>
  </React.StrictMode>
);
