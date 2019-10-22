import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css'
import NavContext from '../../MoodContext/NavContext'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  static contextType = NavContext

  handleLoginSuccess = (token) => {
    console.log('testing')
    //const { location, history } = this.props
    const { history } = this.props
    // const destination = (location.state || {}).from || '/home'
    this.context.setAuthToken(token)
    //const destination = '/home';
    history.push('/home')
  }

  render() {
    return (
      <div className="login_page">
        <h1>Login</h1>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    )
  }
}