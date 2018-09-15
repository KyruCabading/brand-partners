import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { TransitionGroup, CSSTransition } from "react-transition-group"

import './style.css';
import Outlets from './Outlets'
import Details from './OutletDetails'

const browserHistory = createBrowserHistory()

class App extends Component {
  componentWillReceiveProps() {
    this.previousView = this.props.location
  }

  render() {
    browserHistory.listen((location, action) => {
      window.scrollTo(0, 0);
    });

    return (
      <Router history={browserHistory}>
        <Route render={({ location }) => (
          <div styles={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }}>
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames='fade'
              >
                <Switch
                  location={location}
                >
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/outlet" />}
                  />
                  <Route exact path="/outlet" component={Outlets} />
                  <Route exact path={`/outlet/:outletId`} component={Details} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )} />
      </Router>
    )
  }
}

export default App
