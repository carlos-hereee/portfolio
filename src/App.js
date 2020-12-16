import React from "react";
import ContactMe from "./pages/ContactMe";
import Header from "./pages/Header";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import AboutMe from "./pages/About";
import Particle from "./components/Particle";

const App = () => (
  <div className="app">
    <Particle />
    <Header />
    <AboutMe />
    <Projects />
    <ContactMe />
    <Footer />
  </div>
);

export default App;
