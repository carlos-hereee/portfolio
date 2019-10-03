import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css'

export default function Navigation() {
    return(
        <div className='navigation'>
            <Link>
                <p>Home</p>
            </Link>
            <Link>
                <p>Work</p>
            </Link>
            <Link>
                <p>About Me</p>
            </Link>
            <Link>
                <p>Contact</p>
            </Link>
        </div>
    );
}