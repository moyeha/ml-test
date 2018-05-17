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
      <div className="ListItem row">
        <img width="180" height="180" src={this.props.item.picture}/>
        <div>
          <div>Precio</div>
          <div>Descripcion</div>
        </div>
      </div>
    );
  }
}
