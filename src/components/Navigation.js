import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css'

export default function Navigation() {
    return(
        <div className='navigation'>
            <Link to='/home' >
                <p>Home</p>
            </Link>
            <Link to='/projects'>
                <p>Projects</p>
            </Link>
            <Link to='/about-me'>
                <p>About Me</p>
            </Link>
            <Link to='/contact-me'>
                <p>Contact</p>
            </Link>
        </div>
    );
}