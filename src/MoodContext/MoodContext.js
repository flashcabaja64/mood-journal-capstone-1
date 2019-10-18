import React, { Component } from 'react';

const MoodContext = React.createContext({
  entries: [],
  error:null,
  setEntryList: () => {},
  setError: () => {},
  clearError: () => {},
  addEntry: () => {},
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

  render() {
    const value = {
      entries: this.state.entries,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setEntryList: this.setEntryList,
      addEntry: this.addEntry,
      deleteEntryPage: this.deleteEntryPage
    }
    return (
      <MoodContext.Provider value={value}>
        {this.props.children}
      </MoodContext.Provider>
    )
  }
}
