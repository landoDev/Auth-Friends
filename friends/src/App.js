import React, { useState, useEffect } from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import LoginForm from './components/LoginForm';
import { FriendsContext } from './contexts/FriendsContext';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';


function App() {

  return (
    <div className="App">
      <h1>FRIENDS</h1>
      <nav>
        <Link to='/login' >Login</Link>
        <Link to='/friends-list' >Friends</Link>
        <Link to='/add-friends'>Add Friends</Link>
      </nav>
      <FriendsContext.Provider>
        <Switch>
          <PrivateRoute exact path='/add-friends' component={FriendForm} />
          <PrivateRoute exact path='/friends-list' component={FriendsList} />
          <Route path='/login' component={LoginForm} />
        </Switch>
      </FriendsContext.Provider>
    </div>
  );
}

export default App;
