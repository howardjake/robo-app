import React, { Component } from 'react';
import Hello from './components/Hello/Hello';
import logo from './logo.svg';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Hello greeting={'Hello React Ninja'} className='tc'/>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
