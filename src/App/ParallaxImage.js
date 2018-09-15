import React from 'react'
import { Link } from 'react-router-dom'
import { CardMedia, Typography, CardActions, IconButton, CardActionArea } from '@material-ui/core/'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'

import { Parallax, Background } from 'react-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const ParallaxImage = props => {
  const { outlet, goBack } = props
  return (
    <Parallax style={style.container} strength={100}>
      <CardActions style={style.cardActions} disableActionSpacing>
        {goBack &&
          <IconButton
            style={style.actions.button}
            aria-label="Back"
            onClick={() => goBack()}
          >
            <ArrowBackIos />
          </IconButton>}
      </CardActions>
      <div style={style.card}>
        <div style={style.header}>
          <Typography variant="title" >{outlet.name}</Typography>
          <Typography variant="caption" style={style.subtitle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {outlet.location}
          </Typography>
        </div>
      </div>
      <Background >
        <CardMedia
          component="img"
          style={style.background}
          src={outlet.image}
          title={outlet.name}
        >
        </CardMedia>
      </Background>
    </Parallax>
  )
}

const style = {
  cardActions: {
    display: "flex",
  },

  actions: {
    button: {
      color: 'white',
      width: 60,
      height: 60,
    }
  },

  container: {
    width: "100vw"
  },

  card: {
    height: "55vw",
    background: 'linear-gradient(to top, rgba(5,5,5,1), rgba(0,0,0,0))'
  },
  header: {
    position: "relative",
    display: "block",
    textAlign: "left",
    top: "70%",
    margin: '0 4vw 0 4vw',
    opacity: '0.9'
  },

  subtitle: {
    marginTop: 5,
    color: 'rgb(100,100,100,0.8)',
  },
  background: {
    width: "130vw"
  }
}

export default ParallaxImage