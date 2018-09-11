import React from 'react'
import Card from './Card'
import Executions from './Executions'

const Details = props => {
  const {
    state
  } = props.location

  const outlet = state
  return (
    <div style={style.container}>
      <Card outlet={outlet} />
      <div style={style.section}>
        <h3>About the Outlet</h3>
        <p>{outlet.about}</p>
      </div>
      <Executions outlet={outlet} />
    </div>
  )
}

const style = {
  container: {
    height: '100vh',
    background: 'rgba(5,5,5)',
    color: 'rgba(255,255,255, 0.9)'
  },

  section: {
    position: "relative",
    display: "block",
    textAlign: "left",
    margin: '6vw 4vw 6vw 4vw',
    fontSize: '70%',
    letterSpacing: 0.5,
    fontWeight: 100
  },

  close: {
    color: 'white'
  }
}

export default Details