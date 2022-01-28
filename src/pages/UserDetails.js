import React, { useContext } from 'react'
import Header from '../components/Header';
import UserDetailsContext from '../store/UserDetailsContext'
import newResponse from '../others/response';
import './UserDetails.css';
import axios from 'axios';
import { useEffect } from 'react';

import messageIcon from '../assets/images/icons8-envelope-48.png'
import grid from '../assets/images/icons8-internet-50.png';
import phone from '../assets/images/icons8-phone-24.png';
import Footer from '../components/Footer';
import UserDetailHeader from '../components/UserDetailHeader';

const UserDetails = () => {
    const ctx = useContext(UserDetailsContext);
    const token = localStorage.getItem('token');
    
    const userId = localStorage.getItem('userId');
    useEffect(() => {
        axios.get( `http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/user/nearby`, {userId:userId, authorization:token})
        .then(function(response){
            console.log("hello ----> ", response);
            ctx.setResponse(response);
        }).catch(function(error){
            ctx.setResponse(newResponse);
        })
    }, [])
    return (
        <div className=''>
            <UserDetailHeader/>
            <div className="Lorem-ipsum-dolor-si">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eros sit amet sem viverra porttitor vel quis justo. Sed tempus, lorem suscipit vulputate mollis, mi dolor bibendum mi, non auctor nisi est nec nunc.<span className="text-style-1">More</span>
            </div>
            
            <div className=''>

                <div className='skill-wrap'>
                    <div className='skill-margin'>
                        <p className='Industrys'>Industry(s)</p>
                        <div className='industry'>
                            <div className="industry1">
                                <span class="Web-Development">
                                Web Development
                            </span>
                            </div>
                            <div className="industry1">
                                <span class="Web-Development">
                                Fine Arts
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className='skill-margin'>
                        <p className='Industrys'>Organisations and Groups</p>
                        <div className='industry'>
                            <div className="orgAndGroups">
                                <span class="orgAndGroupsDev">
                                IAW
                            </span>
                            </div>
                            <div className="orgAndGroups">
                                <span class="orgAndGroupsDev">
                                Denver Rugby
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className='skill-margin'>
                        <p className='Industrys'>Interests and Activities</p>
                        <div className='industry'>
                            <div className="interestAndActivities">
                                <span className="interestsAndActivitiesDev">
                                Hiking
                            </span>
                            </div>
                            <div className="interestAndActivities">
                                <span className="interestsAndActivitiesDev">
                                Professional Speaking  
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className='skill-margin'>
                        <p className='Industrys'>Alumni</p>
                        <div className='industry'>
                            <div className="alumni">
                                <span class="alumniDev">
                                UC Technology
                            </span>
                            </div>
                            <div className="alumni">
                                <span class="alumniDev">
                                Spark Colorado
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className='skill-margin'>
                        <p className='Industrys'>Languages</p>
                        <div className='industry'>
                            <div className="Languages">
                                <span class="LanguagesDev">
                                English
                            </span>
                            </div>
                            <div className="Languages">
                                <span class="LanguagesDev">
                                Spanish
                            </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='address-wrap'>
                <div className='address-margin'>
                    <div className='contact-info'>
                        <img height={28} width={28} src={messageIcon}  /> 
                        <span className="jgainesgmailcom">
                        j.gaines@gmail.com
                        </span>
                    </div>

                    <div className='contact-info'>
                        <img height={28} width={28} src={grid}  /> 
                        <span className="jgainesgmailcom">
                        www.goldbrands.com
                        </span>
                    </div>

                    <div className='contact-info'>
                        <img height={28} width={28} src={phone}  /> 
                        <span className="jgainesgmailcom">
                            1-234-1414
                        </span>
                    </div>
                </div>


                <div className='address-margin'>
                    <span className="Business-Address">
                        Business Address
                    </span>
                    <p className='Address'>
                        A Digital Agency
                        123 Sycamore Dr
                        Torrington CT, 06790
                    </p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default UserDetails