/*eslint no-restricted-globals: 0*/
import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import Particles from "react-particles-js";

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
      <Particles
        height={300}
        params={{
          fps_limit: 28,
          particles: {
            number: {
              value: 200,
              density: {
                enable: false
              }
            },
            line_linked: {
              enable: true,
              distance: 30,
              opacity: 0.4
            },
            move: {
              speed: 1
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 2,
                sync: false
              },
              value: 0.4
            }
          },
          polygon: {
            enable: true,
            scale: 0.5,
            type: "inline",
            move: {
              radius: 10
            },
            url: "https://image.flaticon.com/icons/svg/32/32425.svg",
            inline: {
              arrangement: "equidistant"
            },
            draw: {
              enable: true,
              stroke: {
                color: "rgba(255, 255, 255, .2)"
              }
            }
          },
          retina_detect: false,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              }
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40
              }
            }
          }
        }}
        className="animated fadeIn"
      />
      <Typography variant="caption" className="animated fadeInStagger">
        Manus X Winston
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Splash);
