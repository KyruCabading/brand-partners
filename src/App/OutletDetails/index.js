import React from 'react'
import Card from '@material-ui/core/Card'
import { Link } from 'react-router-dom';
import ParallaxImage from '../ParallaxImage'
import Executions from '../Executions'
import { Typography } from '@material-ui/core'

const style = {
  card: {
    backgroundColor: "rgba(5,5,5)"
  },

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

export default ({
  location
}) => {
  const { outlet } = location.state
  return (
    <Card style={style.card}>
      <ParallaxImage outlet={outlet} goBack={true} />
      <div style={style.section}>
        <Typography variant="body2">About the Outlet</Typography>
        <Typography variant="body1">{outlet.about}</Typography>
        <Typography variant="body1">{outlet.about}</Typography>
        <Typography variant="body1">{outlet.about}</Typography>
      </div>
      <div>
        <Executions outlet={outlet} />
      </div>
    </Card>
  )
}

