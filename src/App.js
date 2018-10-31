import React, { Component } from 'react';
import './App.css';

import Leaderboard from './leaderboard.json'; // import leaderboard JSON data
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Table from './components/Table';

class App extends Component {

  constructor(props) {
    super(props); 
    this.state = {data: [...Leaderboard.data]}; // use spread operator to copy the leaderboard array into the state!

    this.sortByString = this.sortByString.bind(this);
    this.sortByNumber = this.sortByNumber.bind(this);
  }

  sortByNumber(num) {
    let players = Object.assign({}, this.state);
    players.data.sort(function(a,b) {return b[num] - a[num];});
    this.setState({players});
  }
  
  sortByString(key) {
    let players = Object.assign({}, this.state);
    players.data.sort(function(a,b) {return a[key].localeCompare(b[key]);});
    this.setState({players});
  }

  render() {
    return (
      <div>
        <header>
          <Navbar/>
        </header>
        <body>
          <Overview
            stats={this.state.data}
          />
          <Table 
            stats={this.state.data}
            sortByUsername={this.sortByString}
            sortByMissionsPlayed={this.sortByNumber}
            sortByBounty={this.sortByNumber}
          />  
        </body>
        {/* <footer></footer> */}
        
      </div>
    );
  }
}

export default App;
