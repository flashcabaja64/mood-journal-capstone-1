import React, { Component } from 'react';
import TokenService from '../services/token-service';

const NavContext = React.createContext({
  setAuthToken: () => {}
})

export default NavContext;

export class NavProvider extends Component {
  state = {
    authToken: TokenService.getAuthToken()
  }

  setAuthToken = authToken => {
    this.setState({
      authToken
    })
  }
  
  render() {
    const value = {
      authToken: this.state.authToken,
      setAuthToken: this.setAuthToken
    }
    return (
      <NavContext.Provider value={value}>
        {this.props.children}
      </NavContext.Provider>
    )
  }
}