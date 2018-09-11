import React from 'react'
import SwipeableViews from 'react-swipeable-views'

const Executions = props => {
  const { outlet } = props
  return (
    <div>
      <h1 style={style.header}>Executions</h1>
      <SwipeableViews>
        <div style={style.container}>
          <img style={style.background} src={outlet.image} alt={outlet.name} />
        </div>
        <div style={style.container}>
          <img style={style.background} src={outlet.image} alt={outlet.name} />
        </div>
      </SwipeableViews>
    </div>
  )
}

const style = {
  header: {
    position: "relative",
    display: "block",
    textAlign: "left",
    top: "5%",
    margin: '0 4vw 2vw 4vw',
    fontSize: "3vw"
  },
  title: {
    padding: 0,
    color: "rgb(255,255,255,0.85)",

  },
  subtitle: {
    margin: 0,
    padding: 0,
    color: 'rgb(100,100,100,0.8)',
    fontSize: "4vw"
  },

  container: {
    height: 200,
    overflowY: 'hidden'
  },

  background: {
    width: "100%"
  }
}

export default Executions