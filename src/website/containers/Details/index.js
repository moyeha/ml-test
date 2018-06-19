import React, { Component } from 'react';
import SearchBox from './../../components/SearchBox'
import Breadcrumbs from './../../components/Breadcrumbs'
import styles from './styles.scss'
import R from 'ramda'
import Header from './../../containers/Header'
import Button from './../../components/Button'

export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      price: {},
      description: '',
      path: null
    }
  }

  componentDidMount() {
    const { match : { params }} = this.props
    fetch(`/api/items/${params.id}`)
      .then(res => res.json())
      .then((result) => this.setState(result));
  }

  text2html(text) {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br/>')
  }

  getNewText(text) {
    return text === 'new' ? 'Nuevo' : 'Usado'
  }
  render() {
    if (!this.state.path) {
      return (
        <div>
          <Header/>
          <div className="container">
            <div>Loading...</div>
          </div>
        </div>
      )
    }
    return (
      <div className="product-detail">
        <Header/>
        <div className="container">
          <Breadcrumbs categories={this.state.path}></Breadcrumbs>
        </div>
        <div className="container box">
          <div className="row justify-content-md-center">
            <div className="col-8 product-detail-image">
              <img src={this.state.picture} width="680"/>
            </div>
            <div className="col-3 product-detail-description">
              <h7 className="condition">{ `${this.getNewText(this.state.condition)} - ${this.state.sold_quantity} vendidos` }</h7>
              <h5 className="title">{ `${this.state.title}` }</h5>
              <h3 className="amount">{ `$ ${this.state.price.amount}` }</h3>
              <Button label="Comprar" />
            </div>
          </div>
          <div className="product-detail-info">
            <div className="row">
              <h3 className="col-lg product-detail-info-title">Descripcion del producto</h3>
            </div>
            <div className="row">
              <div className="col-lg product-detail-info-text">
                <div dangerouslySetInnerHTML={{__html: this.text2html(this.state.description)}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
