import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import stirfry from './images/stirfry.js';
import spaghetti from './images/spaghetti.js'
import fajitas from './images/fajitas.js'
import bangers from './images/bangers.js'
import FoodCard from './Card'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">

          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 style={{ marginTop: '14px' }}>FOOD PLAN</h1>

          </div>
          <br />
          <p className="App-intro">
            Shopping lists. fast.
        </p>

        <FoodCard title='Stir Fry' picture={stirfry} />

        <FoodCard title='Spaghetti Bolognese' picture={spaghetti}/>

        <FoodCard title='Fajitas' picture={fajitas}/>

        <FoodCard title='Sausage & mash' picture={bangers}/>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
