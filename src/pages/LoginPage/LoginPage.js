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

  handleLoginSuccess = (ev) => {
    const { history } = this.props
    this.context.setAuthToken(ev)
    history.push('/home')
  }

  render() {
    return (
      <div className="login_page">
        <h1>Login</h1>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
          history={this.props.history}
        />
      </div>
    )
  }
}