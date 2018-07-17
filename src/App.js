import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
