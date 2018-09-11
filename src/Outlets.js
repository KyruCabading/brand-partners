import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OutletCard from './Card'
import data from './data/data.json'

class OutletsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      mounted: false
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
            prev: true,
            outlet
          }
        }}
        onClick={() => this.setState({ mounted: false }, console.log(this.state.mounted))}>
        <OutletCard
          key={outlet.id}
          outlet={outlet}
        />
      </Link>
    )
  }

  render() {
    window.onscroll = () => {
      if (this.state.mounted === false) {
        return null
      }
      console.log("scrolling")
    }
    const { data } = this.state
    if (data) {
      return (
        <React.Fragment>
          {this.renderOutlets(data.outlets)}
        </React.Fragment>
      )
    }
    return null
  }
}

const style = {
  link: {
    textDecoration: 'none',
    color: 'none'
  }
}

export default OutletsContainer;
