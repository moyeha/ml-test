import React, { Component } from 'react';
import Header from './../../containers/Header'
import Breadcrumbs from './../../components/Breadcrumbs'
import ListItem from './../../components/ListItem'
import styles from './styles.scss'

export default class List extends Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search); 
    console.log('params', params.get('search'))
    fetch('/api/items?q=iphone')
      .then(res => res.json())
      .then(({items}) => this.setState({items}));
  }

  render() {
    return (
      <div>
        <Header>
        </Header>
        <div className="container">
          <div className="row">
            <Breadcrumbs data={['pepe', 'wfwefw']}></Breadcrumbs>
          </div>
          <div>{this.state.items.map(item => <ListItem item={item} />)}</div>
        </div>
      </div>  
      )
  }
}
