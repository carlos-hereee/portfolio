import React from "react";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import AboutMe from "./pages/About";

const App = () => (
  <div className="App">
    <header className="nav">
      <h1>Carlos Hernandez</h1>
    </header>
    <AboutMe />
    <Projects />
    <ContactMe />
    <Footer />
  </div>
);

export default App;
