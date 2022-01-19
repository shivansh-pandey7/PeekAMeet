import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import SignIn from '../pages/SignIn';

const ProtectedRoute = (props) => {
    const token = localStorage.getItem('token');
    if(token){
        return props.components;
    }else {
        return <Redirect to='/'/>;
    }
}

export default ProtectedRoute
