import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import config from './config';
import PrivateRoute from '../src/components/Utils/PrivateRoute';
import PublicOnlyRoute from '../src/components/Utils/PublicOnlyRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import MoodPage from './pages/MoodPage/MoodPage';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage'
//import MoodListItem from './components/MoodListItem/MoodListItem';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AddEntry from './components/AddEntry/AddEntry';
import EditForm from './components/EditForm/EditForm';
import './App.css'

//reroute pages to components in the PAGES folder
class App extends Component {

  state = {
    error: null,
    hasError: false,
  };

  //state = { hasError: false }

  render() {
    return (
      <main className='App'>
        {/* {this.state.error && <p className='error'>There was an error.</p>} */}

      <NavBar />
      <Switch>
        <Route
          path={'/home'}
          component={LandingPage}
        />
        <PublicOnlyRoute
          path={'/register'}
          component={RegisterPage}
        />
        <PublicOnlyRoute
          path={'/login'}
          component={LoginPage}
        />
        <PrivateRoute
          path={'/entries/:entry_id'}
          component={EditForm}
        />
        <PrivateRoute
          path={'/newmoods'}
          component={AddEntry}
        />
        <PrivateRoute
          path={'/moods'}
          component={MoodPage}
        />
        <Route 
          component={NotFoundPage}
        />
      </Switch>
      </main>
    );
  }
}

export default App;