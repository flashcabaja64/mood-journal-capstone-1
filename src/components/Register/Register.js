import { Component } from 'react';

export default class Register extends Component {
  render() {
    return (
      <section>
    <header>
        <h3>Start Journaling Now</h3>
    </header>
    <form className='signup-form'>
        <div>
          <label htmlFor="first-name">First name</label>
          <input placeholder='First Name' type="text" name='first-name' id='first-name' />
        </div>
        <div>
          <label htmlFor="last-name">Last name</label>
          <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
        </div>
        <div>
          <label htmlFor="username">Email</label>
          <input type="text" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <button type='submit'>Sign Up</button>
    </form>
  </section>
    )
  }
}