import React from 'react'
import SwipeableViews from 'react-swipeable-views'

const ImageCarousel = props => {
  const { images } = props
  console.log(images)
  return (
    <SwipeableViews>
      {images.map(image => (
        <div key={image} style={style.container}>
          <img style={style.background} src={image} />
        </div>
      ))}
    </SwipeableViews>
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

export default ImageCarousel
