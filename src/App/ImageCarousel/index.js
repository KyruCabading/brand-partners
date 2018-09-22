import React from 'react'
import SwipeableViews from 'react-swipeable-views'

const ImageCarousel = props => {
  const { images } = props
  console.log(images)
  return (
    <div className="swipeable">
      <SwipeableViews>
        {images.map(image => (
          <div key={image} style={style.container}>
            <img style={style.background} src={image} />
          </div>
        ))}
      </SwipeableViews>
    </div>
  )
}

const style = {
  container: {
    height: "50vw",
    overflowY: 'hidden'
  },

  background: {
    width: "100%"
  }
}

export default ImageCarousel
