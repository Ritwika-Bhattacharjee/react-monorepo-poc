import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

//Remote Imports
import App1Component from "app1/App1Component";
import App2Component from "app2/App2Component";

const App = () => (
  <div>
    <h1 style={{backgroundColor:"lightyellow", padding:"20px", textAlign:"center"}}>Welcome To Home Page</h1>
    <App1Component></App1Component>
    <App2Component></App2Component>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
