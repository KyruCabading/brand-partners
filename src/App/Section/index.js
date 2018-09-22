import React from 'react'
import { Typography } from '@material-ui/core'

const style = {
  heading: {
    fontSize: '15px'
  },
  section: {
    position: "relative",
    display: "block",
    textAlign: "left",
    margin: '6vw 4vw',
    fontSize: '70%',
    letterSpacing: 0.5,
    fontWeight: 100,
    opacity: '0.9'
  }
}

export default props => {
  return (
    <div style={style.section}>
      <Typography style={style.heading} variant="title">{props.title}</Typography>
      <Typography>{props.content}</Typography>
      {props.children}
    </div>
  )
}