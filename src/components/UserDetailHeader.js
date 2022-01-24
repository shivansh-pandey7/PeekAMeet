import React, { useContext } from 'react';
import './UserDetailHeader.css';
import SignedInHeader from './SignedInHeader';
import circleImage from '../assets/images/play-circle-filled.svg';
import UserDetailsContext from '../store/UserDetailsContext';
import newResponse from '../others/response';


const UserDetailHeader = () => {
    const ctx = useContext(UserDetailsContext);
    // ctx.setResponse(newResponse);
    const customer = newResponse.data[0].customer;
    return (
        <div>
            <SignedInHeader/>
            <div className='bg-image'>
                <img className='profile-image' height={100} width={100} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
                {/* {console.log(ctx.response)} */}
            </div>

            <div className='info'>
                <p className='fullNameUser'>{`${customer.firstName} ${customer.lastName}`}</p>
                <p className='designation'> {customer.jobTitle} </p>
                <p className='designation'>{customer.company}</p>
                <img className='circleImage' src={circleImage}  />
                
                <div className='button-wrap'>
                    <button className='btn'> Share </button>
                    <button className='btn'> Edit Profile </button>
                </div>

            </div>
        </div>
    )
}

export default UserDetailHeader
