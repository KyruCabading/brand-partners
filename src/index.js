import React from 'react';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: "rgba(50,50,50)",
      default: "rgba(50, 50, 50)"
    },
  }
})

ReactDOM.render(
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Router >
  , document.getElementById('root'));
registerServiceWorker();
