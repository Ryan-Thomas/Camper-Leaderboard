import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../index.scss'; // eslint-disable-line
import React from 'react';
import Leaderboard from  './leaderboard.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
				<h1 className="text-center">Free Code Camper Leaderboard</h1>
        <Leaderboard />
      </div>
    );
  }
}
