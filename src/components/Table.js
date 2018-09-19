import React from 'react';
import leaderboard from '../leaderboard.json';

export default function table(props) {

  // const players = leaderboard.map((player) => {
    
  // });

  return (
    <table>
      <tr>
        <th>Rank</th>
        <th>Username</th>
        <th>Missions Played</th>
        <th>Bounty</th>
      </tr>
      {/* From here on out, population the table with the JSON data!  */}
    </table>
  );
}