import React from 'react'
import { Parallax, Background } from 'react-parallax'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Card = props => {
  const { outlet } = props
  return (
    <Parallax strength={150}>
      <div style={style.card}>
        <div style={style.header}>
          <h1 style={style.title}>{outlet.name}</h1>
          <p style={style.subtitle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {outlet.location}
          </p>
        </div>
      </div>
      <Background >
        <div>
          <img style={style.background} src={outlet.image} alt={outlet.name} />
        </div>
      </Background>
    </Parallax>
  )
}

const style = {
  card: {
    height: "55vw",
    background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
  },
  header: {
    position: "relative",
    display: "block",
    textAlign: "left",
    top: "70%",
    margin: '0 4vw 0 4vw'
  },
  title: {
    margin: 0,
    padding: 0,
    color: "rgb(255,255,255,0.85)",
    fontSize: "5vw"
  },
  subtitle: {
    marginTop: 5,
    color: 'rgb(100,100,100,0.8)',
    fontSize: "3vw"
  },
  background: {
    width: "140vw"
  }
}

export default Card