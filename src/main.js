import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(Root),
    document.getElementById("mount")
  );
});
