import React, { Component } from 'react';
import SearchBox from './../../components/SearchBox'
import styles from './styles.scss'
import logoMl from './../../images/Logo_ML.png'
import logoMl2x from './../../images/Logo_ML@2x.png'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-1 ml-logo-container">
              <a href="#">
                <picture>
                  <source media="(min-device-pixel-ratio: 1)" srcset={logoMl}/>
                  <source media="(min-device-pixel-ratio: 2)" srcset={logoMl2x}/>
                  <img src={logoMl} alt="Ejemplo" height="34"/>
                </picture>
              </a>
            </div>
            <div className="col-9 ml-search-box-container">
              <SearchBox/>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
