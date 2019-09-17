import * as React from "react";
import ReactDOM from "react-dom";

// append an element to body
export function addToGlobal(type, props) {
  let fragment = document.createElement("div");
  const body = document.body;
  const toast = React.createElement(type, props);
  ReactDOM.render(toast, fragment);
  body.appendChild(fragment);
  return fragment;
}
