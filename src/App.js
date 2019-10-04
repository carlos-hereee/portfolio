import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Work from './components/Work'
import Home from './components/Home';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <h2>Hello, I'm Carlos Hernandez.</h2>
      <h2>I'm a full-stack web developer.</h2> 
      <p>This is a showcase of my projects and my abilities</p>
      
      <Navigation />
      <Route exact path = '/home' component ={Home} />
      <Route path = '/work' component ={Work} />
      <Route path = '/about-me' component ={AboutMe} />
      <Route path = '/contact-me' component ={ContactMe} />
      <Footer />
    </div>
  );
}

export default App;
