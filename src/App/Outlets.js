import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ParallaxImage from './ParallaxImage'

import data from '../local/outlets.json'
import logo from '../local/logo.png'

class OutletsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.fetchData().then(data => this.setState({ data }))
  }

  fetchData = () => {
    // Fetch Data from backend
    return new Promise((resolve) => {
      resolve(data)
    })
  }

  renderOutlets = outlets => {
    return outlets.map(outlet =>
      <Link
        key={outlet.id}
        style={style.link}
        to={{
          pathname: `/outlet/${outlet.slug}`,
          state: {
            outlet
          }
        }}
      >
        <ParallaxImage
          key={outlet.id}
          outlet={outlet}
        />
      </Link>
    )
  }

  render() {
    const { data } = this.state
    if (data) {
      return (
        <div style={style.wrapper}>
          <div style={style.header}>
            <img src={logo} style={style.logo} alt="Winston Logo"></img>
          </div>
          {this.renderOutlets(data.outlets)}
        </div>
      )
    }
    return null
  }
}

const style = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left'
  },

  header: {
    position: 'sticky',
    margin: '4vw',
    zIndex: 1
  },

  logo: {
    width: '30%'
  },

  link: {
    textDecoration: 'none',
    color: 'none'
  }
}

export default OutletsContainer;
