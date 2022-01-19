import React from 'react'
import './Header.css'

const Header = () => {

    const auth = localStorage.getItem('authenticated')

    return (
        <div className='Rectangle'>

            <div className='Oval'></div>
            <span className="PEEKaMEET">
                PEEKaMEET
            </span>

            <div className='btnRectangle'>
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
