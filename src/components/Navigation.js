import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css'

export default function Navigation() {
    return(
        <div className='navigation'>
            <Link to='/about-me'>
                <a>About Me</a>
            </Link>
            <Link to='/projects'>
                <a>Projects</a>
            </Link>
            <Link to='/contact-me'>
                <a>Contact</a>
            </Link>
        </div>
    );
}
