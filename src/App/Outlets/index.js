import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ParallaxImage from '../ParallaxImage'

import { Typography } from '@material-ui/core'

import data from '../../local/outlets.json'

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
        <React.Fragment>
          {this.renderOutlets(data.outlets)}
          <Typography variant="caption" className="gov-warning">
            <div>.</div>
            Government Warning:
            <div>Cigarette Smoking is dangerous to your health.</div>
            <div>.</div>
          </Typography>
        </React.Fragment>
      )
    }
    return null
  }
}

export default OutletsContainer;
