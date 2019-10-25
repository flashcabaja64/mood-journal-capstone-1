import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service'
import NavContext from '../../MoodContext/NavContext'
//import MoodPage from '../../pages/MoodPage/MoodPage'
import './NavBar.css'

//refer to defined routes in App.js, be consistent on the route naming.
//create log-out link
export default class NavBar extends Component {

  static contextType = NavContext

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearUserId();
    this.context.setAuthToken(TokenService.getAuthToken())
  }

  renderUserName = () => {
    if(this.context.authToken) {
      return <h3 className='username'>{TokenService.getUserName()}</h3>
    } else {
      return <h3 className='username'>Guest</h3>
    }
  }

  renderLogoutLink() {
    return (
      <nav className="log-in">
        {this.renderUserName}
        <li>
          <NavLink
            to='/home'
            activeClassName="active"
            className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/moods'
            activeClassName="active"
            className="nav-link">
            My Moods
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/newmoods'
            activeClassName="active"
            className="nav-link">
            New Mood
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard'
            activeClassName="active"
            className="nav-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            onClick={this.handleLogoutClick}
            exact
            to='/home'>
            Logout
          </NavLink>
        </li>
      </nav>
    )
  }

  renderLoginLink() {
    return (
      <Fragment>
        <li>
          <NavLink
            to='/home'
            activeClassName="active"
            className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
        <NavLink
          to="/register"
          activeClassName="active"
          className="nav-link">
          Register
        </NavLink>
        </li>
        <li>
        <NavLink
          to='/login'
          className="nav-link">
          Log-in
        </NavLink>
        </li>
      </Fragment>
    )
  }

  render() {
    return (
      <nav className='nav'>
        <header className="main-app-name">
        <NavLink
          exact
          to="/"
          className="app-title">
          Mood Journal
        </NavLink>
          <Fragment>
            {this.context.authToken
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </Fragment>
        </header>
      </nav>
    )
  }
}