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
                    <a>Home</a>
                </Link>
                <Link to='/projects'>
                    <a>Projects</a>
                </Link>
                <Link to='/about-me'>
                    <a>About Me</a>
                </Link>
                <Link to='/contact-me'>
                    <a>Contact</a>
                </Link>
            </div>
        </div>
    );
}