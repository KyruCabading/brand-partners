import React, { Component } from 'react';
import { Typography } from '@material-ui/core/'
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'

import './style.css';

import Outlets from './Outlets'
import Details from './OutletDetails'

import logo from '../local/logo.png'


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
    stiffness: 530,
    damping: 25,
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
    opacity: 0,
    scale: bounce(0.2),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      logoOpacity: 1
    }
  }

  componentWillReceiveProps() {
    this.previousView = this.props.location
  }

  render() {
    return (
      <React.Fragment>
        <Route render={({ location }) => {
          return (
            <React.Fragment>
              <div
                style={{
                  display: location.pathname === '/' ? 'block' : 'none',
                }}>
                <Typography variant="title" className="chart-icon">
                  <FontAwesomeIcon icon={faChartBar} />
                </Typography>
                <img
                  className="logo"
                  src={logo}
                  alt="Winston Logo"></img>
              </div>
              <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="switch-wrapper"
              >
                <Route exact path="/" component={Outlets} />
                <Route exact path={`/outlet/:outletId`} render={(props) => (
                  <Details {...props} toggleLogo={this.toggleLogo} />
                )} />
                <Route render={() => <div>Not Found</div>} />
              </AnimatedSwitch>
            </React.Fragment>
          )
        }} />
      </React.Fragment>
    )
  }
}

export default App
