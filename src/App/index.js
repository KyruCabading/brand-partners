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
import Restricted from "./Restricted";

import logo from "../local/logo.png";

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 700,
    damping: 30
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: 1,
    scale: 1
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: 1,
    scale: bounce(1)
  }
};

const style = {
  actions: {
    button: {
      color: "white",
      position: "fixed"
    }
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logoOpacity: 1,
      outlets: [],
      packsSold: [],
      delayed: true
    };
  }

  componentWillReceiveProps() {
    this.previousView = this.props.location;
  }

  componentDidMount() {
    this.fetchData();
    this.timer = setTimeout(() => this.setState({ delayed: false }), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  fetchData = () => {
    fetch("https://api.sheety.co/f69fcf65-e2ef-4740-a6fd-bcc8a3133561")
      .then(response => response.json())
      .then(packsSold => this.setState({ packsSold }));

    fetch("https://api.sheety.co/627ab202-2874-49bc-acb6-36d44321d0ea")
      .then(response => response.json())
      .then(outlets => this.setState({ outlets }));
  };

  render() {
    const { outlets, packsSold, delayed } = this.state;
    const loading = delayed || outlets.length === 0 || packsSold.length === 0;
    const secret = new URLSearchParams(location.search).get("secret");
    const isSecretValid = window.atob(secret).trim() === "ilovebabyjana";

    if (!isSecretValid) {
      return <Restricted />;
    }

    return (
      <React.Fragment>
        <Route
          render={({ location }) => {
            return (
              <React.Fragment>
                <div
                  style={{
                    display:
                      location.pathname === "/" && !loading ? "block" : "none"
                  }}
                >
                  <Link to="/area">
                    <IconButton
                      className="chart-icon"
                      style={style.actions.button}
                      aria-label="Data"
                    >
                      <InsertChart />
                    </IconButton>
                  </Link>
                  <img className="logo" src={logo} alt="Winston Logo" />
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
                    render={props => {
                      if (loading) {
                        return <Splash />;
                      } else {
                        return (
                          <Outlets
                            outlets={this.state.outlets}
                            packsSold={this.state.packsSold}
                            secret={secret}
                          />
                        );
                      }
                    }}
                  />
                  <Route
                    exact
                    path={`/outlet/:outletId`}
                    render={props => (
                      <Details {...props} toggleLogo={this.toggleLogo} />
                    )}
                  />
                  <Route
                    exact
                    path={`/area`}
                    render={props => (
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
