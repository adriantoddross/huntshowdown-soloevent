import React, {Component} from 'react';
import leaderboard from '../leaderboard.json'; // imported leaderboard JSON data
import PlayerRow from './PlayerRow.js';

class leaderboardTable extends Component {
  constructor(props) {
    super(props); 
    this.state = {data: [leaderboard.data]}; // keep the leaderboard data to the state
  }

  render() {
    // const leaderboardData = this.state.data;
    // const playerRows = leaderboardData.map(player => 
    //   <playerRow key={player.username} />);

    return (
      <table>
        <thead>
          <tr className='legend-row'>
            <th>Rank</th>
            <th>Username</th>
            <th>Missions Played</th>
            <th>Bounty</th>
          </tr>
        </thead>
        <tbody>
          {/* {PlayerRow} */}
        </tbody>
      </table>
    );
  }
}
  
export default leaderboardTable;