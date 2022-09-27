import React from "react";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Project";
import AboutMe from "./pages/About";
import Header from "./pages/Header";

const App = () => (
  <div className="app">
    <Header />
    <section className="body">
      <AboutMe />
      <Projects />
      <ContactMe />
    </section>
  </div>
);

export default App;
