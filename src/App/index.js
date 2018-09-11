import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import Outlets from '../Outlets'
import Details from '../Details'

class App extends Component {
  componentWillReceiveProps() {
    this.previousView = this.props.location
  }

  render() {
    const { location } = this.props;
    const modal = location.state && location.state.to === 'modal';

    return (
      <Switch location={modal ? this.previousView : location}>
        <Route exact path="/" component={Outlets} />
        <Route exact path={`/outlet/:outletId`} component={Details} />
      </Switch>
    )
  }
}

export default App
