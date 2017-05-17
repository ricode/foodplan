import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
class NewMeal extends Component {

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
            <h1 style={{ textAlign: 'center', fontFamily: 'haymaker', fontSize:'50pt', color: 'darkkhaki', display: 'inline' }}>Drop in your meal</h1>
          </div>

          <div style={{ display: 'inline-flex' }}>
            <Paper style={{ height: 750, width: 750, marginTop: '-50px' }} zDepth={2}>
              <TextField hintText='Title' hintStyle={{ width: '100%', fontFamily: 'arvo', align: 'center' }} style={{ margin: 10 }} inputStyle={{ textAlign: 'center', fontFamily: 'haymaker' }} />
              <TextField hintText='Photo' hintStyle={{ width: '100%', fontFamily: 'arvo', align: 'center' }} style={{ margin: 10 }} inputStyle={{ textAlign: 'center', fontFamily: 'haymaker' }} />
              <TextField hintText='Ingredient' hintStyle={{ width: '100%', fontFamily: 'arvo', align: 'center' }} style={{ margin: 10 }} inputStyle={{ textAlign: 'center', fontFamily: 'haymaker' }} />
            </Paper>
          </div>
        </div>
    )
  }
}

export default NewMeal; 