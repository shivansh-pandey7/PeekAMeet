import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const SignInProtectedRoute = (props) => {
    const token = localStorage.getItem('token');
    if(token){
        return <Redirect to='/user-details'/>;
    }else {
        return props.components;
    }
};

export default SignInProtectedRoute;
