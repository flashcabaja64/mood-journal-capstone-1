import React, { Component } from 'react';
import MoodContext from '../../MoodContext/MoodContext';
import EntryApiService from '../../services/entry-api-service'
import MoodListItem from '../../components/MoodListItem/MoodListItem';

export default class MoodPage extends Component {

  static contextType = MoodContext;

  componentDidMount() {
    this.context.clearError()
    EntryApiService.getEntries()
      .then(this.context.setEntryList)
      .catch(this.context.setError)
  }

  renderEntries() {
    const { entries = [] } = this.context
    return entries.map(entry =>
      <MoodListItem
        key={entry.id}
        entry={entry}
      />
      )
  }

  render() {
    return(
      <div>
        {this.renderEntries()}
      </div>
    )
  }
}