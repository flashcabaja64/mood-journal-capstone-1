import React, { Component } from 'react';

const CommentContext = React.createContext({
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setComments: () => {},
  addComments: () => {},
})

export default CommentContext;

export class CommentProvider extends Component {
  state = {
    comments: [],
    error: null,
  }

  setError = err => {
    this.setState({error: { err }})
  }

  clearError = comments => {
    this.setState({ comments })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  addComments = comment => {
    this.setState({
      comment: [...this.state.comments, comment]
    })
  }

  render() {
    const commentValue = {
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setComments: this.setComments,
      addComments: this.addComments,
    }
    return (
      <CommentContext.Provider value={commentValue}>
        {this.props.children}
      </CommentContext.Provider>
    )
  }
}