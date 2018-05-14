import React, { Component } from 'react';
import Header from './../../containers/Header'
import Content from './../../containers/Content'
import styles from './styles.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header>
        </Header>
        <Content>
        </Content> 
        </div>  
      )
  }
}
