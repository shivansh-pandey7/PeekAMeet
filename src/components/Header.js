import React from 'react'
import './Header.css'
import logo from '../assets/images/header_logo.png';

const Header = () => {

    const auth = localStorage.getItem('authenticated')

    return (
        <div className='Rectangle'>

            <div className=''>
                <img height={38} width={38} style={{"border-radius":"20px"}} src={logo}  />
            </div>
            <span className="PEEKaMEET">
                PEEKaMEET
            </span>

            <div className='signInRectangle'>
                <span className="Sign-In">Sign In</span>
            </div>

            <div className='signUpRectangle'>
                <span className="Sign-Up">
                    Sign Up
                </span>
            </div>

        
            
        </div>
    )
}

export default Header
