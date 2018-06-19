import React, { Component } from 'react';
import Header from './../../containers/Header'
import Breadcrumbs from './../../components/Breadcrumbs'
import ListItem from './../../components/ListItem'
import styles from './styles.scss'
// import { Link } from 'react-router-dom'
import Details from '../Details/'

export default class List extends Component {

  constructor() {
    super()
    this.state = {
      items: [],
      path: null
    }
  }

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search); 
    fetch(`/api/items?q=${params.get('search')}`)
      .then(res => res.json())
      .then(({items, path}) => this.setState({items, path}));
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
      <div>
        <Header/>
        <div className="container">
          <Breadcrumbs categories={this.state.path}></Breadcrumbs>
        </div>
        <div className={styles.container + ' container'}>
          <div className="list-container">
            {
              this.state.items
                .map(item =>
                  <ListItem item={item} />
                )
            }
          </div>  
        </div>
      </div>  
      )
  }
}
