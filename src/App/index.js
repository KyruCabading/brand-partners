/*eslint no-restricted-globals: 0*/
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core/";
import InsertChart from "@material-ui/icons/InsertChart";
import { Route } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";
import "./style.css";

import Outlets from "./Outlets";
import Details from "./OutletDetails";
import AreaDetails from "./AreaDetails";
import Splash from "./Splash";
// import Restricted from "./Restricted";

import outlets from "../data/outlets";
import packsSold from "../local/area-packsSold.json";

import logo from "../local/logo.png";

const LOADING_TIME = 5000; // 5s
// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 700,
    damping: 30,
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: 1,
    scale: 1,
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: 1,
    scale: bounce(1),
  },
};

const style = {
  actions: {
    button: {
      color: "white",
      position: "fixed",
    },
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoOpacity: 1,
      delayed: true,
    };
  }

  componentWillReceiveProps() {
    this.previousView = this.props.location;
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.setState({ delayed: false }), 5000); // Give time to show loading
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { delayed } = this.state;
    const loading = delayed || outlets.length === 0 || packsSold.length === 0;
    const secret = new URLSearchParams(location.search).get("secret");
    // const isSecretValid = window.atob(secret).trim() === "ilovebabyjanareborn";

    // if (!isSecretValid) {
    //   return <Restricted />;
    // }

    return (
      <React.Fragment>
        <Route
          render={({ location }) => {
            return (
              <React.Fragment>
                <div
                  style={{
                    display:
                      location.pathname === "/" && !loading ? "block" : "none",
                  }}
                >
                  <Link to="/area?secret=aWxvdmViYWJ5amFuYQo">
                    <IconButton
                      className="chart-icon"
                      style={style.actions.button}
                      aria-label="Data"
                    >
                      <InsertChart />
                    </IconButton>
                  </Link>
                  <img className="logo" src={logo} alt="Logo" />
                </div>
                <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className="switch-wrapper"
                >
                  <Route
                    exact
                    path="/"
                    render={(props) => {
                      return (
                        <React.Fragment>
                          {loading ? <Splash /> : null}
                          <div style={loading ? { display: "none" } : null}>
                            <Outlets
                              outlets={outlets}
                              packsSold={packsSold}
                              secret={secret}
                            />
                          </div>
                        </React.Fragment>
                      );
                    }}
                  />
                  <Route
                    exact
                    path={`/outlet/:outletId`}
                    render={(props) => (
                      <Details {...props} toggleLogo={this.toggleLogo} />
                    )}
                  />
                  <Route
                    exact
                    path={`/area`}
                    render={(props) => (
                      <AreaDetails {...props} toggleLogo={this.toggleLogo} />
                    )}
                  />
                  <Route render={() => <div>Not Found</div>} />
                </AnimatedSwitch>
              </React.Fragment>
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default App;
