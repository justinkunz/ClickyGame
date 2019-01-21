import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ImageContainer from './components/ImageContainer'

class App extends Component {
  render() {
    return (
      <div>
        <ImageContainer />
      </div>
    );
  }
}

export default App;
