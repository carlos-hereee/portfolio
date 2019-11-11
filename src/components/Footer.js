import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

export default function Navigation() {
    return(
        <div className='footer'>
            <div className='footer-summary'>
                <p> Feel free to check me out in my LinkIn, github</p>
                githubicon 
                linkedin icon and 
                maybe something else here
            </div>
            <div className='footer-links'>
                <Link to='/about-me'>
                    About Me
                </Link>
                <Link to='/skills'>
                    Skills
                </Link>
                <Link to='/projects'>
                    Projects
                </Link>
                
                <Link to='/contact-me'>
                    Contact
                </Link>
            </div>
        </div>
    );
}