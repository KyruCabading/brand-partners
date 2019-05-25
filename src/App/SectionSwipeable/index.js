import React from "react";
import { Typography } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";

const style = {
  section: {
    position: "relative",
    display: "block",
    textAlign: "left",
    margin: "4vh 4vw",
    fontSize: "70%",
    letterSpacing: 0.5,
    fontWeight: 100,
    opacity: "0.9"
  }
};

export default props => {
  const { content } = props;
  const contentArray = content.split(",");
  return (
    <SwipeableViews enableMouseEvents>
      {contentArray.map(content => (
        <div style={style.section}>
          <Typography>{props.content}</Typography>
          {props.children}
        </div>
      ))}
    </SwipeableViews>
  );
};
