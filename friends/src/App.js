import React from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <h1>FRIENDS</h1>
      <nav>
        <Link to='/login' >Login</Link>
      </nav>
      <Switch>
        <Route path='/login' component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
