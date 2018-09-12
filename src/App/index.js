import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import Outlets from './Outlets'
import Details from './OutletDetails'

class App extends Component {
  componentWillReceiveProps() {
    this.previousView = this.props.location
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Outlets} />
        <Route exact path={`/outlet/:outletId`} component={Details} />
      </Switch>
    )
  }
}

export default App
