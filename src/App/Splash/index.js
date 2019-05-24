/*eslint no-restricted-globals: 0*/
import React from "react";
import { withStyles } from "@material-ui/core";
import { FingerprintSpinner } from "react-epic-spinners";

const styles = theme => ({
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center"
  }
});
const Splash = props => {
  const { classes } = props;
  let params = new URLSearchParams(location.search);
  console.log(params.get("name"));
  return (
    <div className={classes.container}>
      <FingerprintSpinner className="animated fadeIn" />
    </div>
  );
};

export default withStyles(styles)(Splash);
