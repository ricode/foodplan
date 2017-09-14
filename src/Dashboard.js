import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import stirfry from './images/stirfry.js';
import spaghetti from './images/spaghetti.js'
import fajitas from './images/fajitas.js'
import bangers from './images/bangers.js'
import FoodCard from './Card'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Photo from 'material-ui/svg-icons/image/photo';
import FoodMenu from 'material-ui/svg-icons/maps/restaurant-menu';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';

class Dashboard extends Component {
  exampleImageInput = {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  }

  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ marginTop: '14px' }}>FOOD PLAN</h1>
        </div>
        <p className="App-intro">
          Shopping lists. fast.
        </p>
        <RaisedButton  label='Add meal' labelPosition="after"
            primary={true}
            containerElement="label"
            icon={<FoodMenu />}
            />
        <br />
        

        <FoodCard title='Stir Fry' picture={stirfry} />

        <FoodCard title='Spaghetti Bolognese' picture={spaghetti} />

        <FoodCard title='Fajitas' picture={fajitas} />

        <FoodCard title='Sausage & mash' picture={bangers} />

      </div>
    );
  }
}

export default Dashboard;