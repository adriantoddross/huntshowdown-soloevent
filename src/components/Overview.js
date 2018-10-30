import React from 'react';
import PropTypes from 'prop-types';

export default function Preview(props) {
  const stats = [...props.stats]; // shorthand variable for the leaderboard data!
  

  // Let's use a helper function to get the sum of whatever key/value pair we're looking for using .reduce.
  const sum = (key, array) => array.reduce(function (acc, obj) { return acc + parseInt(obj[key], 10); }, 0);

  const sumOfBounties = sum('bounty', stats); // we use our helper function for the sum
  const averageBounty = sumOfBounties / stats.length; // the average is the sum divided by the count

  const sumOfMissionsPlayed = sum('missionsPlayed', stats);
  const averageMissionsPlayed = sumOfMissionsPlayed / stats.length;

  const mostBountyPerMission = () => {
    let copyOfData = stats.slice();
    copyOfData.sort(function(a,b) {return a['missionsPlayed'] / a['bounty'] > b['missionsPlayed'] / b['bounty'];});
    return copyOfData[0];
  };

  return (
    <div>
      <p>Total bounty amassed by all players: ${sumOfBounties.toLocaleString()}</p>
      <p>Average bounty per player: ${averageBounty.toLocaleString()}</p>

      <p>Total missions completed: {Math.ceil(sumOfMissionsPlayed)}</p>
      <p>Average missions per player: {Math.ceil(averageMissionsPlayed)}</p>

      <p>Most bounty earned per mission: <b>{mostBountyPerMission().username}</b>, making about ${Math.ceil(mostBountyPerMission().bounty / mostBountyPerMission().missionsPlayed)} per mission</p>

    </div>
  );
}

Preview.propTypes = {
  stats: PropTypes.array
};