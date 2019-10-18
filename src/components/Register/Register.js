import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';

// work on error validation on input form
export default class Register extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = e => {
    e.preventDefault();
    const { full_name, user_name, nickname, password } = e.target
    console.log({ full_name, user_name, nickname, password })

    AuthApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value,
      nickname: nickname.value,
      password: password.value,
    })
      .then(() => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        nickname.value = ''
        this.props.onRegisterSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  render() {
    const { error } = this.state;
    return (
    <section>
    <header>
        <h3>Start Journaling Now</h3>
    </header>
    <form
      className='signup-form'
      onSubmit={this.handleSubmit}
    >
      <div className="full_name">
        <label htmlFor="full_name">Full Name</label>
        <input
          placeholder='Full Name'
          type="text"
          name='full_name'
          id='full_name'
          required
        />
      </div>
      <div className="nickname">
        <label htmlFor="nickname">Nick Name</label>
        <input
          placeholder='Nickname (optional)'
          type="text"
          name='nickname'
          id='nickname'
        />
      </div>
      <div className="user_name">
        <label htmlFor="user_name">User Name</label>
        <input
          type="text"
          name='user_name'
          id='user_name'
          required
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name='password'
          id='password'
          required
        />
      </div>
      <button type='submit'>Register</button>
    </form>
  </section>
    )
  }
}