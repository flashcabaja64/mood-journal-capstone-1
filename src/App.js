import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../src/components/Utils/PrivateRoute';
import PublicOnlyRoute from '../src/components/Utils/PublicOnlyRoute';
import AddForm from './components/EntryForm/EntryForm';
import LoginPage from './pages/LoginPage/LoginPage';
import MoodPage from './pages/MoodPage/MoodPage';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Register/Register';

//reroute pages to components in the PAGES folder
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
            component={LoginPage}
          />
          <PrivateRoute
            path={'/entries/:entry_id'}
            component={MoodPage}
          />
        </Switch>
      </main>
    );
  }
}

export default App;