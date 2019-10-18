import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config'

export default class MoodListItem extends Component {

	handleDeleteClick = e => {
		e.preventDefault()
		const entryId = this.props.id;

		fetch(`${config.API_ENDPOINT}/entries/${entryId}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			},
		})
			.then(res => {
				if (!res.ok) {
					return res.json().then(e => Promise.reject(e))
				}
				return res.json()
			})
			.then(() => {
				
			})
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
						>
						Delete							
						</button>
				</div>
		)
	}
}