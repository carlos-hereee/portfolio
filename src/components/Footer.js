import React from 'react';
import { Link } from 'react-router-dom';


export default function Navigation() {
    return(
        <div className='footer'>
            <Link to='/home' >
                <p>Home</p>
            </Link>
            <Link to='/work'>
                <p>Work</p>
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