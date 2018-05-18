import React, { Component } from 'react';
import styles from './styles.scss'

export default class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: null };
  }

  render() {
    return (
      <div className="Breadcrumbs">
        <span>{this.props.data.map(item => <span>{item.name} > </span>)}</span>
      </div>
    );
  }
}
