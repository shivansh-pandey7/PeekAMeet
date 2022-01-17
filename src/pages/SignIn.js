import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import grp18 from '../assets/images/group-18.jpg'
import { useState } from 'react';
import './SignIn.css';

const SignIn = () => {

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

        
    }
    return (
        <div className='signInLayout'>
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
    )
}

export default SignIn
