import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import grp18 from '../assets/images/group-18.jpg'
import { useState } from 'react';
import newResponse from '../others/response'
import './SignIn.css';
import axios from 'axios';
import UserDetailsContext from '../store/UserDetailsContext';

import { useHistory } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

const SignIn = () => {
    const userDetailCtx = useContext(UserDetailsContext);

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validEmail, setValidEmail] = useState('');
    const [validPassword, setValidPassword] = useState('');

    const emailIsValid = () => {
        let containat = false;
        for(let i = 0; i < email.length; i++){
            if(email[i] === '@') return true;
        }

        return false;
    }

    const passIsValid = () => {
        if(password.length < 8) {
            return false;
        }
        let containsNumber = false;
        for(let i = 0; i < password.length; i++){
            let character = password[i];
            if(character >= 0 && character <= 9) containsNumber = true;
        }

        if(!containsNumber) {
  
            return false;
        }

        return true;
    }

    const onSubmit = () => {

        if(email){
            if(emailIsValid() === true){
                setValidEmail(false);
            }else {
                setValidEmail(true);
                return;
            }
            
            if(passIsValid() === true){
                setValidPassword(false);
            }else {
                setValidPassword(true);
                return;
            }
            
            
            console.log(email, password);
        }else {
            console.log('not valid')
            setValidPassword(true);
            setValidEmail(true);
            return;
        }
        userDetailCtx.setLoader(true);
        
        axios.post('http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/public/user/login',
        {email: email, password : password})
        .then(function(response){
            
            console.log("success " + response);
            // localStorage.setItem('token', response.data[0].token);
            
            // <---- signing In ----->
            userDetailCtx.setResponse(response);
            localStorage.setItem('token', response.data[0].token);
            localStorage.setItem('authenticated', true);
            console.log(localStorage.getItem('token'));
            history.replace('/user-details');
            // <---- signing In ----->
        userDetailCtx.setLoader(false);

            
        }).catch(function(error){
                console.log(userDetailCtx.loader);
                console.log("error " + error);
                // <---- signing In ----->
                userDetailCtx.setResponse(newResponse);
                localStorage.setItem('token', newResponse.data[0].token);
                localStorage.setItem('userId', newResponse.data[0].customer._id);
                localStorage.setItem('authenticated', true);
                console.log(localStorage.getItem('token'));
                history.replace('/user-details');
                userDetailCtx.setLoader(false);

                // <---- signing In ----->
            })

    }
    return (
        // {loader ? <Loader/> : 
        <LoadingOverlay
            active={userDetailCtx.loader}
            spinner
            text='Loading your content ....'
        >
                <div className='signInLayout'>
                    {console.log(userDetailCtx.loader)}
                    <Header/>
                        <div className='Mask'>
                            <img src={grp18}
                                className="Group-18"/>
                            <div>
                                <span className="PEEKaMEET-lets-you-n">
                                <span className="text-style-1">PEEKaMEET</span>lets you network more effectively to achieve your business and career goals
                                </span>
                                <div className='wrap'>
                                    <div class="freelancer">
                                        <span className="Freelancer">
                                            Freelancer
                                        </span>
                                    </div>
                                    <div className="jobSeekerRectangle">
                                        <span className="Job-Seeker">
                                            Job Seeker
                                        </span>
                                    </div>
                                    <div className="epRectangle">
                                        <span className="Enterpreneur">
                                            Enterpreneur
                                        </span>
                                    </div>
                                    <div className="mpRectangle">
                                        <span className="Mompreneur">
                                            Mompreneur
                                        </span>
                                    </div>  
                                </div>

                                <div className='grid-wrap'>
                                    <div className="internRectangle">
                                        <span className="Internship-Seeker">
                                            Internship Seeker
                                        </span>
                                    </div>  
                                    <div className="envRectangle">
                                        <span className="Environmental-Change">
                                            Environmental Change Maker
                                        </span>
                                    </div>  
                                </div>

                                <span className="Build-and-manage-you">
                                    Build and manage your network with PEEKaMEET
                                </span>

                                <div className="Email">
                                    Email
                                </div>

                                <input type='email' value={email} onChange={e => setEmail(e.target.value)} className="Rectangle-Copy-6" />
                                {validEmail && <p className='error'>Invalid Email</p>}

                                <div className="Email">
                                    Password
                                </div>

                                <input onChange={e => setPassword(e.target.value)} className="Rectangle-Copy-6" type='password'/>
                                {validPassword && <p className='error'>Invalid Password</p>}

                                <button onClick={onSubmit} className='submit-btn'>
                                    Sign In
                                </button>

                                <div className='rememberMe-wrap'>
                                    <input type='checkbox'/>
                                    <span className='Remember-Me'>Remember Me</span>

                                    <span className="Forgot-Password">
                                        Forgot Password
                                    </span>
                                </div>

                                <div>
                                    <span className="Dont-have-an-accoun">
                                        Don’t have an account?
                                    </span>
                                    <span className="Sign-Up">
                                        Sign Up
                                    </span>
                                </div>
                            </div>  
                        </div>
                    <Footer/>
                </div>

        </LoadingOverlay>
            
        // }
    )
}

export default SignIn
