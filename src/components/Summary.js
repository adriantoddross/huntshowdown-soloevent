import React, { Component } from 'react';

import Leaderboard from '../leaderboard.json'; // import leaderboard JSON data
import Overview from './Overview';
import Table from './Table';

class Summary extends Component {

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
      <body>
        <header>
          <div className='hero-image'>
            <header className='hero-banner'>
              <h1 className='hero-header'>Hunt: Showdown's first ever live event started on August 30, 2018.</h1>
              <p className='hero-text'>During this one-week event, hunters trudged and fought their way through the swamps to earn as much money as possible, competing with up to 10 players in free-for-all solo matches.</p>
            </header>
          </div>
        </header>
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
    );
  }
}

export default Summary;
