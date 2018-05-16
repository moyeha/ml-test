import React, { Component } from 'react';
import styles from './styles.scss'

export default class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }

  render() {
      console.log('lalala', this.state.item)
    return (
      <div className="ListItem">
        <img src={this.props.item.picture}/>
      </div>
    );
  }
}
