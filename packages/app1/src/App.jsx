import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App1Component from "./components/App1Component";

const App = () => (
  <div>
    <App1Component></App1Component>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
