import React, {Component} from 'react';
import leaderboard from '../leaderboard.json'; // import leaderboard JSON data
import PlayerRow from './PlayerRow';

class leaderboardTable extends Component {
  constructor(props) {
    super(props); 
    this.state = {data: [...leaderboard.data]}; // use spread operator to copy the leaderboard array into the state!

    this.sortByUsername.bind(this);
  }

  sortByUsername() {
    const copyOfState = [...this.state.data];
    copyOfState.sort(function(a,b){ return a.username.localeCompare(b.username);});
    this.setState({data: copyOfState});
  }

  render() {
    const leaderboardData = this.state.data; // shorthand varoable for the leaderboard data!
    const stringToNumber = (number) => parseInt(number, 10);

    const playerRows = leaderboardData.map((player, index) => 
      <PlayerRow key={player.username}
        url={player.url}
        index={index} 
        username={player.username}
        missionsPlayed={stringToNumber(player.missionsPlayed)}
        bounty={player.bounty}
      />);

    return (
      <table>
        <thead>
          <tr className='legend-row'>
            <th>Rank</th>
            <th onClick={() => this.sortByUsername()}>Username</th>
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