import React, { Component } from 'react';
import styles from './styles.scss'

export default class Breadcrumbs extends Component {
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
      <div className="Breadcrumbs">
        <span>Cat {JSON.stringify(this.props.data)}</span>
      </div>
    );
  }
}
