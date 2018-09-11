import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Outlets from './container/Outlets'
import Details from './component/Details'
import './App.css'
import { CSSTransitionGroup } from 'react-transition-group'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Outlets} />
        <Route exact path={`/outlet/:outletId`} component={Details} />
      </div>
    );
  }
}


export default App;
