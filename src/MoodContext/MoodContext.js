import React, { Component } from 'react';

const MoodContext = React.createContext({
  entries: [],
  error:null,
  setEntryList: () => {},
  setError: () => {},
  clearError: () => {},
  addEntry: () => {},
  deleteEntryPage: () => {},
  updateEntry: () => {},
})

export default MoodContext

export class MoodPageProvider extends Component {
  state = {
    entries: [],
    error: null,
  }

  setEntryList = entries => {
    this.setState({ entries })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
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
      clearError: this.clearError,
      setEntryList: this.setEntryList,
      addEntry: this.addEntry,
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
