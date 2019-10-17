import config from '../config';
import TokenService from '../services/token-service';

const EntryApiService = {
  getEntries() {
    return fetch(`${config.API_ENDPOINT}/entries`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },

  getEntry(entryId) {
    return fetch(`${config.API_ENDPOINT}/entries/${entryId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },

  getEntryComments(entryId) {
    return fetch(`${config.API_ENDPOINT}/entries/${entryId}/comments`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },
//EDIT THIS (MAY NOT BE RIGHT!!!!)
  postEntry(entryId, title, content, duration, mood_type) {
    return fetch(`${config.API_ENDPOINT}/entries`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        title,
        content,
        duration,
        mood_type
      })
    })
    .then(res =>
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },

  postComment(entryId, text, rating) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        entry_id: entryId,
        rating,
        text,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },
}

export default EntryApiService;