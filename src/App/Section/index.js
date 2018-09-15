import React from 'react'
import { Typography } from '@material-ui/core'

const style = {
  section: {
    position: "relative",
    display: "block",
    textAlign: "left",
    margin: '6vw 4vw 6vw 4vw',
    fontSize: '70%',
    letterSpacing: 0.5,
    fontWeight: 100,
    opacity: '0.8'
  }
}

export default props => {
  return (
    <div style={style.section}>
      <Typography variant="body2">{props.title}</Typography>
      {props.children}
    </div>
  )
}