import React, { Component } from 'react';
import Register from '../../components/Register/Register';
import './RegisterPage.css'

export default class RegisterPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegisterSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return(
      <div className="register_page">
        <h2 className="register-title">Start Journaling Now</h2>
        <Register
          onRegisterSuccess={this.handleRegisterSuccess}
        />
      </div>
    )
  }
}