import React, { Component } from 'react';
import './App.css';
import Leaderboard from './leaderboard.json'; // import leaderboard JSON data
import Overview from './components/Overview';
import Table from './components/Table';

class App extends Component {

  constructor(props) {
    super(props); 
    this.state = {data: [...Leaderboard.data]}; // use spread operator to copy the leaderboard array into the state!
  }

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
