import React, { Component } from 'react';
import MoodContext from '../../MoodContext/MoodContext';
import EntryApiService from '../../services/entry-api-service'
import MoodListItem from '../../components/MoodListItem/MoodListItem';
import './MoodPage.css'

export default class MoodPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }
  }
  static contextType = MoodContext;

  // Can possibly delete .then and .catch block
  componentDidMount() {
    this.context.clearError()
    EntryApiService.getEntries()
      .then(this.context.setEntryList)
      .catch(this.context.setError)
  }

  onSearch = e => {
    this.setState({ search: e.target.value })
  }

  renderEntries() {
    const { entries = [] } = this.context
    return entries.map(entry =>
      <MoodListItem
        key={entry.id}
        id={entry.id}
        entry={entry}
      />
    )
  }

  render() {
    const { entries = [] } = this.context
    const {search} = this.state
    let filterEntries = entries.filter(entry => entry.content === search)

    // Refactor this into a ternary operator
    if(search) {
      filterEntries = entries.filter(entry => {
        return entry.content.toLowerCase().indexOf(search.toLowerCase()) !== -1
      })
    } else {
      filterEntries = entries.map(entry => entry)
    }
    
    return(
      <div className="mood-page">
        <div className="search-content">
        <h3>Search Entry Contents:</h3>
          <input
            type="text"
            value={this.state.search}
            onChange={this.onSearch}
            placeholder="Search journal entry contents...">
          </input>
        </div>
        <h1>My Moods</h1>
        {filterEntries.map(entry =>
          <MoodListItem
            key={entry.id}
            id={entry.id}
            entry={entry}
        />)}
        {/* {this.renderEntries()} */}
      </div>
    )
  }
}