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
  //get one entry
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

  postEntry(user_id, title, content, duration, mood_type) {
    console.log(user_id)
    return fetch(`${config.API_ENDPOINT}/entries`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        user_id,
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

  postComment(user_id, entry_id, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        user_id,
        entry_id,
        text,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )
  },

  //ADD PATCH METHOD **unfunctional**
  patchEntry(entryId, user_id, title, content, duration, mood_type) {
    return fetch(`${config.API_ENDPOINT}/entries/${entryId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        entry_id: entryId,
        user_id,
        title,
        content,
        duration,
        mood_type,
      })
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : undefined
    )
  },

  //ADD DELETE METHOD
  deleteEntry(entryId) {
    console.log(entryId)
    return fetch(`${config.API_ENDPOINT}/entries/${entryId}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "content-type": "application/json",
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : undefined
    )
    .catch(error => {
      console.error({ error });
    });
  },
}

export default EntryApiService;