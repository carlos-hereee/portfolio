import React from "react";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Project";
import AboutMe from "./pages/About";
import Introduction from "./pages/Introduction";
import Header from "./pages/Header";

const App = () => (
  <div className="app">
    <Header />
    <section className="body">
      <Introduction />
      <AboutMe />
      <Projects />
      <ContactMe />
    </section>
  </div>
);

export default App;
