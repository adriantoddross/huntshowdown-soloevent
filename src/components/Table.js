import React, {Component} from 'react';
import leaderboard from '../leaderboard.json'; // imported leaderboard JSON data
import PlayerRow from './PlayerRow.js';

class leaderboardTable extends Component {
  constructor(props) {
    super(props); 
    this.state = {data: [...leaderboard.data]}; // ...spread operator to copy the leaderboard array into the state!
  }

  render() {
    const leaderboardData = this.state.data; // shorthand varoable for the leaderboard data!

    const playerRows = leaderboardData.map((player, index) => 
      <PlayerRow key={player.username}
        url={player.url}
        index={index} 
        username={player.username}
        missionsPlayed={player.missionsPlayed}
        bounty={player.bounty}
      />);

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
          {playerRows}
        </tbody>
      </table>
    );
  }
}
  
export default leaderboardTable;