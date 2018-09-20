import React from 'react';
import PropTypes from 'prop-types';

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

playerRow.propTypes = {
  index: PropTypes.number,
  username: PropTypes.string,
  missionsPlayed: PropTypes.number,
  bounty: PropTypes.number
};