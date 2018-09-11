import React, { Fragment } from 'react'
import Card from './Card'
import Executions from './Executions'

const Details = props => {
  const {
    state
  } = props.location

  const outlet = state
  return (
    <React.Fragment>
      <Card outlet={outlet} />
      <div style={style.section}>
        <h3>About the Outlet</h3>
        <p>{outlet.about}</p>
      </div>
      <Executions outlet={outlet} />
    </React.Fragment>
  )
}

const style = {
  section: {
    position: "relative",
    display: "block",
    textAlign: "left",
    margin: '6vw 4vw 6vw 4vw',
    fontSize: '70%',
    letterSpacing: 0.5,
    fontWeight: 100,
    color: 'rgba(255,255,255, 0.85)'
  },

  close: {
    color: 'white'
  }
}

export default Details