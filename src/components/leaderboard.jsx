import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../index.scss'; // eslint-disable-line
import React from 'react';
import Row from './row.jsx';
import $ from 'jquery';

// const testData = [
//   {
//     "username": "sjames1958gm",
//     "img": "https://avatars.githubusercontent.com/u/4639625?v=3",
//     "alltime": 3053,
//     "recent": 648,
//     "lastUpdate": "2016-09-19T20:26:56.675Z",
//   },
// ]

export default class Leaderboard extends React.Component {
  updateData(url) {
    $.get(url, (data) => {
      this.setState({
        data,
      });
    });
    this.render();
  }
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
    this.updateData = this.updateData.bind(this);
    const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    this.updateData(url);
  }
  render() {
    if (this.state.data) return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th onClick={() => this.updateData('https://fcctop100.herokuapp.com/api/fccusers/top/recent')}>
              Points in past 30 days
            </th>
            <th onClick={() => this.updateData('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')}>
              All Time Points
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((obj, i) => {
            // Using testData right now for testing purposes
            return <Row
              key={i + 1}
              index={i + 1}
              name={obj.username}
              recent={obj.recent}
              alltime={obj.alltime}
              />
          })}
        </tbody>
      </table>
    )
    else return null;
  }
}
