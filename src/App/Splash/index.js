/*eslint no-restricted-globals: 0*/
import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center"
  }
});
const Splash = props => {
  const { classes } = props;
  let params = new URLSearchParams(location.search);
  return (
    <div className={classes.container}>
      <img
        style={{ height: 300 }}
        src="https://cdn.dribbble.com/users/1106178/screenshots/4175222/orb.gif"
      />
      <Typography variant="caption" className="animated fadeInStagger">
        Manus X Winston
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Splash);
