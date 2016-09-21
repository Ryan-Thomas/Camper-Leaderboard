import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../index.scss'; // eslint-disable-line
import React from 'react';

export default class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.name}</td>
        <td>{this.props.p30}</td>
        <td>{this.props.pAll}</td>
      </tr>
    )
  }
}
Row.propTypes = {
  index: React.PropTypes.number.isRequired,
  name: React.PropTypes.number.isRequired,
  p30: React.PropTypes.number.isRequired,
  pAll: React.PropTypes.number.isRequired,
}
