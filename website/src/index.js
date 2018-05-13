import React from "react";
import ReactDOM from "react-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const Index = () => {
  return <div className="main-content">Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));