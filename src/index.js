import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';
import Outlets from './Outlets'
import Details from './Details'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Outlets} />
      <Route exact path={`/outlet/:outletId`} component={Details} />
    </Switch>
  </BrowserRouter >
  , document.getElementById('root'));
registerServiceWorker();
