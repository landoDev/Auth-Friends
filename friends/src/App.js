import React, { useState } from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { FriendsContext } from './contexts/FriendsContext';

function App() {

  return (
    <div className="App">
      <h1>FRIENDS</h1>
      <nav>
        <Link to='/login' >Login</Link>
      </nav>
      <FriendsContext.Provider>
        <Switch>
          <Route path='/login' component={LoginForm} />
        </Switch>
      </FriendsContext.Provider>
    </div>
  );
}

export default App;
