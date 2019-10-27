import React, { Component } from 'react';
import MoodContext from '../../MoodContext/MoodContext';
import EntryApiService from '../../services/entry-api-service'
import ValidateError from '../ValidateError/ValidateError'
import TokenService from '../../services/token-service';

export default class EditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user_id: '',
      title: '',
      content: '',
      duration: '',
      mood_type: '',
      error: null,
			touched : {
				title: false,
				content: false,
				duration: false,
			}
    }
  }

  static contextType = MoodContext
  
  handleEditClick = e => {
    e.preventDefault();
    const { entry_id } = this.props.match.params

    this.setState({ error: null })

    EntryApiService.patchEntry(
      Number(entry_id),
      TokenService.getUserId(),
			this.state.title,
			this.state.content,
			Number(this.state.duration),
			this.state.mood_type
    )
      .then((e) => this.context.updateEntry({
        id: Number(entry_id),
        user_id: TokenService.getUserId(),
        title: this.state.title,
        content: this.state.content,
        duration: this.state.duration,
        mood_type: this.state.mood_type,
      }))
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
		let content = this.state.content.trim();
		let words = this.state.content.split(' ')
		if (content.length === 0) {
			return 'Please enter more than 1 character'
		}
		if (words.length < 3) {
			return 'Please enter more than 3 words'
		}
	}

	validationDuration() {
		let num = this.state.duration;
		if(num < 1) {
			return 'Please enter a number greater than zero'
		}
	}

  componentDidMount() {
    const {entry_id} = this.props.match.params;
    EntryApiService.getEntry(entry_id)
      .then(res => {
        this.setState({
          id: res.id,
          title: res.title,
          content: res.content,
          duration: res.duration,
          mood_type: res.mood_type,
          date_created: res.date_created,
          user_id: res.user_id,
        })
      })
      .catch(err => console.error(`${err.message}`))
      EntryApiService.getEntries()
      .then(this.context.setEntryList)
      .catch(this.context.setError)
  }

  render() {
    let titleError = this.validateTitle();
    let contentError = this.validateContent();
    let durationError = this.validationDuration();

    return (
			<div className="new-mood">
				<div className="new-mood-wrap">
				<header>
					<h1 className="new-mood-title">Edit Mood</h1>
				</header>
				<section>
					<form id="record-mood" onSubmit={this.handleAddMood}>
						<div className="form-section">
							<label
								id="moodTitle"
								htmlFor="mood-title"
								className="label-title">
								Current Mood
							</label>
							<input
								type="text"
								name='title'
								placeholder="Feeling weird"
								onChange={this.onChangeHandle}
								aria-label="Title of current mood"
								aria-describedby="moodTitle"
								required
							/>
						<ValidateError message={titleError} />
						</div>
						<div className="form-section">
							<label
								id="moodContent"
								htmlFor="mood-content"
								className="label-title">
								Why am I feeling this way?
							</label>
							<textarea
								className='new-mood-content'
								name='content'
								rows="15"
								columns="30"
								placeholder="Type your entry..."
								onChange={this.onChangeHandle}
								aria-label="describe your current mood"
								aria-describedby="moodContent"
								required
							>
							</textarea>
						<ValidateError message={contentError} />
						</div>
						<div className="form-section">
							<label
								id="moodTime"
								htmlFor="time-mood"
								className="label-title">
								How many hours did the mood last for?
							</label>
							<input
								type="number"
								id="time-mood"
								name='duration'
								placeholder="1"
								onChange={this.onChangeHandle}
								aria-label="duration for current mood"
								aria-describedby="moodTime"
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
									aria-label="balanced mood range"
									aria-describedby="moodBalanced"
									required
								/>
							<label htmlFor="mood-type">
								<span>Balanced</span>
								<div id="moodBalanced" className="mood-type-explanation">This is a stable conditional mood people experience in a typical day. Things are balanced, and moods are not spiking high, and steeping low.</div>
							</label>
								<input
									type="radio"
									id="mood-type"
									name='mood_type'
									value="Low"
									className="mood-type-radio"
									onChange={this.onChangeHandle}
									aria-label="low mood range"
									aria-describedby="moodLow"
								/>
							<label htmlFor="mood-type">
								<span>Low</span>
								<div id="moodLow" className="mood-type-explanation">Mood likes this has people unmotivated, and only wanting to get through the day with the least amount of effort. This could range from depressive to sad thoughts.</div>
							</label>
								<input
									type="radio"
									id="mood-type"
									name='mood_type'
									value="Extreme"
									className="mood-type-radio"
									onChange={this.onChangeHandle}
									aria-label="extreme mood range"
									aria-describedby="moodExtreme"
								/>
							<label htmlFor="mood-type">
								<span>Extreme</span>
								<div id="moodExtreme" className="mood-type-explanation">When there is a rush of emotions that feels overpowering to where the person can still feel in control.</div>
							</label>
								<input
									type="radio"
									id="mood-type"
									name='mood_type'
									value="Erratic"
									className="mood-type-radio"
									onChange={this.onChangeHandle}
									aria-label="erratic mood range"
									aria-describedby="moodErratic"
								/>
							<label htmlFor="mood-type">
								<span>Erratic</span>
								<div id="moodErratic" className="mood-type-explanation">Unable to manage the state of mood, and could, at any time, result in making regrettable and unforseen decisions.</div>
							</label>
								<input
									type="radio"
									id="mood-type"
									name='mood_type'
									value="Unsure"
									className="mood-type-radio"
									onChange={this.onChangeHandle}
									aria-label="unsure mood range"
									aria-describedby="moodUnsure"
								/>
							<label htmlFor="mood-type">
								<span>Unsure</span>
								<div id="moodUnsure" className="mood-type-explanation">Sometimes moods cannot be labeled and we are unsure the exact mood we are experiencing. Try your best to describe it.</div>
							</label>
							</div>
						</div>
						<div className="new-mood-btn-container">
							<button
								type="submit"
								disabled={ titleError || contentError || durationError}
							>
								Submit
							</button>
							<button type="reset">Reset</button>
						</div>
						</form>
					</section>
			</div>
		</div>
    )
  }
}