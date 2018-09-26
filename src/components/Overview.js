import React from 'react';
import leaderboard from '../leaderboard.json'; // import leaderboard JSON data


export default function preview() {
  const leaderboardData = leaderboard.data; // shorthand variable for the leaderboard data!

  // Let's use a helper function to get the sum of whatever key/value pair we're looking for using .reduce.
  const sum = (key, array) => array.reduce(function (acc, obj) { return acc + parseInt(obj[key], 10); }, 0);

  const sumOfBounties = sum('bounty', leaderboardData);
  const averageBounty = sumOfBounties / leaderboardData.length;

  const sumOfMissionsPlayed = sum('missionsPlayed', leaderboardData);
  const averageMissionsPlayed = sumOfMissionsPlayed / leaderboardData.length;


  const average = sum / leaderboardData.length; // average is the sum divided by the count

  return (
    <div>
      <p>Total bounty amassed by all players: ${sumOfBounties.toLocaleString()}</p>
      <p>Average bounty per player: ${averageBounty.toLocaleString()}</p>

      <p>Total missions completed: {Math.ceil(sumOfMissionsPlayed)}</p>
      <p>Average missions per player: {Math.ceil(averageMissionsPlayed)}</p>
    </div>
  );
}