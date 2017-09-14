import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Photo from 'material-ui/svg-icons/image/photo';

class NewMeal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'fuck yourself',
      ingredient: [],
    }

  }

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

  handleTitleChange(e) {
    const title = e.target.value;
    this.setState({ title: title });
    console.log('tit:' + this.state.title)
  }

  handleIngredientChange(e) {
    if (e.keyCode == 13) {
      console.log(e.target.value)
      const ingredient = e.target.value;
      this.setState({ ingredient: [...this.state.ingredient, ingredient] });
      e.target.value = null;
      console.log('ing:' + this.state.ingredient)
    }
  }

  handleImageChange(e) {
    const image = e.target.value;
    this.setState({ image: image });
    console.log('image added - i think')
  }

  showState(e) {
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" />
          <h1 style={{ textAlign: 'center', fontFamily: 'arvo', fontSize: '50pt', color: 'darkkhaki', display: 'inline' }}>Drop in your meal</h1>
        </div>

        <div style={{ display: 'inline-flex' }}>
          <Paper style={{ width: 450, marginTop: '-50px' }} zDepth={2}>
            <TextField
              name='title'
              hintText='Title'
              onChange={this.handleTitleChange.bind(this)}
              style={{ display: 'block', width: '100%' }}
              hintStyle={{ width: '100%', fontFamily: 'arvo', align: 'center' }}
              inputStyle={{ textAlign: 'center', fontFamily: 'arvo' }} />

            <FlatButton
              label="Choose an Image"
              labelPosition="after"
              primary={true}
              containerElement="label"
              icon={<Photo />}
            >
              <input
                name='image'
                type="file"
                onChange={this.handleImageChange.bind(this)}
                value={this.state.image}
                style={this.exampleImageInput} />


            </FlatButton>
            <TextField
              name='ingredient'
              hintText='Ingredient'
              onKeyDown={this.handleIngredientChange.bind(this)}
              style={{ display: 'block', width: '100%' }}
              hintStyle={{ width: '100%', fontFamily: 'arvo', align: 'center' }}
              inputStyle={{ textAlign: 'center', fontFamily: 'arvo' }} />

            <RaisedButton
              label='Create meal'
              primary={true}
              onClick={this.showState.bind(this)}
              style={{ marginLeft: '30', marginRight: '30', margin: 10, display: 'block' }} />
          </Paper>
        </div>
      </div>
    )
  }
}

export default NewMeal; 