import React from "react";
import { Typography } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";

const style = {
  root: {
    padding: "4vh 20px"
  },
  slideContainer: {
    padding: "0 10px"
  },
  section: {
    position: "relative",
    display: "block",
    textAlign: "left",
    // margin: "4vh 4vw",
    fontSize: "70%",
    letterSpacing: 0.5,
    fontWeight: 100,
    opacity: "0.9"
  }
};

export default props => {
  const { content } = props;
  const contentArray = content.split(",");
  console.log(contentArray);
  return (
    <SwipeableViews
      style={style.root}
      slideStyle={style.slideContainer}
      enableMouseEvents
    >
      {contentArray.map((content, index) => {
        return (
          <div key={index} style={style.section}>
            <Typography>{content.trim()}</Typography>
            {props.children}
          </div>
        );
      })}
    </SwipeableViews>
  );
};
