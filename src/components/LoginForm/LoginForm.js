import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null })
    const { user_name, password } = e.target;
    console.log('submitted')

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        this.props.onLoginSuccess(res.authToken)
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state;
    return(
      <div className="main-login">
        <div className="wrap-login">
          <div className="form-wrap-login">
            <form
              className='LoginForm'
              onSubmit={this.handleSubmitJwtAuth}
            >
            <div role='alert'>
              {error && <p className='red'>{error}</p>}
            </div>
            <div className='login-input user_name'>
              <label id="loginUser" htmlFor='LoginForm_user_name'> Username
              </label>
              <input
                required
                className='login-user_name'
                placeholder="Username"
                name='user_name'
                id='LoginForm_user_name'
                aria-label="enter user name"
                aria-required="true"
                aria-describedby="loginUser"
              />
              <span className="focus-input"></span>
            </div>
            <div className='login-input password'>
              <label id="loginPass" htmlFor='LoginForm_password'>Password
              </label>
              <input
                required
                className='login-password'
                placeholder="Password"
                name='password'
                type='password'
                id='LoginForm_password'
                aria-label="enter user password"
                aria-required="true"
                aria-describedby="loginPass"
              />
              <span className="focus-input"></span>
            </div>
            <div className="login-btn-container">
            <button type='submit' className="login-btn">
              Login
            </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}