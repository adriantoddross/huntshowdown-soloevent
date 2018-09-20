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

    // Now let's assemble the table.

    return (
      <table>
        <thead>
          <tr>
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