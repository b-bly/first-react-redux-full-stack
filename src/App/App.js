import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from '../Header/Header';
import Greeter from '../Greeter/Greeter';
import './App.css';

const myName = 'Luke';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Greeter name={myName} />
      </div>
    );
  }
}

export default App;
