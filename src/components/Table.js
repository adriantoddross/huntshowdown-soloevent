import React, {Component} from 'react';
import PlayerRow from './PlayerRow';

class leaderboardTable extends Component {
  constructor(props) {
    super(props); 

    this.sortByString.bind(this);
    this.sortByNumber.bind(this);
  }

  sortByNumber(num) {
    const copyOfState = [...this.props.stats];
    copyOfState.sort(function(a,b) {return b[num] - a[num];});
    this.setState({data: copyOfState});
  }

  sortByString(key) {
    const copyOfState = [...this.props.stats];
    copyOfState.sort(function(a,b) {return a[key].localeCompare(b[key]);});
    this.setState({data: copyOfState});
  }

  render() {
    const leaderboardData = this.props.stats; // shorthand variable for the leaderboard data!
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
      <table className='table'>
        <thead className='table-header'>
          <tr className='table-legend'>
            <th>Rank</th>
            <th onClick={() => this.sortByString('username')}>Username</th>
            <th onClick={() => this.sortByNumber('missionsPlayed')}>Missions Played</th>
            <th onClick={() => this.sortByNumber('bounty')}>Bounty</th>
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