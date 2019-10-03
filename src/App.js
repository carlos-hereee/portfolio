import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Work from './components/Work'
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <h2>Hello, I'm Carlos Hernandez.</h2>
      <h2>I'm a full-stack web developer.</h2> 
      
      <Navigation />
      <Route exact path = '/home' compontent ={Home} />
      <Route path = '/work' compontent ={Work} />
      <Route path = '/about-me' compontent ={AboutMe} />
      <Route path = '/contact-me' compontent ={ContactMe} />
      
    </div>
  );
}

export default App;
