import './App.css';
import React from 'react';
import SignIn from './pages/SignIn';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import UserDetails from './pages/UserDetails';
import ProtectedRoute from './components/ProtectedRoute';
import { useState, useEffect } from 'react';
import DisplayNotes from './pages/DisplayNotes';
import AddNote from './pages/AddNote';
import EditNote from './pages/EditNote';
import SignInProtectedRoute from './components/SignInProtectedRoute';

function App() {  
  const [isLoggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) setLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <div className="App">
      
      <Switch>
        <Route path='/' exact>
          <ProtectedRoute components={<UserDetails/>} />
        </Route>
        <Route path='/sign-in' exact>
          <SignInProtectedRoute components={<SignIn/>}/>    
        </Route>
        <Route path='/user-details' exact>
            <ProtectedRoute components={<UserDetails/>} />
        </Route>
        <Route path='/display-notes' exact>
            <ProtectedRoute components={<DisplayNotes/>}  />
        </Route>
        <Route path='/add-note' exact>
            <ProtectedRoute components={<AddNote/>}  />
        </Route>

        <Route path='/edit-note/:noteId' exact>
            <ProtectedRoute components={<EditNote/>}  />
        </Route>
        <Route path='*'>
            <Redirect to='/' />
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;


