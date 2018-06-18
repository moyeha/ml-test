import React, { Component } from 'react';
import SearchBox from './../../components/SearchBox'
import Breadcrumbs from './../../components/Breadcrumbs'
// import styles from './styles.scss'
import Header from './../../containers/Header'

export default class Details extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    const { match : { params }} = this.props
    fetch(`/api/items/${params.id}`)
      .then(res => res.json())
      .then((result) => this.setState(result));
      // .then(result => console.log('result', result));
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          {/* <Breadcrumbs data={this.state.categories}></Breadcrumbs> */}
        </div>
        {/* <div className="container">
        </div> */}
        <div className="container box">
          <div className="row">
            <div>
              <img src={this.state.picture}/>
              {this.state.pictures}
            </div>
          </div>
          {/* <div className="list-container">
            {this.state.items.map(item =>
              <Link to={`/items/${item.id}`}>
                <ListItem item={item} />
              </Link>
              )}
          </div>   */}
        </div>
      </div>
    )
  }
}
