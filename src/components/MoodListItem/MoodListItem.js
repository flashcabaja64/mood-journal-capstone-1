import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import config from '../../config'
import MoodContext from '../../MoodContext/MoodContext';
import EntryApiService from '../../services/entry-api-service';
import './MoodListItem.css'
//import EditForm from '../EditForm/EditForm'

export default class MoodListItem extends Component {

	static contextType = MoodContext

	//work on this later (error: SyntaxError: Unexpected end of JSON input)
	handleDeleteClick = e => {
		e.preventDefault()
		const entryId = this.props.id;
		const { deleteEntryPage } = this.context;

		EntryApiService.deleteEntry(entryId)
			.then(() => {
				console.log('working delete')
				deleteEntryPage(entryId)
			})
			.catch(err => {
				console.error(err)
			})
	}

	render() {
		const { entry } = this.props
		return (
				<div className="mood-entry">
					<div className="wrap-mood-entry">
						<div className="entry-wrap">
							<h1 className="entry-title">{entry.title}</h1>
							<span className="focus-input"></span>
							<p className="entry-content">{entry.content}</p>
							<span className="focus-input"></span>
							<p className="entry-duration">Mood duration: {entry.duration} hours</p>
							<span className="focus-input"></span>
							<p className="entry-type">Mood Type: {entry.mood_type}</p>
							<span className="focus-input"></span>
							<div className="entry-btn-container">
								<Link to={`/entries/${entry.id}`} className="edit-btn-link">
									<button
										type="button"
										className="edit-btn"
									>
										Edit
									</button>
								</Link>
								<span className="focus-input"></span>
								<button
									type='button'
									className="del-btn"
									onClick={this.handleDeleteClick}
								>
									Delete
								</button>
								<span className="focus-input"></span>
							</div>
						</div>
					</div>
				</div>
		)
	}
}