import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import TokenService from '../../services/token-service'

//refer to defined routes in App.js, be consistent on the route naming.
//create log-out link
export default class NavBar extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }

  renderLogoutLink() {
    return (
      <div className="log-in">
        <Link
          onClick={this.handleLogoutClick}
          to='/'
        >
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className="log-out">
        <Link
          to="/register"
        >
        Register
        </Link>
        <Link
          to='/login'>
          Log-in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/moods'>
              My Moods
            </NavLink>
          </li>
          <li>
            <NavLink to='/newmoods'>
              New Mood
            </NavLink>
          </li>
          <li>
            <NavLink to='/login'>
              Log-in
            </NavLink>
          </li>
          <li>
            <NavLink to='/register'>
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}