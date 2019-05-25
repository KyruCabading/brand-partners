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
    justifyContent: "center",
    color: "white",
    padding: "20px"
  }
});

const Restricted = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <Typography variant="title" align="center">
        Sorry, you cannot access this page.
      </Typography>
      <Typography variant="title" align="center">
        Please scan your QR code for access.
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Restricted);
