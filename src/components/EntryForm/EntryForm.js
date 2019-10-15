import React, { Component } from 'react';

export default class EntryForm extends Component {
  render() {
    return(
      <div>
      <header>
    <h1>New Mood</h1>
    </header>
    <section>
    <form id="record-mood">
        <div className="form-section">
        <label htmlFor="mood-title">Current Mood</label>
        <input type="text" name="mood-title" placeholder="Feeling weird" required />
        </div>
        <div className="form-section">
        <label htmlFor="mood-summary">Why am I feeling this way?</label>
        <textarea name="mood-summary" rows="15" columns="20" placeholder="Type your entry..." required></textarea>
        </div>
        <div className="time-mood-container" className="form-section">
        <label htmlFor="time-mood">How long did the mood last?</label>
        <input type="number" name="mood-time" placeholder="8" />
        </div>
        <div className="form-section">
        <p>Select mood range</p>

        <input type="radio" name="mood-type" value="0" className="mood-type-radio" checked />
        <label htmlFor="mood-type">
            <span>Balanced</span>
            <div className="mood-type-explanation">This is a stable conditional mood people experience in a typical day. Things are balanced, and moods are not spiking high, and steeping low.</div>
        </label>

        <input type="radio" name="mood-type" value="1" className="mood-type-radio" />
        <label htmlFor="mood-type">
            <span>Low</span>
            <div className="mood-type-explanation">Mood likes this has people unmotivated, and only wanting to get through the day with the least amount of effort. This could range from depressive to sad thoughts.</div>
        </label>

        <input type="radio" name="mood-type" value="2" className="mood-type-radio" />
        <label htmlFor="mood-type">
            <span>Extreme</span>
            <div className="mood-type-explanation">When there is a rush of emotions that feels overpowering to where the person can still feel in control.</div>
        </label>

        <input type="radio" name="mood-type" value="3" className="mood-type-radio" />
        <label htmlFor="mood-type">
            <span>Erratic</span>
            <div className="mood-type-explanation">Unable to manage the state of mood, and could, at any time, result in making regrettable and unforseen situations.</div>
        </label>

        <input type="radio" name="mood-type" value="4" className="mood-type-radio" />
        <label htmlFor="mood-type">
            <span>Unsure</span>
            <div className="mood-type-explanation">Sometimes moods cannot be labeled and we are unsure the exact mood we are experiencing. Try your best to describe it.</div>
        </label>
        </div>

        <div className="form-section">
            <p className="mood-date-header">Date of Mood</p>
            <input type="number" name="date-month" placeholder="01" min="1" max="12" required="" /> .
            <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required="" /> .
            <input type="number" name="date-year" className="date-year" placeholder="2019" min="2019" max="2020" required="" />
        </div>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </form>
    </section>
    </div>
    )
  }
}