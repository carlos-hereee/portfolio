import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header'
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects'
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <Route exact path = '/home' component ={Home} />
      <Route path = '/projects' component ={Projects} />
      <Route path = '/about-me' component ={AboutMe} />
      <Route path = '/contact-me' component ={ContactMe} />
      <Footer />
    </div>
  );
}

export default App;
