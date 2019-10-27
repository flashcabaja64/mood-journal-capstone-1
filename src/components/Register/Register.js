import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import ValidateError from '../ValidateError/ValidateError'
import './Register.css'

export default class Register extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      error: null,
      full_name: '',
      user_name: '',
      nickname: '',
      password: '',
      touched: {
        full_name: false,
        user_name: false,
        nickname: false,
        password: false,
      }
    }
  }
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  onChangeHandle = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			touched: { [e.target.name]: true }
		})
  }

  validateFullname() {
    let fullName = this.state.full_name.trim();
    const allLetters = /[a-zA-Z]+\s\D/;

		if (fullName.length === 0) {
			return 'Input field cannot be empty';
		}
		if (fullName.length < 6) {
			return 'Please enter a name that is at least 6 characters long';
    }
    if (!allLetters.test(fullName)) {
      return 'Name must include only alphabetical letters';
    }
    if(fullName.length > 50) {
      return 'Your name must be less than 50 characters';
    }
  }
  
  validateUsername() {
    let username =  this.state.user_name.trim();

    if (username.length === 0) {
			return 'Input field cannot be empty';
		}
		if (username.length < 6) {
			return 'Please enter a name that is at least 6 characters long';
    }
    if(username.length > 50) {
      return 'Your name must be less than 50 characters';
    }
  }

  
  validatePassword(){
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])[\S]+/
    const password = this.state.password.trim();
    const passTest = this.state.password;

    if(password.length < 8){
      return 'Password must be longer than 8 characters';
    }
    if(password.length > 30){
      return 'Password must be less than 30 characters';
    }
    if(!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(passTest)){
      return 'Password must contain 1 upper case, lower case, number, and special character';
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let { full_name, user_name, nickname, password } = this.state
    
    AuthApiService.postUser({
      full_name,
      user_name,
      nickname,
      password,
    })
      .then(() => {
        full_name = ''
        user_name = ''
        password = ''
        nickname = ''
        this.props.onRegisterSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
  render() {
    //const { error } = this.state;
    const fullnameError = this.validateFullname();
    const usernameError = this.validateUsername();
    const passwordError = this.validatePassword();
    //const nicknameError = this.validateNickname();
    return (
      <div className="main-register">
        
        <div className="wrap-register">
          <div className="form-wrap-register">
            <form
              className='signup-form'
              onSubmit={this.handleSubmit}
            >
            <div className="register-input full_name">
              <label id="registerFull" htmlFor="full_name">Full-Name</label>
              <input
                className="register-full_name"
                placeholder='Full-Name'
                type="text"
                name='full_name'
                id='full_name'
                onChange={this.onChangeHandle}
                required
                aria-label="enter full name"
                aria-required="true"
                aria-describedby="registerFull"

              />
              <span className="focus-input"></span>
              <ValidateError message={fullnameError} />
            </div>
            <div className="register-input nickname">
              <label id="registerNick" htmlFor="nickname">Nickname</label>
              <input
                className="register-nickname"
                placeholder='Nickname'
                type="text"
                name='nickname'
                id='nickname'
                onChange={this.onChangeHandle}
                aria-label="enter nickname"
                aria-required="true"
                aria-describedby="registerNick"
              />
              <span className="focus-input"></span>
              {/* <ValidateError message={nicknameError} /> */}
            </div>
            <div className="register-input user_name">
              <label id="registerUser" htmlFor="user_name">Username</label>
              <input
                className="register-user_name"
                placeholder="Username"
                type="text"
                name='user_name'
                id='user_name'
                onChange={this.onChangeHandle}
                required
                aria-label="enter username"
                aria-required="true"
                aria-describedby="registerUser"

              />
              <span className="focus-input"></span>
              <ValidateError message={usernameError} />
            </div>
            <div className="register-input password">
              <label id="registerPass" htmlFor="password">Password</label>
              <input
                className="register-password"
                placeholder="Password"
                maxLength="31"
                type="password"
                name='password'
                id='password'
                onChange={this.onChangeHandle}
                required
                aria-label="enter password"
                aria-required="true"
                aria-describedby="registerPass"

              />
              <span className="focus-input"></span>
              <ValidateError message={passwordError} />
            </div>
            <div className="register-btn-container">
              <button
                type='submit'
                className="register-btn"
                disabled={ fullnameError || passwordError || usernameError }
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  }
}