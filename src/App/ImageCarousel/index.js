import React from "react";
import SwipeableViews from "react-swipeable-views";

const ImageCarousel = props => {
  const { images } = props;
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
  );
};

const style = {
  container: {
    height: "250px",
    overflowY: "hidden"
  },

  background: {
    width: "100%"
  }
};

export default ImageCarousel;
