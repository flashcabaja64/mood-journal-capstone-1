import React, { Component } from 'react';
import EntryApiService from '../../services/entry-api-service';
//import MoodContext from '../../MoodContext/MoodContext'
import CommentContext from '../../MoodContext/CommentContext'
import TokenService from '../../services/token-service'

export default class CommentForm extends Component {
  static contextType = CommentContext

  postComment = e => {
    e.preventDefault()
    const { text } = e.target
    const { entry_id } = this.props.match.params

    EntryApiService.postComment(
      TokenService.getUserId(),
      Number(entry_id), 
      text.value
    )
      .then(this.context.addComments)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form onSubmit={this.postComment}>
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
      <button
        type='submit'
        className='comment-button'
      >
        Post Comment
      </button>
    </form>
    )
  }
}