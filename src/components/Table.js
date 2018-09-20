import React from 'react';
import leaderboard from '../leaderboard.json';

export default function table() {

  const players = leaderboard.data.map((player, index) => 
    <tr key={player.username}>
      <td>{index + 1}</td>
      <td>{player.username}</td>
      <td>{player.missionsPlayed}</td>
      <td>{player.bounty}</td>
    </tr>
  );

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