import config from '../config'
import TokenService from './token-service'

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject('wrong')
        }
          return res.json()
      })
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.user.user_id);
      })
  },

  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject('wrong')
      }
        return res.json()
      // (!res.ok)
      //   ? res.json().then(e => Promise.reject(e))
      //   : res.json()
    })
  },
}

export default AuthApiService