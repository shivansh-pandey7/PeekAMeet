import './App.css';
import React from 'react';
import SignIn from './pages/SignIn';
import { Route, Router, Switch } from 'react-router-dom';
import UserDetails from './pages/UserDetails';
import ProtectedRoute from './components/ProtectedRoute';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) setLoggedIn(true);
  }, [isLoggedIn]);

  return (
    <div className="">
      {isLoggedIn ? <Redirect to='/user-details'/> : <Redirect to='/'/>}
      <Switch>
        <Route path='/' exact>
          <SignIn></SignIn>
        </Route>

        <Route path='/user-details' exact>
            <ProtectedRoute components={<UserDetails/>} />
            
        </Route>
      </Switch>
    </div>
  );
}

export default App;
