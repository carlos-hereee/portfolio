import React from "react";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import AboutMe from "./pages/About";
import shortid from "shortid";

const App = () => {
  const circle = Array(100).fill("circle");

  return (
    <div className="App">
      {circle.map((data) => (
        <div className="circle-container" key={shortid.generate()}>
          <div className="circle" />
        </div>
      ))}
      <header className="nav">
        <h1>Carlos Hernandez</h1>
      </header>
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
