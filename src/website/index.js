import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import bootstrap from 'bootstrap/scss/bootstrap.scss';
import Home from './containers/Home'
import List from './containers/List'
import Details from './containers/Details'
import styles from './styles/styles.scss'

const Index = () =>
  (<Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/items/:id" component={Details} />
          <Route path="/items" component={List}  />
          <Route component={Details} />
        </Switch>
      </div>
  </Router>)


ReactDOM.render(<Index />, document.getElementById("main-content"));