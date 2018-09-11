import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OutletCard from '../component/Card'
import data from '../data/data.json'

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
        style={style.link}
        to={{
          pathname: `/outlet/${outlet.slug}`,
          state: outlet
        }}>
        <OutletCard
          key={outlet.id}
          outlet={outlet}
        />
      </Link>
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

const style = {
  link: {
    textDecoration: 'none',
    color: 'none'
  }
}

export default OutletsContainer;
