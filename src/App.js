import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../src/components/Utils/PrivateRoute';
import PublicOnlyRoute from '../src/components/Utils/PublicOnlyRoute';
import AddForm from './components/AddForm/AddForm';
import LoginForm from './components/LoginForm/LoginForm';
import MoodCollection from './components/MoodCollection/MoodCollection';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Register/Register';

class App extends Component {

  constructor() {
    super()
  }

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  state = { hasError: false }


  render() {
    return (
      <main className='App'>
        {this.state.hasError && <p className='error'>There was an error.</p>}
        <Switch>
          <Route
            exact
            path={'/'}
            component={MoodCollection}
            />
          <PublicOnlyRoute
            path={'/register'}
            component={Register}
          />
          <PublicOnlyRoute
            path={'/login'}
            component={LoginForm}
          />
        </Switch>
      </main>
    );
  }
}

export default App;