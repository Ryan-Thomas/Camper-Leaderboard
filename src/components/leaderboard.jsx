import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../index.scss'; // eslint-disable-line
import React from 'react';

const testData = [
  {"username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":3053,"recent":648,"lastUpdate":"2016-09-19T20:26:56.675Z"},
]

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th>Points in past 30 days</th>
            <th>All Time Points</th>
          </tr>
        </thead>
        <tbody>
          // set to testData right now for debugging purposes
          {testData.map()}
        </tbody>
      </table>
    )
  }
}
