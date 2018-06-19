import React, { Component } from 'react';
import styles from './styles.scss'
import { Link } from 'react-router-dom'
import shippingIcon from './../../images/ic_shipping.png'
import shippingIcon2x from './../../images/ic_shipping@2x.png'

export default class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = { item: {} };
  }

  freeShippingButton () {
    let button = ''
    if(this.props.item.free_shipping) {
        button = 
        <button className="free-shipping-button">
            <picture>
                <source media="(min-device-pixel-ratio: 1)" srcset={shippingIcon}/>
                <source media="(min-device-pixel-ratio: 2)" srcset={shippingIcon}/>
                <img src={shippingIcon} width="18" height="18"/>
            </picture>    
        </button>
    }
    return button
  }

  render() {
    return (
        <div className="ListItem row">
            <div className="col-2">
            <Link to={`/items/${this.props.item.id}`}>
                <picture className="thumb">
                    <source media="(min-device-pixel-ratio: 1)" srcset={this.props.item.picture}/>
                    <source media="(min-device-pixel-ratio: 2)" srcset={this.props.item.picture}/>
                    <img src={this.props.item.picture} width="180px" height="180px" className="img-thumbnail border-0 rounded-4"/>
                </picture>
            </Link>                
            </div>
            <div className="col-8 item-detail-container">
                <div className="price-container">
                    <span className="amount">$ {this.props.item.price.amount}</span>
                    {this.freeShippingButton()}
                </div>
                <div className="item-title">{this.props.item.title}</div>
            </div>
            <div className="col-2 location">{this.props.item.location}</div>
        </div>
    );
  }
}
