import React, { Component } from 'react'
import data from '../data/data.json'
import { Link } from 'react-router-dom'
import OutletCard from '../component/Card'

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
      <Link to={{
        pathname: `/outlet/${outlet.id}`,
        state: outlet
      }}>
        <OutletCard
          key={outlet.id}
          outlet={outlet}
        />
      </Link >
    )
  }

  render() {
    const { data } = this.state
    if (data) {
      return this.renderOutlets(data.outlets)
    }
    return null
  }
}

export default OutletsContainer;
