import React from 'react'
import add from '../assets/images/add.svg';
import share from '../assets/images/share-24-px.svg';
import groupCopy from '../assets/images/group-copy.svg';
import menuLine from '../assets/images/menu-line.svg';
import './SignedInHeader.css';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/images/header_logo.png';


const SignedInHeader = () => {
    const history = useHistory();

    const loggingOut = () => {
        localStorage.clear();
        history.replace('/');
    }
    return (
        <div className='Rectangle'>

            <div className=''>
                <img height={38} width={38} src={logo}  />
            </div>
            <span className="PEEKaMEET">
                PEEKaMEET
            </span>

            <div className='btnRectangle'>
                <img src={add} className='image-style' />
                <img src={share} className='image-style'/>
                <Link to='/display-notes'><img src={groupCopy} className='image-style'/></Link>
                <img src={menuLine} className='image-style'/>
                <button className='signOutBtn' onClick={loggingOut}>
                    Sign Out
                </button>

            </div>


        
            
        </div>
    )
}

export default SignedInHeader
