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
            <div className="picture col-2">
                <img src={this.props.item.picture} className="img-thumbnail border-0 rounded-4"/>
            </div>
            <div className="col-8">
            <div>Precio</div>
            <div>Descripcion</div>
            </div>
            <div className="col-2 location">{this.props.item.location}</div>
        </div>
    );
  }
}
