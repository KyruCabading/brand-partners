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
  const getNameString = () => {
    if (params.get("name")) {
      return `, ${params.get("name")}.`;
    } else {
      return "";
    }
  };
  return (
    <div className={classes.container}>
      <img
        className="animated fadeIn"
        style={{ width: 250 }}
        src={require("./smoke-loading.gif")}
      />
      <Typography variant="caption" className="animated fadeInStagger">
        {`Welcome` + getNameString()}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Splash);
