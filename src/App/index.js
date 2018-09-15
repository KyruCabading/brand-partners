import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { spring, AnimatedSwitch } from 'react-router-transition'
import './style.css';
import Outlets from './Outlets'
import Details from './OutletDetails'


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
  componentWillReceiveProps() {
    this.previousView = this.props.location
  }


  render() {
    return (
      <React.Fragment>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Outlets} />
          <Route exact path={`/outlet/:outletId`} component={Details} />
          <Route render={() => <div>Not Found</div>} />
        </AnimatedSwitch>
      </React.Fragment>
    )
  }
}

export default App
