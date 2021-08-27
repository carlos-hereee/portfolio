import React from "react";
import ContactMe from "./pages/ContactMe";
import Header from "./pages/Header";
import Projects from "./pages/Project";
import Footer from "./pages/Footer";
import AboutMe from "./pages/About";

const App = () => (
  <div className="app">
    <Header />
    <AboutMe />
    {/* <Projects />
    <ContactMe /> */}
    <Footer />
  </div>
);

export default App;
