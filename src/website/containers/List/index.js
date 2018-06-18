import React, { Component } from 'react';
import Header from './../../containers/Header'
import Breadcrumbs from './../../components/Breadcrumbs'
import ListItem from './../../components/ListItem'
import styles from './styles.scss'
import { Link } from 'react-router-dom'
import Details from '../Details/'

export default class List extends Component {

  constructor() {
    super()
    this.state = {
      items: [],
      categories: []
    }
  }

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search); 
    fetch(`/api/items?q=${params.get('search')}`)
      .then(res => res.json())
      .then(({items, categories}) => this.setState({items, categories}));
  }

  render() {
    return (
      <div>
        <Header>
        </Header>
        <div className="container">
          <Breadcrumbs data={this.state.categories}></Breadcrumbs>
        </div>
        <div className={styles.container + ' container box'}>
          <div className="list-container">
            {this.state.items.map(item =>
              <Link to={`/items/${item.id}`}>
                <ListItem item={item} />
              </Link>
              )}
          </div>  
        </div>
      </div>  
      )
  }
}
