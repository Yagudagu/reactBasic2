import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//import smoothScrollPolyfill from "smoothscroll-polyfill";
import App from "./App";

//smoothScrollPolyfill.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
