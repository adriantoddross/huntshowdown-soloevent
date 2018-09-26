import React from 'react';
import PropTypes from 'prop-types';

export default function playerRow(props) {
  return (
    <tr className='table-playerRow'>
      <td>{props.index + 1}</td>
      <td>{props.url ? <a href={props.url} target="_blank" rel="noopener noreferrer">{props.username}</a> : props.username}</td>
      <td>{props.missionsPlayed}</td>
      <td>${props.bounty.toLocaleString()}</td>
    </tr>
  );
}

playerRow.propTypes = {
  index: PropTypes.number,
  url: PropTypes.string,
  username: PropTypes.string,
  missionsPlayed: PropTypes.number,
  bounty: PropTypes.number
};