import React from 'React';

export default function playerRow(props) {
  return (
    <tr className='player-row'>
      <td>{props.index + 1}</td>
      <td>{props.username}</td>
      <td>{props.missionsPlayed}</td>
      <td>{props.bounty}</td>
    </tr>
  );
}

