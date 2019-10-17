import React, { Component } from 'react';
import Register from '../../components/Register/Register';

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
      <div className="RegisterPage">
        <h2>Registration Page</h2>
        <Register
          onRegisterSuccess={this.handleRegisterSuccess}
        />
      </div>
    )
  }
}