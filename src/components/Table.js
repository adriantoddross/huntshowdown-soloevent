import React, {Component} from 'react';
import leaderboard from '../leaderboard.json'; // imported leaderboard JSON data

class leaderboardTable extends Component {
  constructor(props) {
    super(props); 
    this.state = {data: [leaderboard.data]}; // keep the leaderboard data to the state
  }

  render() {
    const leaderboardData = this.state.data; // shorthand; way easier than typing this.state.data

    const players = leaderboardData.map((player, index) => 
      <tr key={player.username}>
        <td>{index + 1}</td>
        <td>{player.username}</td>
        <td>{player.missionsPlayed}</td>
        <td>{player.bounty}</td>
      </tr>
    );

    // Now let's assemble the table. First we need a constructor function to create a row.
    // This looks confusing as an arrow function, so let's just declare it.
    const Row = function (index, rank, username, missionsPlayed, bounty) {
      return (
        <tr className='player-row' key={username}>
          <td>{index}</td>
          <td>{username}</td>
          <td>{missionsPlayed}</td>
          <td>{bounty}</td>
        </tr>
      );
    };

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
          {players}
        </tbody>
      </table>
    );
  }
}
  
export default leaderboardTable;