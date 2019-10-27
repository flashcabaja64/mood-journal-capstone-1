import React, { Component } from 'react';
import MoodContext from '../../MoodContext/MoodContext';
import EntryApiService from '../../services/entry-api-service'
import MoodListItem from '../../components/MoodListItem/MoodListItem';
import './MoodPage.css'

export default class MoodPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = MoodContext;

  state = {
    search: ''
  }

  componentDidMount() {
    //const { entry_id } = this.props.match.params
    this.context.clearError()
    EntryApiService.getEntries()
      .then(this.context.setEntryList)
      .catch(this.context.setError)
    // EntryApiService.getEntryComments(entry_id)
    //   .then(this.context.setComment)
    //   .catch(this.context.setError)
  }

  onSearch = e => {
    this.setState({ search: e.target.value })
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
      <>
        <div className="search-wrap">
          <h3 id="searchEntry" className="search-title">Search:</h3>
            <input
              className="mood-page-input"
              type="text"
              value={this.state.search}
              onChange={this.onSearch}
              placeholder="Search contents..."
              aria-label="search for entry contents"
              aria-describedby="searchEntry">
            </input>
        </div>
        <div className="mood-page">
        <h1>My Moods</h1>
          {filterEntries.map(entry =>
            <MoodListItem
              key={entry.id}
              id={entry.id}
              entry={entry}
            />
          )}
        </div>

      </>
    )
  }
};

// function EntryComments({ comments = [] }) {
//   return (
//     <ul className="entry-comments-list">
//       {comments.map(comment =>
//         <li key={comment.id} className="entry-comments">
//           <p className="entry-comments-text">
//             {comment.text}
//           </p>
//         </li>
//         )}
//     </ul>
//   )
// }