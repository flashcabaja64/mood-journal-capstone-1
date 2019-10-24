import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
            activeClassName="active"
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
      <div className="log-out">
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
          activeClassName="active"
          className="nav-link">
          Log-in
        </NavLink>
        </li>
      </div>
    )
  }

  render() {
    return (
      <nav className='nav'>
        <header className="header">
          <Link to="/home"><h2 className="app-title">Mood Journal</h2></Link>
        </header>
        {/* <ul>
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
          </li> */}
          <li>
          {this.context.authToken
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
          </li>
        {/* </ul> */}
      </nav>
    )
  }
}