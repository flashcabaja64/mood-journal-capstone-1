import React, { Component } from 'react';
import EntryApiService from '../../services/entry-api-service';
import MoodContext from '../../MoodContext/MoodContext';
import TokenService from '../../services/token-service';

export default class AddEntry extends Component {
	static contextType = MoodContext;

	state = {
		title: '',
		content: '',
		duration: '',
		mood_type: '',
	}

	handleAddMood = e => {
		e.preventDefault();
		const { title, content, duration, mood_type } = e.target

		EntryApiService.postEntry(
			TokenService.getUserId(),
			title.value,
			content.value,
			Number(duration.value),
			mood_type.value
		)
			.then(this.context.addEntry)
			.then(() => {
				title.value = ''
				content.value = ''
				mood_type.value = ''
			})
			.catch(this.context.setError)
	}

	onChangeHandle = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

render() {
	return(
		<div>
		<header>
	<h1>New Mood</h1>
	</header>
	<section>
	<form id="record-mood" onSubmit={this.handleAddMood}>
		<div className="form-section">
		<label htmlFor="mood-title">Current Mood</label>
		<input
			type="text"
			name="title"
			placeholder="Feeling weird"
			onChange={this.onChangeHandle}
		/>
		</div>
		<div className="form-section">
		<label htmlFor="mood-content">Why am I feeling this way?</label>
		<textarea
			name="content"
			rows="15"
			columns="30"
			placeholder="Type your entry..."
			onChange={this.onChangeHandle}
		>
		</textarea>
		</div>
		<div className="time-mood-container" className="form-section">
		<label htmlFor="time-mood">How long did the mood last?</label>
		<input
			type="number"
			name="duration"
			placeholder="0"
			onChange={this.onChangeHandle}
		/>
		</div>
		<div className="form-section">
		<p>Select mood range</p>

		<input
			type="radio"
			name="mood_type"
			value="Balanced"
			className="mood-type-radio"
			onChange={this.onChangeHandle}
			defaultChecked
		/>
		<label htmlFor="mood-type">
			<span>Balanced</span>
			<div className="mood-type-explanation">This is a stable conditional mood people experience in a typical day. Things are balanced, and moods are not spiking high, and steeping low.</div>
		</label>

		<input
			type="radio"
			name="mood_type"
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
			name="mood_type"
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
			name="mood_type"
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
			name="mood_type"
			value="Unsure"
			className="mood-type-radio"
			onChange={this.onChangeHandle}
		/>
		<label htmlFor="mood-type">
			<span>Unsure</span>
			<div className="mood-type-explanation">Sometimes moods cannot be labeled and we are unsure the exact mood we are experiencing. Try your best to describe it.</div>
		</label>
		</div>

		<button type="submit">Submit</button>
		<button type="reset">Reset</button>
    </form>
    </section>
    </div>
    )
  }
}