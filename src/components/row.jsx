import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../index.scss'; // eslint-disable-line
import React from 'react';

export default class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.name}</td>
        <td>{this.props.recent}</td>
        <td>{this.props.alltime}</td>
      </tr>
    )
  }
}
Row.propTypes = {
  index: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  recent: React.PropTypes.number.isRequired,
  alltime: React.PropTypes.number.isRequired,
}
