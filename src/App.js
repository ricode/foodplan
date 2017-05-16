import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Dashboard from './Dashboard';
import NewMeal from './NewMeal';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path='/' component={Dashboard} />
            <Route path='/new' component={NewMeal} />
          </div>
        </Router>
        </MuiThemeProvider>
        );
  }
}

export default App;
