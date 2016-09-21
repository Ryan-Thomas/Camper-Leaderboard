import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../index.scss'; // eslint-disable-line
import React from 'react';

export default class Row extends React.Component {
  render() {
    return (
      <tr>
        <td className="col-xs-2">{this.props.index}</td>
        <td className="col-xs-4">{this.props.name}</td>
        <td className="col-xs-3">{this.props.recent}</td>
        <td className="col-xs-3">{this.props.alltime}</td>
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
