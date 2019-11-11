import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css'

export default function Navigation() {
    return(
        <div className='navigation'>
            <Link to='/about-me'>
                About Me    
            </Link>
            <Link to='skills'>
                Skills
            </Link>
            <Link to='/projects'>
                Projects    
            </Link>
            <Link to='/contact-me'>
                Contact 
            </Link>
        </div>
    );
}
