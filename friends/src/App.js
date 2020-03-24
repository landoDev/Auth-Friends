import React, { useState } from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import LoginForm from './components/LoginForm';
import { FriendsContext } from './contexts/FriendsContext';
import FriendsList from './components/FriendsList';

function App() {

  return (
    <div className="App">
      <h1>FRIENDS</h1>
      <nav>
        <Link to='/login' >Login</Link>
        <Link to='/friends-list' >Friends List</Link>
      </nav>
      <FriendsContext.Provider>
        <Switch>
          <PrivateRoute exact path='/friends-list' component={FriendsList} />
          <Route path='/login' component={LoginForm} />
        </Switch>
      </FriendsContext.Provider>
    </div>
  );
}

export default App;
