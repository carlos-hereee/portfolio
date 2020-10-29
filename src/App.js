import React from "react";
import { Route } from "react-router-dom";
import Nav from "./pages/Navigation";
import ContactMe from "./pages/ContactMe";
import Projects from "./component/devProject";
import Footer from "./pages/Footer";
import AboutMe from "./pages/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={AboutMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact-me" component={ContactMe} />
      <Footer />
    </div>
  );
}

export default App;
