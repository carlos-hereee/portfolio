import React from 'react';

import Pic from '../assets/carlos-hernandez-picture.PNG'
import './AboutMe.css'

export default function AboutMe() {
    return(
        <div>
            <div className='about-me-header' >
                <h1>About Me </h1>
            </div>
            <div className='about-me-content'>
                <img src={Pic} alt='temp-headshot'/>
                <div className='about-me-content-para'>
                    <h3>
                        Carlos Hernandez
                    </h3>
                    <p>
                        Always been passionate about coding, ever since I was in the 5th grade and I saw a computer for the first time. 
                    </p>
                </div>
            </div>
        </div>
    )
}
