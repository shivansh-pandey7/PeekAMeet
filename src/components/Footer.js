import React from 'react';
import './Footer.css';
import instagram from '../assets/images/instagram-fill.png';
import youtube from '../assets/images/youtube-fill.svg';
import facebook from '../assets/images/facebook-box-fill.svg';
import twitter from '../assets/images/twitter-fill.svg';
const Footer = () => {
    return (
        <div className='footerRectangle'>
            <span className="PEEKaMEET2020">
                PEEKaMEET©2020
            </span>            
            <span className="Follow-Us">
                Follow Us:
            </span>
            <img src={instagram}
                className="instagram-fill"></img>

            <img src={youtube}
                className="youtube-fill"></img>
            <img src={facebook}
                className="facebook-box-fill"></img>
            <img src={twitter}
                className="twitter-fill"></img>
            <span className="FAQs">
                FAQs
            </span>
            <span className="Terms-Conditions">
                Terms & Conditions
            </span>
            <span className="Privacy-Policy">
                Privacy Policy
            </span>
            <span className="About-Us-Copy">
                About Us
            </span>

            <span className="Press">
                Press
            </span>

            <span className="Contact-Us">
                Contact Us
            </span>

            <span className="Perks">
                Perks
            </span>
            <span className="Perks">
                Blogs
            </span>
        </div>
    )
}

export default Footer
