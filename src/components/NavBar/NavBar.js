import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service'
//import MoodPage from '../../pages/MoodPage/MoodPage'
import './NavBar.css'

//refer to defined routes in App.js, be consistent on the route naming.
//create log-out link
export default class NavBar extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearUserId();
  }

  // renderUserName = () => {
  //   if(TokenService.getAuthToken()) {
  //     return <h3 className='username'>{TokenService.getAuthToken()}</h3>
  //   } else {
  //     return <h3 className='username'>Guest</h3>
  //   }
  // }

  renderLogoutLink() {
    return (
      <div className="log-in">
        {/* {this.renderUserName} */}
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
      </div>
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
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
          </li>
        {/* </ul> */}
      </nav>
    )
  }
}