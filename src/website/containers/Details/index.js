import React, { Component } from 'react';
import SearchBox from './../../components/SearchBox'
// import styles from './styles.scss'
import Header from './../../containers/Header'

export default class Details extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    console.log('pepepe')
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
        </div>
      </div>
    )
  }
}
