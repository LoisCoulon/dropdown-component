import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "./lib/components/Dropdown";
import "./main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = ["Mangoes", "Apples", "Oranges"];

root.render(
  <React.StrictMode>
    <Dropdown
      options={options}
      defaultOption="Veuillez choisir un fruit"
    ></Dropdown>
  </React.StrictMode>
);
