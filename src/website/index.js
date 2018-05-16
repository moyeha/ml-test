import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Home from './containers/Home'
import List from './containers/List'

const Index = () =>
  (<Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/items" component={List}  />
    </div>
  </Router>)


ReactDOM.render(<Index />, document.getElementById("main-content"));