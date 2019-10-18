import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import config from '../../config'
import MoodContext from '../../MoodContext/MoodContext';
import EntryApiService from '../../services/entry-api-service';

export default class MoodListItem extends Component {

	static contextType = MoodContext

	//work on this later
	handleDeleteClick = e => {
		e.preventDefault()
		const entryId = this.props.id;
		const {deleteEntryPage} = this.context;

		EntryApiService.deleteEntry(entryId)
			.then(() => {
				deleteEntryPage(entryId)
				this.props.history.push(`/moods`)
			})
			.catch(err => {
				console.error(err)
			})
	}

	handleEditClick = e => {
		e.preventDefault();
	}

	render() {
		const {entry} = this.props
		return (
				<div className="mood-entry">
						<h1>{entry.title}</h1>
						<p>{entry.content}</p>
						<p>Mood duration: {entry.duration} hours</p>
						<p>Mood Type: {entry.mood_type}</p>
						<button
							type='button'
							//onClick={}
							>
							Edit
						</button>
						<button
							type='button'
							onClick={this.handleDeleteClick}
						>
						Delete							
						</button>
				</div>
		)
	}
}