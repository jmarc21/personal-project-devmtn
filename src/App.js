import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import Header from './componets/header/Header.js'
import Home from './componets/home/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
