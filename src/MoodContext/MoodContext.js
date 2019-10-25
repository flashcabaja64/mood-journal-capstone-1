import React, { Component } from 'react';

const MoodContext = React.createContext({
  entries: [],
  comments: [],
  error:null,
  setEntryList: () => {},
  setError: () => {},
  setComment: () => {},
  clearError: () => {},
  addEntry: () => {},
  addComment: () => {},
  deleteEntryPage: () => {},
  updateEntry: () => {},
})

export default MoodContext

export class MoodPageProvider extends Component {
  state = {
    entries: [],
    comments: [],
    error: null,
  }

  setEntryList = entries => {
    this.setState({ entries })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  setComment = comments => {
    this.setState({ comments })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  addEntry = entry => {
    this.setEntryList([
      ...this.state.entries,
      entry
    ])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  deleteEntryPage = entryId => {
    let filterEntries = this.state.entries.filter(
      entry => entry.id !== entryId
    );
    this.setState({ entries: filterEntries})
  }

  updateEntry = updatedEntry => {
    const newEntry = this.state.entries.map(entry =>
      (entry.id === updatedEntry.id)
        ? updatedEntry
        : entry
    );
    this.setState({
      entries: newEntry
    })
  }

  render() {
    const value = {
      entries: this.state.entries,
      error: this.state.error,
      setError: this.setError,
      setComment: this.setComment,
      setEntryList: this.setEntryList,
      clearError: this.clearError,
      addEntry: this.addEntry,
      addComment: this.addComment,
      deleteEntryPage: this.deleteEntryPage,
      updateEntry: this.updateEntry,
    }
    return (
      <MoodContext.Provider value={value}>
        {this.props.children}
      </MoodContext.Provider>
    )
  }
}
