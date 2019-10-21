import React from 'react';

import './skills.css'

export default function Skills() {
    return(
        <div>
            <div className='skills-header' >
                <div className='skills-list'>
                    <p>Front End Languages and Frameworks</p>
                    <ul> 
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS & SCSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Node
                        </li>
                    </ul>
                </div>
                <div className='skills-list'>
                    <p>Back-end Languages and Frameworks</p>
                    <ul>
                        <li>
                            Node
                        </li>
                        <li>
                            Firebase
                        </li>
                    </ul>
                    </div>
            </div>
        </div>
    )
}
