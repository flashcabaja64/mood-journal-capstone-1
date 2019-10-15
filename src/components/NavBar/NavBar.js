import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/home'>
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
            <NavLink to='/register'>
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}