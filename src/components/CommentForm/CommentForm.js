import React, { Component } from 'react';
import EntryApiService from '../../services/entry-api-service';
import MoodContext from '../../MoodContext/MoodContext'

export default class CommentForm extends Component {
  static contextType = MoodContext

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
      <div className='comment-form-container'>
        <textarea 
          name='text' 
          id='text' 
          placeholder='Leave your comment' 
          cols='30' 
          rows='3'
          className='comment-text comment-text-input'
          required>
        </textarea>
      </div>
      <button type='submit' className='comment-button'>Add Comment</button>
    </form>
    )
  }
}