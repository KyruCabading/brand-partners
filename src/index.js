import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';
import Outlets from './Outlets'
import Details from './Details'
import registerServiceWorker from './registerServiceWorker';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(

  <BrowserRouter forceRefresh={!supportsHistory}>
    <Route render={({ location }) => {
      const { pathname } = location
      return (
        < TransitionGroup >
          < CSSTransition key={pathname} classNames="page" timeout={{ enter: 1000, exit: 1000 }} >
            <Route location={location} render={() => (
              <Switch location={location}>
                <Route exact path="/" component={Outlets} />
                <Route exact path={`/outlet/:outletId`} component={Details} />
              </Switch>
            )} />
          </CSSTransition>
        </TransitionGroup>
      )
    }} />
  </BrowserRouter >
  , document.getElementById('root'));
registerServiceWorker();
