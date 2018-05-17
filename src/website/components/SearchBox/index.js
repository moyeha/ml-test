import React, { Component } from 'react';
import styles from './styles.scss'

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  // componentDidMount() {
  //   fetch('/api/getUsername')
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: user.username }));
  // }

  render() {
    return (
      <form method="type" action="/items">
        <div className="SearchBox col-12">
          <a href="#" className="search-logo">Logo</a>
          <input type="text" name="search" placeholder="Search"/>
        </div>
      </form>
    );
  }
}
