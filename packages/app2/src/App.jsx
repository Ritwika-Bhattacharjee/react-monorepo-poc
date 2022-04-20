import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App2Component from "./components/App2Component"

const App = () => (
  <div>
    <App2Component></App2Component>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
