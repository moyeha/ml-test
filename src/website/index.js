import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import App from './containers/App'

const Index = () =>
  (<Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/pepe" render={() => <h1>Pepe</h1>}  />
    </div>
  </Router>)


ReactDOM.render(<Index />, document.getElementById("main-content"));