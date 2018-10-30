import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlayerRow from './PlayerRow';

class leaderboardTable extends Component {

  render() {
    const stats = [...this.props.stats]; // shorthand variable for the leaderboard data!
    const stringToNumber = (number) => parseInt(number, 10);

    const playerRows = stats.map((player, index) => 
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
            <th onClick={() => this.props.sortByUsername('username')}>Username</th>
            <th onClick={() => this.props.sortByMissionsPlayed('missionsPlayed')}>Missions Played</th>
            <th onClick={() => this.props.sortByBounty('bounty')}>Bounty</th>
          </tr>
        </thead>
        <tbody>
          {playerRows}
        </tbody>
      </table>
    );
  }
}

leaderboardTable.propTypes = {
  stats: PropTypes.array,
  sortByUsername: PropTypes.func,
  sortByMissionsPlayed: PropTypes.func,
  sortByBounty: PropTypes.func
};
  
export default leaderboardTable;