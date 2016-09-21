import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Row from "./row.jsx";
import $ from "jquery";

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
	// selectColumn(id) {
	// 	const oldText = document.getElementById("id").innerHTML;
	// }
	updateData(url, id) {
		// Indicate to user which column is selected
		const tablePromise = new Promise((res, rej) => {
			if (document.getElementById(id)) {
				if (id === 'recent') {
					$('#recent').show();
					$('#alltime').hide();
				} else {
					$('#recent').hide();
					$('#alltime').show();
				}
			}
			res();
		});
		
		// update state and re-render table
		tablePromise.then(() => {
			$.get(url, (data) => {
				this.setState({
					data,
				});
			});
		}).catch((err) => {
			console.error(err);
		});
		
	}
	constructor(props) {
		
		super(props);
		this.state = {
			data: null,
		};
		this.updateData = this.updateData.bind(this);
		const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
		this.updateData(url, 'recent');
	}
	render() {
		if (this.state.data) return (
			<table className="table table-striped table-bordered">
				<thead>
				<tr>
					<th className="col-xs-2">#</th>
					<th className="col-xs-4">Camper Name</th>
					<th
						className="col-xs-3"
						onClick={() => this.updateData('https://fcctop100.herokuapp.com/api/fccusers/top/recent', 'recent')}
					>
						Points in past 30 days &nbsp;
						<span id="recent" className="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
					</th>
					<th
						className="col-xs-3"
						onClick={() => this.updateData('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', 'alltime')}
					>
						All Time Points &nbsp;
						<span id="alltime" className="glyphicon glyphicon-menu-down" aria-hidden="true" style={{ display: "none" }}></span>
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
		);
		else return null;
	}
}
