import React, { Component } from 'react';
import styles from './styles.scss'

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }

  render() {
    return (
        <button type="button" className="buy">
            { this.props.label }
        </button>
    );
  }
}
