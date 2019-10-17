import React, { Component } from 'react';
import MoodPage from '../../pages/MoodPage/MoodPage';
import MoodContext from '../../MoodContext/MoodContext'

export default class MoodListItem extends Component {

	render() {
		const {entry} = this.props
		return (
				<div>
						<h1>{entry.title}</h1>
				</div>
		)
	}
}