import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

export default function Navigation() {
    return(
        <div className='footer'>
            <div className='footer-summary'>
                <p> Feel free to check me out in my LinkIn, github</p>
            </div>
            <div className='footer-links'>
                <Link to='/home' >
                    <p>Home</p>
                </Link>
                <Link to='/projects'>
                    <p>projects</p>
                </Link>
                <Link to='/about-me'>
                    <p>About Me</p>
                </Link>
                <Link to='/contact-me'>
                    <p>Contact</p>
                </Link>
            </div>
        </div>
    );
}