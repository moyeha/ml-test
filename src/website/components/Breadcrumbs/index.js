import React, { Component } from 'react';
import styles from './styles.scss'

export default class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Breadcrumbs">
        {this.props.categories.map(item => <span>{item} > </span>)}
      </div>
    );
  }
}
