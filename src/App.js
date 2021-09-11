import React from "react";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Project";
import Footer from "./pages/Footer";
import AboutMe from "./pages/About";
import Introduction from "./pages/Introduction";

const App = () => (
  <div className="app">
    <div className="theme">
      <Introduction />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
    <Footer />
  </div>
);

export default App;
