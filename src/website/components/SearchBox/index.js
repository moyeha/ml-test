import React, { Component } from 'react';
import styles from './styles.scss'
import searchBtn from './../../images/ic_Search.png'
import searchBtn2x from './../../images/ic_Search@2x.png'

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form method="type" action="/items">
        <div className="SearchBox col-12">
          <input type="text" name="search" placeholder="Search"/>
          <button className="ml-btn-search">
            <picture>
              <source media="(min-device-pixel-ratio: 1)" srcset={searchBtn}/>
              <source media="(min-device-pixel-ratio: 2)" srcset={searchBtn2x}/>
              <img src={searchBtn2x}/>
            </picture>
          </button>  
        </div>
      </form>
    );
  }
}
