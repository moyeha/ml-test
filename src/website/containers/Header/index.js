import React, { Component } from 'react';
import SearchBox from './../../components/SearchBox'
import styles from './styles.scss'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <SearchBox/>
          </div>
        </div>
      </header>
    )
  }
}
