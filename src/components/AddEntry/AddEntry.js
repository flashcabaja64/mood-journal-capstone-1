import React, { Component } from 'react';
import EntryApiService from '../../services/entry-api-service';
import MoodContext from '../../MoodContext/MoodContext';
import TokenService from '../../services/token-service';
import ValidateError from '../ValidateError/ValidateError'
import './AddEntry.css';

export default class AddEntry extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			content: '',
			duration: '',
			mood_type: '',
			touched : {
				title: false,
				content: false,
				duration: false,
			}
		}
	}
	static contextType = MoodContext;

	handleAddMood = e => {
		e.preventDefault();
		let {title, content, duration, mood_type } = this.state
		console.log(TokenService.getUserId())
		EntryApiService.postEntry(
			TokenService.getUserId(),
			title,
			content,
			Number(duration),
			mood_type
		)
			.then(this.context.addEntry)
			.then(() => {
				title = ''
				content = ''
				mood_type = ''
			})
			.catch(this.context.setError)
			this.props.history.push('/moods')
	}

	onChangeHandle = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			touched: { [e.target.name]: true }
		})
	}

	validateTitle() {
		let name = this.state.title.trim();
		if (name.length === 0) {
			return 'Please enter more than 1 character';
		}
		if (name.length < 6) {
			return 'Please enter a name that is at least 6 characters long'
		}
	}

	validateContent() {
		let contents = this.state.content.trim();
		let words = this.state.content.split(' ')

		if (contents.length === 0) {
			return 'Please enter more than 1 character.'
		}
		if (words.length < 4){
			return 'Please enter more words.'
		}
	}

	validationDuration() {
		let num = this.state.duration;
		if(num < 0) {
			return 'Please enter a number greater than zero'
		}
	}

render() {
	let titleError = this.validateTitle();
	let contentError = this.validateContent();
	let durationError = this.validationDuration();

	return(
		<div className="new-mood">
			<header>
				<h1 className="new-mood-title">New Mood</h1>
			</header>
			<section>
				<form id="record-mood" onSubmit={this.handleAddMood}>
					<div className="form-section">
					<label htmlFor="mood-title" className="label-title">Current Mood</label>
						<input
							type="text"
							name='title'
							placeholder="Feeling weird"
							onChange={this.onChangeHandle}
							required
						/>
					<ValidateError message={titleError} />
					</div>
					<div className="form-section">
					<label htmlFor="mood-content" className="label-title">Why am I feeling this way?</label>
						<textarea
							className='new-mood-content'
							name='content'
							rows="15"
							columns="30"
							placeholder="Type your entry..."
							onChange={this.onChangeHandle}
							required
						>
						</textarea>
					<ValidateError message={contentError} />
					</div>
					<div className="form-section">
					<label htmlFor="time-mood" className="label-title">How long did the mood last?</label>
						<input
							type="number"
							id="time-mood"
							name='duration'
							placeholder="1"
							onChange={this.onChangeHandle}
							required
						/>
					<ValidateError message={durationError} />
					</div>
					<div className="radio-form">
						<div className="form-section">
						<p className="radio-title">Select mood range</p>
							<input
								type="radio"
								name='mood_type'
								value="Balanced"
								className="mood-type-radio"
								onChange={this.onChangeHandle}
								required
							/>
						<label htmlFor="mood-type">
							<span>Balanced</span>
							<div className="mood-type-explanation">This is a stable conditional mood people experience in a typical day. Things are balanced, and moods are not spiking high, and steeping low.</div>
						</label>
							<input
								type="radio"
								id="mood-type"
								name='mood_type'
								value="Low"
								className="mood-type-radio"
								onChange={this.onChangeHandle}
							/>
						<label htmlFor="mood-type">
							<span>Low</span>
							<div className="mood-type-explanation">Mood likes this has people unmotivated, and only wanting to get through the day with the least amount of effort. This could range from depressive to sad thoughts.</div>
						</label>
							<input
								type="radio"
								id="mood-type"
								name='mood_type'
								value="Extreme"
								className="mood-type-radio"
								onChange={this.onChangeHandle}
							/>
						<label htmlFor="mood-type">
							<span>Extreme</span>
							<div className="mood-type-explanation">When there is a rush of emotions that feels overpowering to where the person can still feel in control.</div>
						</label>
							<input
								type="radio"
								id="mood-type"
								name='mood_type'
								value="Erratic"
								className="mood-type-radio"
								onChange={this.onChangeHandle}
							/>
						<label htmlFor="mood-type">
							<span>Erratic</span>
							<div className="mood-type-explanation">Unable to manage the state of mood, and could, at any time, result in making regrettable and unforseen decisions.</div>
						</label>
							<input
								type="radio"
								id="mood-type"
								name='mood_type'
								value="Unsure"
								className="mood-type-radio"
								onChange={this.onChangeHandle}
							/>
						<label htmlFor="mood-type">
							<span>Unsure</span>
							<div className="mood-type-explanation">Sometimes moods cannot be labeled and we are unsure the exact mood we are experiencing. Try your best to describe it.</div>
						</label>
						</div>
					</div>
					<button
						type="submit"
						disabled={ titleError || contentError || durationError}
					>
						Submit
					</button>
					<button type="reset">Reset</button>
					</form>
				</section>
			</div>
    )
  }
}