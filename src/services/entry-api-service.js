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

  
  //ADD PATCH METHOD
  patchEntry(entryId, title, content, duration, mood_type) {
    return fetch(`${config.API_ENDPOINT}/${entryId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
  },

  //ADD DELETE METHOD
  deleteEntry(entryId) {
    fetch(`${config.API_ENDPOINT}/entries/${entryId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(e => Promise.reject(e));
      }
      return res.json();
    })
    .catch(error => {
      console.error({ error });
    });
  },
}

export default EntryApiService;