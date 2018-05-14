import React from "react";
import ReactDOM from "react-dom";
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import App from './containers/App'

const Index = () => {
  return <div>
          <App/>
        </div>;
};

ReactDOM.render(<Index />, document.getElementById("main-content"));