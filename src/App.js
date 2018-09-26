import React, { Component } from 'react';
import './App.css';
import Overview from './components/Overview';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div>
        <Overview/>
        <Table/>
      </div>
    );
  }
}

export default App;
